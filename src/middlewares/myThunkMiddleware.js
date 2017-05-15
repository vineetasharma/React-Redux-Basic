/**
 * Created by ttn on 15/05/17.
 */
const myThunkMiddleware = (store) => (next) => (action) =>{
  if(typeof action === 'function'){
    action(store.dispatch);
  } else {
    next(action)
  }
};

export default myThunkMiddleware;