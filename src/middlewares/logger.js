/**
 * Created by ttn on 15/05/17.
 */
const loggerMiddleware = (store) => (next) => (action) =>{
  console.log('Action TYPE::::',action.type);
  next(action)
};

export default loggerMiddleware;