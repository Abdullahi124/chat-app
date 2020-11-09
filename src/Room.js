import React, { useEffect, useState } from 'react'
import './Room.style.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Avatar } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase'
import { useStateValue } from './StateProvider';

function Room() {
   
    const [roomName,setRoomName]=useState('');
    const [input,setInput]=useState('');
    const [messages,setMessages]=useState([])
    const {roomId}=useParams();
    const [seed,setSeed]=useState('');
    const [{user},dispatch]=useStateValue();
   

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])
    

   useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                setRoomName(snapshot.data().name)
            ))
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map(doc=>(
                     doc.data()
                )))
            ))
           
        }
    },[roomId])
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log(input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message:input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
       
        setInput('')
    }
    
return (
     <div className='room'>
            <h2>Chat Rooms</h2>
         <div className='room-container'>
           
            <div className='room-header'>
                <Link to='/'>
                <ArrowBackIcon/>
                </Link>
        
           <div className='header-info'>
               <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt=''/>
               <div className='content'>
                <h3>{roomName}</h3>
               <p>Last seen on {
                        new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString() 
                    }</p>
               </div>
               

           </div>

            </div>
           
                
                    
          <div className='room-body'>
                 
              {
                  messages.map(message=>(
                    <div className={`chat-message ${message.name===user.displayName && 'chat-reciever'}`}>
                    <span className='chat-name'>{message.name}</span>
                    
                        {message.message}
                        <span className='timestamp'>
                            {
                                new Date(message.timestamp?.toDate()).toUTCString()
                            }
                        </span>
                   
   
                   </div>

                ))

                  
              }
                       


            </div>
                
                
              
               
               
           
            <div className='room-footer'>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type='text' placeholder='Enter Message' />
                    <button onClick={sendMessage}>Send</button>
                </form>

            </div>
            </div>
        </div>
    )
}

export default Room
