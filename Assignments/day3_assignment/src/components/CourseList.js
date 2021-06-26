import {useState} from "react";
import {Link, useRouteMatch} from "react-router-dom";
const CourseList = ({courses,setCourse})=>{
 // eslint-disable-next-line 
    const [enrollCourse, setEnrollCourse] = useState({})
let match = useRouteMatch();
    
    return(
        <div>
           {courses?

<div>{courses.map(item=>{
    return(
       <div> <li key = {item.courseId}>{item.name}
       
       <Link to= {`${match.url}/form`}>
       <button onClick={()=>{
           setEnrollCourse(item)
        setCourse(item)
        }}
       
       >Enroll</button></Link></li></div>
    )
})}
</div>:<div></div>}
   
        </div>
    );
}

export default CourseList;