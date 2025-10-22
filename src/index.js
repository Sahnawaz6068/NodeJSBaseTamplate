//Basic server configuration
import express from 'express'
import config  from './config/index.js';
import apiRoutes from './routes/index.js';


const app=express();
app.use("/api",apiRoutes)

app.listen(config.serverConfig.PORT,()=>{
    console.log(`sucessfully started the server on the ${config.serverConfig.PORT}`);
    config.logger.info("Sucessfuly started the server","root",{});
})