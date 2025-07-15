const http=require('http'); 

const app =http.createServer((req , res )=>{

    res.write("<h1>Hollo Dear</h1>")
    res.write("Welcome to node js server  ") // used to write response, data stored must be string , 
   
    // res.write(`
    //     <script>
    //     for(let i=0; i<20; i++){
    //         console.log(i)
    //     }
    //     </script>
    //     `)
    
    for(let i=0; i<20; i++){

        // res.write(i) // error must be string 
        // res.write(`${i}`)
        res.write(i +" ")
        res.write(`<div style='height:${i}; width: ${i}; background-color:orange; float: left'></div>`)
    }

    res.end() // must to end response 
})

// Must we need to pass port to listen incomming request 
app.listen(3000 ,()=>{

    console.log("Server is running........... on 3000 port ")
}) 


