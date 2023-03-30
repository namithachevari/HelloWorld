import express from 'express'
const app = express()

const PORT = process.env.port|| 8383

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})
app.get('/',(req,res)=>{

    res.send("<h2>Welcome to Cyclic home page</h2>")
})