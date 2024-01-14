const logger= require('../utils/logger')
const requestLogger= (request,response,next)=>{
    requestLogger.info('Method',request.method);
    requestLogger.info('Path',request.path);
    requestLogger.info('Body',request.body);
    requestLogger.info('---');
    next();
}
const unknownEndPoint= (request,response)=>{
    response.status(404).send({error:'UNknown EndPoint'})
}
const errorHandler=(error,request,response,next)=>{
    console.error(error.message)
    if(error.name==="castError"){
        return response.status(400).send({error:"malformated id"});
    }
    else if(error.name==="validatonError")
    {
        return response.status(400).json({error: error.message});
    }
    next(error)
}
module.exports={
    requestLogger,
    unknownEndPoint,
    errorHandler
}