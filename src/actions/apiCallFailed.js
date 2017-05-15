/**
 * Created by ttn on 15/05/17.
 */
const apiCallFailed=(data)=>{
  return {
    type:'API_FAILED',
    data,
  }
};
export default apiCallFailed;