/*import http from 'http';
const PORT=8899;
const server=http.createServer((req,res)=>{
    
        console.log(req,Headers);
        res.end("server working now,hello");
        
    
})
server.listen(PORT,(err)=>{
    if(err) throw err;
    console.log('server working now hello ${PORT}');
    //console.log(req.headers);
    
})*/
/*import http from 'http';

const PORT = 8899;

const server = http.createServer((req, res) => {
    //console.log(req.headers); // Log the request headers
    //console.log(`MY FIRST PROGRAMME`);
    //res.end("Server working now, hello");
    if(req.url==="/"){
        res.end("home page");
    }
    else if(req.url==="/about"){
        res.end("about page");
    }
    else if(req.url==="/contacts"){
        res.end("contact page");
    }
    else{
        res.end("invalid url");
    }
});

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server working now hello ${PORT}`); // Use backticks for interpolation
});
*/
import http from 'http';
import fs from 'fs';
const PORT=8899;
const server=http.createServer((req,res)=>{
    const path="data/details.txt";
    const file=fs.existsSync(path);
  if(req.url==="/"){
      if(fs.existsSync("data/sumit")){
         res.end("Already Exists");
      }
      else{
          fs.mkdirSync("data/sumit");
          res.end("Folder created");
      }
  }
  else if(req.url==="/createfile"){
      if(file){
        res.end("File already exists");
      }
      else{
        fs.writeFile(path,"hello creating file",(err)=>{
            if(err) throw err;
            res.end("File created successfully");
        })
      }
  }
  else if(req.url==="/readfile"){
     if(file){
        fs.readFile(path,(err,data)=>{
            if(err) throw err;
            res.end("File data is : "+data);
        })
     }
     else{
        res.end("No file found !");
     }
  }
  else if(req.url==="/appendfile"){
      if(file){
        fs.appendFile(path,"This is appended data",(err)=>{
            if(err) throw err;
            res.end("Data appended successfully");
        })
      }
      else{
        res.end("No file found !");
      }
  }
  else if(req.url==="/deletefile"){
    if(file){
       let ref=fs.unlinkSync(path);
       if(ref){
        res.end("File deleted")
       }
       else{
        res.end("File not deleted")
       }
    }
    else{
        res.end("No file found");
    }
  }
  else{
      res.end("Invalid Url");
  }
})
server.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Serve work on ${PORT} port number`);
})
