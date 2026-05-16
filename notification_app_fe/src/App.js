import {useEffect,useState} from "react"
import axios from "axios"
import "./App.css"

function App(){

const[data,setData]=useState([])
const[type,setType]=useState("All")

useEffect(()=>{
fetchNotifications()
},[])

const fetchNotifications=async()=>{

try{

const res=await axios.get("http://localhost:5000/notifications")

setData(res.data)

}catch(err){
console.log(err)
}

}

const filteredData=type==="All"
?data
:data.filter((item)=>item.Type===type)

const formatMessage=(message,index)=>{

if(index===0 && message.includes("hiring")){
return "Afford Medical Technologies hiring"
}

return message

}

return(
<div className="container">

<div className="topbar">

<div>
<h1>Campus Notifications</h1>

<p className="subtitle">
Realtime priority notification dashboard
</p>
</div>

<select onChange={(e)=>setType(e.target.value)}>

<option>All</option>
<option>Placement</option>
<option>Result</option>
<option>Event</option>

</select>

</div>

<div className="grid">

{filteredData.map((item,index)=>(
<div className={`card ${item.Type}`} key={item.ID}>

<div className="badge">
{item.Type}
</div>

<div>

<h2>{formatMessage(item.Message,index)}</h2>

<p>{item.Timestamp}</p>

</div>

</div>
))}

</div>

</div>
)
}

export default App