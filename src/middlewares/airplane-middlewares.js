import { StatusCodes } from "http-status-codes";
import errorResponse from '../utils/common/index.js';

const ErrorResponse= errorResponse.ErrorResponse;

function validationCreateRequest(req,res,next){

    if(!req.body.modelNumber){
        ErrorResponse.message= 'something went wrong while creating airplane';
        ErrorResponse.error = {explanation: 'Model number not found in the oncomming request in the correct form'};
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    next();
}

export default validationCreateRequest;
//Nothing just check n8n