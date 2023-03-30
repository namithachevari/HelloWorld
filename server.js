import express from 'express'
const app = express()

const PORT = process.env.port|| 8383

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})
app.get('/',(req,res)=>{

    res.send("<h3>Welcome too Cyclic home page</h3>")
})