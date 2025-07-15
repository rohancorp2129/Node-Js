const http=require('http')

var url=require('url')
const app=http.createServer((req, res)=>{

    const statusCode=200;

    //set header 
    res.writeHead(statusCode,{'content-type':'text/html'})

    res.write("<h1> Welcome to Node js URL parsing .... </h1>")

    //url data
    // var url_link=''


    var result=url.parse(req.url,true)
    console.log(result)
    console.log(result.pathname)
    console.log(result.query)

    // ************************************************

    // Node js ROuting 
    // / - home page 
    // /about - about us page 
    // /contact - contact us page 

    

    res.end("<h1> Response End</h1>")

})

const PORT=1000;
const HOST='127.0.0.1';

app.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})