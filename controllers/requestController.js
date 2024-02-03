import { StatusCodes } from "http-status-codes";
import Recordings from "../models/Recordings.js";
import {NotFoundError} from "../errors/index.js"

const getAllRequests = async (req , res) => {
    const request = await Recordings.find({recordType : "vacation" , request : {$exists : false}
}).populate({
    path : "createdBy" ,
    select: 'name lastName',
})
.populate({
    path : "substitute" ,
    select: 'name lastName',
})
    res.status(StatusCodes.OK).json({request})
}

const updateRequest = async ( req , res) => {
    const requestId = req.params.id
   // const {request} = req.body 
    const request = await Recordings.findByIdAndUpdate(requestId , {
        request : req.body.request
    },{
        new: true,
        runValidators: true,
    })
    if (!request) {
        throw new NotFoundError (`No Request with id : ${req.params.id}`);

    }
    res.json({request})
}

export {
    getAllRequests ,
    updateRequest
}