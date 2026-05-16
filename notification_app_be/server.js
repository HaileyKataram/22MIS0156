const express=require("express")
const axios=require("axios")
const cors=require("cors")

const Log=require("../logging-middleware/logger")

const app=express()

app.use(cors())

const weight={
Placement:3,
Result:2,
Event:1
}

app.get("/notifications",async(req,res)=>{

try{

await Log("backend","info","route","fetching notifications")

const auth=await axios.post("http://4.224.186.213/evaluation-service/auth",{
email:"hailey.k2022@vitstudent.ac.in",
name:"hailey kataram",
rollNo:"22mis0156",
accessCode:"SfFuWg",
clientID:"f5529bc4-0fd2-4226-a7f1-cfa4e6ee9e3b",
clientSecret:"SmtpjnjVHVkGXYRf"
})

const token=auth.data.access_token

const response=await axios.get("http://4.224.186.213/evaluation-service/notifications",{
headers:{
Authorization:`Bearer ${token}`
}
})

let data=response.data.notifications

data=data.sort((a,b)=>{

if(weight[b.Type]!==weight[a.Type]){
return weight[b.Type]-weight[a.Type]
}

return new Date(b.Timestamp)-new Date(a.Timestamp)

})

const top=data.slice(0,10)

await Log("backend","info","service","top notifications fetched")

res.json(top)

}catch(err){

await Log("backend","error","handler","failed fetching notifications")

res.status(500).json({
message:"error"
})

}

})

app.listen(5000,()=>{
console.log("running")
})