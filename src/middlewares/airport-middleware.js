import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";
import AppError from "../utils/errors/app-error.js";

function validateCreateRequest(req, res, next) {
    const ErrorResponse = { ...reqResponses.ErrorResponse };
    if (!req.body.airportName) {
        ErrorResponse.statusCode = StatusCodes.BAD_REQUEST;
        ErrorResponse.message = 'Airport Name not found in the incoming request'; 
        
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if (!req.body.airportCode) {
        ErrorResponse.error =StatusCodes.BAD_REQUEST
        ErrorResponse.message = 'Airport Code not found in the incoming request';
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if (!req.body.airportAddress) {
        ErrorResponse.error = StatusCodes.BAD_REQUEST
        ErrorResponse.message = 'Airport Address not found in the incoming request';
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if (!req.body.cityId) {
        ErrorResponse.error = StatusCodes.NOT_FOUND
        ErrorResponse.message = 'City Id not found in the incoming request';
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    next();
}

export default validateCreateRequest;