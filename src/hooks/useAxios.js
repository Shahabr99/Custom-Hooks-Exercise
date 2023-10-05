import {useState, useEffect} from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const useAxios = (url) => {

  const [response, setResponse] = useState(null)
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function getData() {
        const res = await axios.get(url)
        setResponse(res)
      }
      getData()
  }, [url])

  const addCards = () => {
    setCards(data => [
      ...data, 
      {...response.data, id: uuid()}
    ])
  }

  return [cards, addCards]
}


export default useAxios