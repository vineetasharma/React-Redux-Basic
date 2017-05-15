/**
 * Created by ttn on 15/05/17.
 */

const multiply = (num1,num2)=>{
  return{
    type: 'multi',
    data: {
      num1,
      num2,
    }
  }
};

export default multiply;