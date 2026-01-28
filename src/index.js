//Basic server configuration
import express from 'express'
import { serverConfig, logger } from './config/index.js';
import apiRoutes from './routes/index.js';
import rateLimit from 'express-rate-limit';

const app=express();

const limiter = rateLimit({
    windowMs: 2*60*1000, //2 minutes
    max: 3, //Limit each IP to 2 request per 'window' (here, per 15 minutes)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(limiter)

//Route          
app.use("/api",apiRoutes)

app.listen(serverConfig.PORT,()=>{
    console.log(`sucessfully started the server on the ${serverConfig.PORT}`);
    logger.info("Sucessfuly started the server","root",{});
});         
