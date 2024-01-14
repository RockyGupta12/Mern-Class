const logger= require('../utils/logger')
const requestLogger = (request,response,next)=>{
    logger.info('Method',request.method)
    logger.info('Path',request.path)
    logger.info('Body',request.body)
    logger.info('---')
    next()
}

const unknownEndPoint = (request,response)=>{
    response.status(404).send({error:"unknown endpoint"})
}
const errorHandler = (error,request,response,next)=>{
    logger.error(error.message)
    if(error.name==='castError'){
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
