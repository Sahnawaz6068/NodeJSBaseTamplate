//Basic server configuration
import express from 'express'
import { serverConfig, logger } from './config/index.js';
import apiRoutes from './routes/index.js';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Route          
app.use("/api",apiRoutes)

app.listen(serverConfig.PORT,()=>{
    console.log(`sucessfully started the server on the ${serverConfig.PORT}`);
    logger.info("Sucessfuly started the server","root",{});
});         
