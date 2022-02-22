import { useState, useEffect, useCallback } from 'react';
import {useDispatch} from 'react-redux';

function useData(){
  const [images, setImages] = useState(null);
  const [users, setUsers] = useState(null);
  const [descriptions, setDescriptions] = useState(null);
  const dispatch = useDispatch();

  const getData = useCallback(async()=>{
    const response = await fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9 ',{
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9 ',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    const fetchedImages = data.map(object=>object.urls.small);
    const fetchedUsers = data.map(object=>object.user.name);
    const fetchedDescriptions = data.map(object=>object.alt_description);

    setImages(fetchedImages);
    setUsers(fetchedUsers);
    setDescriptions(fetchedDescriptions);
    
    dispatch({type: 'SET_LOADER'}, false);
  },[]);

  return {images, users, descriptions, getData};
}

export default useData;