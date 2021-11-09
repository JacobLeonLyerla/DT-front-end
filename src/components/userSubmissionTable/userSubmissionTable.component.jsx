import React,{useContext} from 'react'
import { withRouter } from 'react-router';
import AppContext from '../../context';
const UserSubmission = ({history,tag,type}) => {
  const {clearNotifications,user}=useContext(AppContext)
let count = 0
  if(tag.unreadComment || tag.unreadLike){
   count = tag.unreadComment + tag.unreadLike
  }
  const checkIfUser=(id)=>{
    console.log("check",tag)
    if(tag.user === user.username&&tag.unreadComment+tag.unreadLike>0){
      clearNotifications(id)
    }
    history.push(`/dashboard/trek/${tag._id}`)
  }
    return (
      
      <>  {tag ?  <div
        onClick={()=>checkIfUser(tag._id)}
        className={`td-container ${count>0 ? "notify":""}`}
        style={{ display: "flex", flexDirection: "row" }}
      >
        
      {type==="Post"? <div className="td">{count}</div>:<div className="td">{tag.name}</div>}
        <div  className="td">
          {tag.locationName ? tag.locationName : "location not given"}
        </div>
        <div className="td tag">
        {tag.tag.map(tag=>(
         <div className="tags">{tag}<br/></div>
        ))} </div>     
      </div>:""}</>
    )
}

export default withRouter(UserSubmission)

 
