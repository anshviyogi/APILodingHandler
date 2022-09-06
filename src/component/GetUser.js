import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

function GetUser() {
    const[loading,setLoading] = useState(true)
    const[result,setResult] = useState('')

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(result =>{
                setResult(result.data)
                setLoading(false)
            })
    },[])

    if(loading){
        return <h1>Loading Content</h1>
    }else{
        return(<ListItem data={result}/>)
    }
  
}

export default GetUser