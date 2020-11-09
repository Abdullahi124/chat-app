import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './ChatRooms.style.css'
import db from './firebase'

function ChatRooms({id,name,addNewChat}) {
    const [seed,setSeed]=useState('');
    const [messages,setMessages]=useState('');

    useEffect(()=>{
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map(doc=>(
                    doc.data()
                )))
            ))
        }
    },[id])
   

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])



    const newChat=()=>{
        const roomName=prompt('Enter the name of the chat');
        console.log(roomName);
        if(roomName){
            db.collection('rooms').add({
                name:roomName
            })

        }
    }
    return !addNewChat? ( 
           <Link to={`/room/${id}`}> 
      
        <div className='chatRooms'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt='' />
            <div className='chatRoom-details'>
                  <span>{name}</span>
                <span>{messages[0]?.message}</span>

            </div>
            
        </div>
        </Link>
       ) :(
            <div  onClick={newChat} className='chatRooms'>
                <h3 >Add New Chat</h3>

            </div>
        )
    
}

export default ChatRooms
