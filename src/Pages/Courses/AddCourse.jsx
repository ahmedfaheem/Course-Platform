import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function AddCourse() {

    const { register , handleSubmit, formState: { errors}, reset } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [error, setError]= useState(null);
    const [success, setSuccess] = useState(false);
  async  function onSubmit(data){
        console.log(data);
        try{
            setError(null);
            setLoading(true);
        await  axios.post("https://jsonplaceholder.typicode.com/posts", data);
        setSuccess(true);
        reset();
        }catch(error){
            console.log("Error is creating Course", error);
            setError("Error is creating Course");
            setSuccess(false);
        }finally{
            setLoading(false);
        }
    }

  return (
    <>
      {isLoading && <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      }

        {error && <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
        }
        {success && <div className="alert alert-success text-center" role="alert">
          Course created successfully!
        </div>
        }
        {!isLoading && 
     <form className="container mt-5" onSubmit={handleSubmit(onSubmit)}>
  <div className="card shadow-sm p-4">
    <h2 className="mb-4">Create Course</h2>

    
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input
        type="text"
        className="form-control"
        id="title"
        placeholder="Enter course title"
        {...register("title", {
            required: " Title is Required",
            minLength:{
                value: 3,
                message: "min 3 chars"
            }
        })}
      />
      { errors.title && <p className='text-danger'> {errors.title.message} </p>}
    </div>

  
    <div className="mb-3">
      <label htmlFor="duration" className="form-label">Duration</label>
      <input
        type="text"
        className="form-control"
        id="duration"
        placeholder="e.g. 8 weeks"
        {...register('duration', {
            required: "duration required"
        })}
      />
            { errors.duration && <p className='text-danger'> {errors.duration.message} </p>}

    </div>


    <div className="mb-3">
      <label htmlFor="instructor" className="form-label">Instructor</label>
      <input
        type="text"
        className="form-control"
        id="instructor"
        placeholder="Enter instructor name"
        {...register("instructor", {
            required: "instructor name is required",
            minLength: {
                value: 3,
                message: "min chars 3"
            }
        })}
      />
                  { errors.instructor && <p className='text-danger'> {errors.instructor.message} </p>}

    </div>

   
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
        <textarea
        className="form-control"
        id="description"
        rows={4}
        placeholder="Enter course description"
        {...register("description", {
            required: "Description is required",
            minLength: {
            value: 10,
            message: "Minimum length is 10 characters",
            },
        })}
        />
       { errors.description && <p className='text-danger'> {errors.description.message} </p>}

    </div>


    <button type="submit" className="btn btn-primary">
      Create Course
    </button>
  </div>
</form>
}

  <br/>
   <br/>
    <br/>
   </>     
  )
}
