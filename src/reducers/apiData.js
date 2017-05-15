/**
 * Created by ttn on 15/05/17.
 */
const initState={
  loading:false,
  users: [],
  error:'',
};
const apiReducer= (state=initState,action)=>{
  switch (action.type){
    case 'Loading_Data': return {...state, loading:true}
    case 'API_FAILED': return {...state, loading:false, error:action.data}
    case 'API_SUCCESS': return {...state, loading:false, users: action.data}
  }
  return state;
};

export default apiReducer;