import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'

const ChatsPage= (props)=>{
    const chatprops=useMultiChatLogic('4b3a0f32-0b50-4369-9a4d-fad149003e37',props.user.username,props.user.secret)
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops}
/>
<MultiChatWindow{...chatprops} style={{height :'100%'}}/>
    </div>
}

export default ChatsPage