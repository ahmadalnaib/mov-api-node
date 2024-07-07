const jwt=require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

exports.sign=(payload)=>{
    return jwt.sign(payload,secret,{expiration});
}

exports.verify=(token)=>{
try{
    return jwt.verify(token,secret);

}catch(err){
    return false;
}
}
