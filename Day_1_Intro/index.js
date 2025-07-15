console.log("Welcome to Node Js Backend Js Library")

const Demo =(a=0,b=0)=>{
    console.log(a+b)
}
Demo(100,200)


function A(){
    console.log("Helllo A")
}

function B(Callback){
    Callback()
    console.log("Helllo B")
}

B(A)



const data = [
    {
        id : 1,
        name :"Rohan",
        skills : "React"
    },
    {
        id : 2,
        name :"Rahul",
        skills : "MR"
    },
    {
        id : 3,
        name :"Shiv",
        skills : "Js"
    },
    {
        id : 4,
        name :"Sachin",
        skills : "Excel"
    }

]

data.map((val,index)=>{
    console.log(val)
    console.log(index)
})
