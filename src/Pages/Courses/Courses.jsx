import React from 'react'
import CourseCard from '@/componenets/Courses/CourseCard'
import placeholder from '@/assets/placeholder.svg'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Courses() {
   
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
   useEffect(()=>{
      async function fetchCourses(){

        try{
          setLoading(true);
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
              _limit: 10
            }
          })
          setCourses(response.data);

        }catch(error){
            console.log("Error fetching courses", error);
            setError("Failed to load courses. Please try again later.");
        }finally{
            setLoading(false);
        }


      }

      fetchCourses();
     
     return ()=>{
         console.log("Courses Page Unmounted");
     }
   }, []);
   
  return (
    <section className="courses-section">
      <div className="site-container"> 
        <div className="section-heading">
          <span>Course library</span>
          <h2>Our Courses</h2>
          <p>Explore focused courses designed to help you learn new skills and advance your career.</p>
           <Link to="/courses/add" className="btn btn-primary my-5">Add Course</Link>
        </div>
         <div className="row g-4">
          { loading && <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          }
          { error && <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
          }
          { !loading && !error && courses.length === 0 && <div className="text-center">
            <img src={placeholder} alt="No courses" className="mb-3" style={{width: "150px"}} />
            <p className="text-muted">No courses available at the moment.</p>
          </div>
          }

          
            {!error && !loading && courses.map(course=>{
                return <div className="col-md-6 col-lg-4" key={course.id}>
                  <CourseCard course={course} />
                </div>
            })}
        </div>
      </div>
    </section>
  )
}
