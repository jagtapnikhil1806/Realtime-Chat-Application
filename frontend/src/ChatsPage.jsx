import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'

const ChatsPage= (props)=>{
    const chatprops=useMultiChatLogic('1a82a415-b1ca-41ae-aafa-6fcb7b8c7a01',props.user.username,props.user.secret)
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops}
/>
<MultiChatWindow{...chatprops} style={{height :'100%'}}/>
    </div>
}

export default ChatsPage