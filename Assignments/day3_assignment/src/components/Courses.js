import { useEffect ,  useState} from "react";
// eslint-disable-next-line
import axios  from "axios";
import Form from "./Form";
import CourseList from "./CourseList";
import {
    Switch,
    Route,
   
    useRouteMatch} from "react-router-dom";

const Courses =()=>{

    let match = useRouteMatch();
    // eslint-disable-next-line
    const [trainees, setTrainees]  = useState([])
    const [courses, setCourses] = useState([]);
    const [enrollCourse, setEnrollCourse] = useState({});

    const appendTrainees =(trainee) =>{
        let temp = [...trainees, trainee]
        setTrainees(temp)
        
        console.log(trainees)
    }
    const getCourseFromChild = (course)=>{
        setEnrollCourse(course);
        
        
    }
    

    useEffect(() => {
        
    
    axios.get('http://localhost:6700/courses')
  .then((data)=>{
    setCourses(data.data) 
   
    
  })
      }, []);


    return(
        <div>


    <Switch>
    <Route path={`${match.url}/form`}>
            <Form item ={enrollCourse}
            setTrainees = {appendTrainees}
            />
           
        </Route>
        <Route path={match.path}>
            <CourseList setCourse = {getCourseFromChild}
            courses = {courses}
            />
        </Route>
       
        </Switch>
        <div><p>Trainees</p>
                {trainees.length>0?
            <div>{
                trainees.map(item=>{
                    return(
                        <li key= {item.courseId}>
                            {item.name} / {item.courseName}/{item.email}
                        </li>
                    )
                })
                }</div>:null    
            }
        </div>
        </div>
    );
};

export default Courses;
