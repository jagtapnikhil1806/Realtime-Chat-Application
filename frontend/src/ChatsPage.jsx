import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'

const ChatsPage= (props)=>{
    const chatprops=useMultiChatLogic('7de2529f-56f6-4e5d-b29b-411bdcf6d8ac',props.user.username,props.user.secret)
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops}
/>
<MultiChatWindow{...chatprops} style={{height :'100%'}}/>
    </div>
}

export default ChatsPage