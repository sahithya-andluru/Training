const Express = require("express");
const Http = require("http").createServer(Express);
const io = require("socket.io")(Http, {
    cors: {
      "origin": "*",
       "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
       "preflightContinue": false,
       "optionsSuccessStatus": 204
     }
    }
  );
  list=[];
  scores=[];
  words=[
    {label:'0 points',value:'0'},
    {label:'0.5 points',value:'0.5'},
    {label:'1 points',value:'1'},
    {label:'2 points',value:'2'},
    {label:'3 points',value:'3'},
    {label:'5 points',value:'5'},
    {label:'8 points',value:'8'},
    {label:'13 points',value:'13'},
    {label:'20 points',value:'20'},
    {label:'40 points',value:'40'},
    {label:'100 points',value:'100'},
    {label:'?',value:'?'}
  ]
  io.on("connection", socket => {
    console.log('new conection...')
    
    socket.on('joinSession', ({ pid,name,point }) => {

        socket.join(pid);
        s={roomNo:pid,socketId:socket.id,name:name,point:'',isShow:true,show:true};
        users=[];
        show=true;
        list.push(s);
        for(let i=0;i<list.length;i++)
        {
          if(list[i].roomNo==pid)
          {
            users.push(list[i]);
          }
        }
        console.log("a player joined the room " + pid);
        io.to(pid).emit('joinSession', users);
    });
   /* socket.on('startSession', ({ gameId }) => {
        io.to(gameId).emit('startSession', words);
        console.log("Someone is starting a game");
    
    })*/
    socket.on('startPoints', ({ pid,g }) => {
        users=[];
        show=true;
        for(let i=0;i<list.length;i++)
        {
          if(list[i].roomNo==pid)
          {
            
            if(list[i].socketId==socket.id)
            {
              list[i].point=g;
              list[i].isShow=false;
            }
            users.push(list[i]);
          }
        }
        io.to(pid).emit('joinSession', users);
    });
    socket.on('showVotes', ({ pid}) => {
        show=false;
        users=[];
        points=[];
        n=0;
        t=0;
        for(let i=0;i<list.length;i++)
        {
          if(list[i].roomNo==pid)
          {
            list[i].show=false;
            users.push(list[i]);
          }
        }
        for(let j=0;j<users.length;j++)
        {
          var  h=0;
          if(users[j].point!='')
          {
          n=n+parseInt(users[j].point);
          t=t+1;
          }
          for(let i=0;i<points.length;i++)
          {
            if(users[j].point===points[i].point)
            {
              var h=1;
              points[i].count+=1;
            }
          }
          
            if(h==0){
              pn={point:users[j].point,count:1};
              points.push(pn);
            }
          
          if(points.length===0){
            pn={point:users[j].point,count:1,avg:0};
              points.push(pn);

          }
          
        }
        av=(n/t);
        avg=Math.round((av + Number.EPSILON) * 100) / 100
        points[0].avg=avg;
        console.log("a player joined the room " + pid);
        io.to(pid).emit('statistics', points);
        io.to(pid).emit('joinSession', users);
    });
    socket.on('clearVotes', ({ pid}) => {
      show=true;
      users=[];
      for(let i=0;i<list.length;i++)
      {
        if(list[i].roomNo==pid)
        {
          list[i].show=true;
          list[i].isShow=true;
          list[i].point='';
          users.push(list[i]);
        }
      }
      console.log("a player joined the room " + pid);
      io.to(pid).emit('joinSession', users);
  });


    
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
      
  });


const PORT = process.env.PORT || 3000;
Http.listen(PORT, () => {
    console.log("Listening at :"+PORT);
});
