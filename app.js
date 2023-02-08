const express=require('express')
const app=express()
const errorMiddleware=require('./middlewares/error')
const inventoryData=require('./routes/CrudRoute')

app.use('/api/v1',inventoryData);
app.use(errorMiddleware)

module.exports=app