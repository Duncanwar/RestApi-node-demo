import express from 'express';
import bodyParser from 'body-parser';
import {dbConnection} from './database/config.js'
import routes from './routes/index.js'

dbConnection();

const app = express();
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
app.use(bodyParser.json({limit:'50mb'}))
app.use(routes)

app.get('/api', (req,res) => {
    res.json({
        message:"well done"
    })
})

app.listen(3000, ()=>{
    console.log('api done')
})

export default app;