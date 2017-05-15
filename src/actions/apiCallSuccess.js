/**
 * Created by ttn on 15/05/17.
 */

const apiCallSuccess=(data)=>{
  return {
    type:'API_SUCCESS',
    data,
  }
};
export default apiCallSuccess;