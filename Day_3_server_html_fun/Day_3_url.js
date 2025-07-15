const http=require('http')

//url package 
// use to fetch data from url 
var url=require('url')

const app=http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write("<h1> URL Decoding in Node js ")

    

    // fetch url data , we have to write middleware 
    // var url =url.parse(url_string, true)
    // ur.parse() : used to 
    var url_link='https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zErLKzepyjEyYLRSNagwTkpOsjRNTDRLS001trS0tDKoSDQ2sDBNtDRJNDVIs0y1SPUSy00tSUzLz8kuVihJTc7Iy8_JT89MLQYAli0Y2A&q=metafolks+technologies&rlz=1C1VDKB_enIN1163IN1163&oq=meta&gs_lcrp=EgZjaHJvbWUqEwgGEC4YrwEYxwEYkQIYgAQYigUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMg8IAhAAGEMYsQMYgAQYigUyDAgDEAAYQxiABBiKBTITCAQQLhivARjHARiRAhiABBiKBTIMCAUQABhDGIAEGIoFMhMIBhAuGK8BGMcBGJECGIAEGIoFMgwIBxAAGEMYgAQYigUyCggIEAAYsQMYgATSAQkxNjY2MGowajeoAgCwAgA&sourceid=chrome&'
    var result=url.parse(url_link,true)
    console.log(result)
    res.end()
})

const port=100;
const host='127.0.0.1';

app.listen(port,()=>{
    console.log(`server is running on http://${host}:${port}`)
})



// url decoding : 
// https : network protocol 
// www.google.com : domain - behind the process assign IP 
//     DNS : convert IP into human readable name 

// ?q ..... : query : your query / user entered entered keywords 
// & : dynamic variable 

// https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zErLKzepyjEyYLRSNagwTkpOsjRNTDRLS001trS0tDKoSDQ2sDBNtDRJNDVIs0y1SPUSy00tSUzLz8kuVihJTc7Iy8_JT89MLQYAli0Y2A&q=metafolks+technologies&rlz=1C1VDKB_enIN1163IN1163&oq=meta&gs_lcrp=EgZjaHJvbWUqEwgGEC4YrwEYxwEYkQIYgAQYigUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMg8IAhAAGEMYsQMYgAQYigUyDAgDEAAYQxiABBiKBTITCAQQLhivARjHARiRAhiABBiKBTIMCAUQABhDGIAEGIoFMhMIBhAuGK8BGMcBGJECGIAEGIoFMgwIBxAAGEMYgAQYigUyCggIEAAYsQMYgATSAQkxNjY2MGowajeoAgCwAgA&sourceid=chrome&


// https:
//www.google.com/
// search
// ?gs_ssp=eJzj4tVP1zc0zErLKzepyjEyYLRSNagwTkpOsjRNTDRLS001trS0tDKoSDQ2sDBNtDRJNDVIs0y1SPUSy00tSUzLz8kuVihJTc7Iy8_JT89MLQYAli0Y2A
// &q=metafolks+technologies
// &rlz=1C1VDKB_enIN1163IN1163
// &oq=meta
// &gs_lcrp=EgZjaHJvbWUqEwgGEC4YrwEYxwEYkQIYgAQYigUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMg8IAhAAGEMYsQMYgAQYigUyDAgDEAAYQxiABBiKBTITCAQQLhivARjHARiRAhiABBiKBTIMCAUQABhDGIAEGIoFMhMIBhAuGK8BGMcBGJECGIAEGIoFMgwIBxAAGEMYgAQYigUyCggIEAAYsQMYgATSAQkxNjY2MGowajeoAgCwAgA&sourceid=chrome&