import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

// fetchShow.js
export const fetchShow = () => {
    return axios.get("")
      .then(res => {
        console.log(res)  
       return res // or res.data, however you want to set that up
  })
  .catch(err => {
    console.error("error fetching data from api, err: ", err.message);
    return err;
  });
}
    
   // App.js
  useEffect(() => {
    fetchShow
.then(res => {
        // set state with the data
        const [state, setState] =useState("")
      })
      .catch(err => {
        console.error("error fetching data from api, err: ", err.message);
        return err;
      });
    }, []);