import React, { useEffect, useState } from 'react'
import './Chat.style.css'
import ChatRooms from './ChatRooms'
import db from './firebase';

function Chat() {
    const [rooms,setRoom]=useState([]);
    
    useEffect(()=>{

        db.collection('rooms').onSnapshot(snapshot=>(
            setRoom(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        ))
   
      
       
        

    },[])
    
    return (
        <div className='chat'>
            <h1>Chat</h1>
            <div className='chat-rooms'>
                

                <ChatRooms addNewChat/>
                {
                    rooms.map(room=>(
                        <ChatRooms key={room.id} name={room.data.name} id={room.id} />
                    ))
                }


            </div>
            
        </div>
    )
}

export default Chat
