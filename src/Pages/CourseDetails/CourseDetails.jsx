import React from 'react'
import { useParams } from 'react-router-dom'
import placeholder from '@/assets/placeholder.svg'
import axios from 'axios';
import { useEffect } from 'react';

export default function CourseDetails() {

       
    const params = useParams();
     const  [course, setCourse] = React.useState([]);
     const [loading, setLoading] = React.useState(true);
     const [error, setError] = React.useState(null);
    useEffect(() => {
            async function fetchCourseDetails() {
                try {
                    setLoading(true);
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                    setCourse(response.data);
                } catch (error) {
                    console.log("Error fetching course details", error);
                    setError("Failed to load course details. Please try again later.");
                } finally {
                    setLoading(false);
                }
            }

            fetchCourseDetails();



    }, []);



   // console.log(params.id);



  return (
    <>
    <section className="course-details">
        <div className="site-container">

            {
                loading && <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            {
                error && <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            }
            { 
               !course && (
                    <div className="alert alert-danger details-alert">
                        Course not found.
                    </div>
                )
            }

             { !loading && !error && course && 
            <div className="row g-4 align-items-center details-panel">
                <div className="col-md-6">
                    <div className="details-image">
                        <img src={course.image ?? placeholder} alt={course.title} className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6 details-copy">
                    <span className={course.isAvailable ? 'course-badge available static' : 'course-badge static'}>
                        {course.isAvailable ? 'Available now' : 'Coming soon'}
                    </span>
                    <h2>{course.title}</h2>
                    <p>{course.body}</p>
                    <p className="detail-meta"><strong>Duration:</strong> {course.duration ?? 'Not specified'}</p>
                    <button className="btn btn-primary btn-lg" disabled={!course.isAvailable}>
                        {course.isAvailable ? 'Start Course' : 'Coming Soon'}
                    </button>
                </div>
            </div>
            }
        
             
        </div>
    </section>
    </>
  )
}
