const express=require('express');
const cors=require('cors');
const axios=require('axios')

// const PORT=3000;

const app=express();
app.use(express.json());
app.use(cors({origin:true}));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

try{
const r = await axios.put('https://api.chatengine.io/users/',{
    username:username,secret:username,first_name:username},{
        headers:{"private-key":"c636656f-2e26-42cd-ad54-78745f93aa8f"}})
return res.status(r.status).json(r.data)
}

catch (e){
    return res.status(e.response.status).json(e.response.data);


}
    
  });

app.listen(3000)
// ,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// })