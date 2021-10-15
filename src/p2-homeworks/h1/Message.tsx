import React from 'react'
import s from './Message.module.css'


type  MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Артем',
    message: 'npm start нажал?',
    time: '22:00',
}


function Message(props: MessageProps) {
    return (
        <div className={s.main}>
            <div className={s.avatar}>
                <img src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg" alt=""/>
            </div>
            <div className={s.message}>
                <div className={s.text}>
                    <div>{messageData.name}</div>
                    <div>{messageData.message}</div>
                    <div>{messageData.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
