import React,{useState,useEffect} from 'react'
import axios from "axios"

function UserList() {
    const [listOfUser,setlistOfUser]=useState([])
    const getUser=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((Response)=>{
            console.log(Response)
            setlistOfUser(Response.data)
        })
    }
    useEffect(()=>(getUser),[]);

  return (
    <div>
        {
            listOfUser.map((users)=>(
                <div>
                <h1>{users.name}</h1>
                <h2>{users.username}</h2>
                <h3>{users.email}</h3>
                    </div>
            ))
        }
    </div>
  )
}

export default UserList