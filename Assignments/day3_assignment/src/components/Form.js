import {useState} from "react";
import {Link} from "react-router-dom";
const Form = ({item, setTrainees})=>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // eslint-disable-next-line 
    
    

    const appendTrainees = ()=>{
        let tempObj = {
            "name" : name,
            "email" : email,
            "courseName" : item.name,
            "courseId" : item.courseId,
            "date" : new Date()
        }
        setTrainees(tempObj)

        
    }

    return(
        <div>

            <form>
                <fieldset>
                <label>
                    Course Name : {item.name}
                </label>
                </fieldset>
                <fieldset>
                <label>
                    Name : 
                    <input type="text" value={name} onChange={(event)=>setName(event.target.value)} >
                </input>
                </label>
                </fieldset>
                <fieldset>
                <label>
                    Email : 
                    <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} >
                </input>
                </label>
                </fieldset>
                <Link to="/courses"> <button onClick ={()=>{appendTrainees()}}>SUBMIT</button></Link> 
               
            </form>
        </div>
    )
}

export default Form;