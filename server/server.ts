 import http from 'http';
 import express from 'express';
 import { Server } from 'socket.io';

const app= express();
const PORT = 8000;
const server = http.createServer(app);

//MARK: api route
app.get('/',(req,res) => {
    res.send("sockrt.io is heathy")
})
//MARK: socket.io
const io = new Server(server,{
    cors:{
        origin:"*" //for cors
    }       
});

io.on('connection',(socket) => {
    console.log("some one is connected",socket.id)

    socket.on('emoji',(emoji) => {
        socket.broadcast.emit("new_emoji",data)
        
    })
})

server.listen(PORT,() => {
    console.log("server is  up running on port 3000")
})