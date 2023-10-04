import {useState} from 'react';


const useFlipCard = (val) => {
  const [state, setState] = useState(val);

  const toggle = () => {
    setState(isUp => !isUp)
  }
  
  return [state, toggle]
}

export default useFlipCard;