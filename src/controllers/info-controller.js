import { StatusCodes } from "http-status-codes";

const infoController=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        msg:"API is Live",
        error:{},
        data:{}
    })
}

export default infoController;
