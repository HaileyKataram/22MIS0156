const axios=require("axios")

async function getToken(){

const res=await axios.post("http://4.224.186.213/evaluation-service/auth",{
email:"hailey.k2022@vitstudent.ac.in",
name:"hailey kataram",
rollNo:"22mis0156",
accessCode:"SfFuWg",
clientID:"f5529bc4-0fd2-4226-a7f1-cfa4e6ee9e3b",
clientSecret:"SmtpjnjVHVkGXYRf"
})

return res.data.access_token
}

async function Log(stack,level,pack,message){

try{

const token=await getToken()

await axios.post("http://4.224.186.213/evaluation-service/logs",{
stack,
level,
package:pack,
message
},{
headers:{
Authorization:`Bearer ${token}`
}
})

}catch(err){
console.log(err.response?.data||err.message)
}
}

module.exports=Log