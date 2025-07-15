const http=require('http');
const module_1=require('./module')
const app=http.createServer((req, res)=>{

    // moddleware : so our node can understand , difference bet what is htmp code and what is string ( text)

    //  How to write html 
    const statusCode=200; 
    res.writeHead(statusCode,{'content-type':'text/html'})

    res.write("<div> <center> Hi There.. </center> </div>")

    res.write("<input type ='text' placeholder ='enter your name '> </br>")
    
    res.write("<b> Welcome to Node js Server !! </b> </br>")
    res.write("<b> Welcome to Node js Server !! </b> </br>")
    res.write("<b> Welcome to Node js Server !! </b> </br>")
    res.write("<b> Welcome to Node js Server !! </b> </br>")
    res.write("<b> Welcome to Node js Server !! </b> </br>")
    res.write("<b> Welcome to Node js Server !! </b> </br>")

    // used add
    res.write(`Addition is ${module_1.Addition(40,3)}`)
    console.log(module_1.obj)

    res.end()

})

// must pass port to listen services 
const PORT=3000;
const HOST='127.0.0.1'

app.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})
