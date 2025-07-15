const http=require('http')
var url=require('url')
const app=http.createServer((req, res )=>{

    res.writeHead(200, {'content-type':'text/html'})

    res.write("<h1> Routing using Node js </h1> </br> ")

    //url parsing 
    var urlData=url.parse(req.url,true)
    console.log(urlData)
    console.log("Pathname is" +urlData.pathname)

    // **********************8

    var menu=`
    <a href = '/'> Home </a>
    <a href = '/contact'> Contact </a>
    <a href = '/about'> About </a>
    `
    if(urlData.pathname ==='/'){
        res.write(menu)
        res.write(`
            <h1>Home page Node js URL routing  </h1>
            <p> This is home page paragraph </p>
        
        `)
    }else if(urlData.pathname==='/about'){
        res.write(menu)
        res.write(`
            
            <h1>About page Node js URL routing  </h1>
            <p> This is About page paragraph </p>
            `)
    }else if(urlData.pathname==='/contact'){
        res.write(menu)
        res.write(`
            <h1>Contact page Node js URL routing  </h1>
            <p> This is Contact page paragraph </p>
            `)
    }
    else{
        res.write(`
            <h1> Page not found </h1>
            `)
    }
    res.end()

})

const PORT=3001;
const HOST='127.0.01';

app.listen(PORT,()=>{

    console.log(`Server is running on http://${HOST}:${PORT}`)
})