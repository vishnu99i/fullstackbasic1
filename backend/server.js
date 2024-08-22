import express from "express";

const app = express();

//Basic server
// app.get("/",(req,res) => {
//    res.send("Server is ready")
// });

//Get a list of 5 jokes
app.get("/api/jokes",(req,res) => {
   const jokes = [
      {
         id: 1,
         title: "joke1",
         content: "jokeone",
      },
      {
         id: 2,
         title: "joke2",
         content: "joketwo",
      },
      {
         id: 3,
         title: "joke3",
         content: "jokethree",
      },{
         id: 4,
         title: "joke4",
         content: "jokefour",
      },
      {
         id: 5,
         title: "joke5",
         content: "jokefive",
      }
   ]

   res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,() => {
   console.log(`Serve at http://localhost:${port}`);
})