import  express  from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';
dotenv.config();

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);


const PORT=8002;

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;



Connection(username,password);

