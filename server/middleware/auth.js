import jwt from 'jsonwebtoken';
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    //If it is >500 it is google auth
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');
      console.log(decodedData);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token, 'test');
      req.userId = decodedData?.sub; //sub is google id
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;
