/**
 * Created by ttn on 15/05/17.
 */
import apiCallSuccess from './apiCallSuccess';
import apiCallFailed from './apiCallFailed';
import apiCallStarted from './apiCallStarted';

const asyncAction=()=>{
  return dispatch=>{
    dispatch(apiCallStarted());
    fetch('http://rest.learncode.academy/api/ttn/users')
      .then(response => response.json())
      .then(data => {
        dispatch(apiCallSuccess(data));
      })
      .catch(err => {
        dispatch(apiCallFailed(err));
      });
  }
};

export default asyncAction;