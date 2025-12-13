import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";
import AppError from "../utils/errors/app-error.js";

function validateCreateRequest(req, res, next) {
    // Create a shallow copy using the spread operator {...}
    // This ensures we don't modify the global object that other users might be using.
    const ErrorResponse = { ...reqResponses.ErrorResponse };

    // 1. Check for airportName 
    if (!req.body.airportName) {
        ErrorResponse.statusCode = StatusCodes.BAD_REQUEST;
        ErrorResponse.message = 'Airport Name not found in the incoming request'; 
        
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    // 2. Check for airportCode
    if (!req.body.airportCode) {
        ErrorResponse.error =StatusCodes.BAD_REQUEST
        ErrorResponse.message = 'Airport Code not found in the incoming request';
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    // 3. Check for airportAddress
    if (!req.body.airportAddress) {
        ErrorResponse.error = StatusCodes.BAD_REQUEST
        ErrorResponse.message = 'Airport Address not found in the incoming request';
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    // 4. Check for cityId
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