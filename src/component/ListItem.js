import { Avatar } from '@mui/material'
import React from 'react'
import './ListItem.css'

function ListItem({data}) {
  console.log(data)
  return (
    <div className='listItem'>
      {
        data.map(list =>{
          return(
            <>
            <div className='mainDiv'>
            <div className='left'>
            <Avatar src={list.avatar}/>
            </div>

            <div className='right'>
            {list.first_name + " "}
            {list.last_name}
            <br/>
            {list.email}
            </div>

            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default ListItem