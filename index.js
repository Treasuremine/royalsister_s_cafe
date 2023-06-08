//index.js
const http=require('http');
const server = http.createServer((req, res)=>{
  res.writehead( 200,{'content-type': 'text/plain'});
  res.end('hello World \n');
});

server.listen( 3000, () =>{
  console.log('Server running at http://localhost:3000/');
});
console.log("Hello, royalsister_s_cafe!");
