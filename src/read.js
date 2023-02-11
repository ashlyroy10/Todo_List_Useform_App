import  { useState } from 'react'

const useForm = (todoitem) => {
  
  var[val,setVal] = useState(todoitem);
  return [val,(event) => {
    setVal(
        {
            ...val,[event.target.name]:event.target.value
        }
    )
  }]
}

export default useForm