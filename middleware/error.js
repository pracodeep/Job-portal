const ErrorResponse=require('../utils/errorResponse')

const errorHandler=(err,req,res,next)=>{
    let  error={...err};
    error.message=err.message
    if(err.name==="CastError"){
        const message=(`Resourses not found ${err.value}`)
        error=new ErrorResponse(message,404);
    }

    //mongoose duplicate value
    if(err.code===11000){
        const message=(`duplicate field value entered ${err.value}`)
        error=new ErrorResponse(message,404);
    }
    
 //mongoose validation  error
 if(err.name==="ValidationError"){
    const message=object.values(err.errors).map(val=>''+ val.message);
    error=new ErrorResponse(message,404);
}
res.status(error.status||500).json({
    success:false,
    error:error.message || "Server Error"
})

}
module.exports=errorHandler