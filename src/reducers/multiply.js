/**
 * Created by ttn on 15/05/17.
 */

const multilpyReducer= (state={result:0},action)=>{
  switch (action.type){
    case 'multi': return {result:action.data.num1*action.data.num2}
  }
  return state;
};

export default multilpyReducer;