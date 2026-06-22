import React from 'react'
import Hero from '../../componenets/Hero/Hero'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <div className="site-container">
    <Hero />
     </div>

    <section className="cta-section">
        <div className="site-container cta-panel">
      <span className="hero-kicker">Start today</span>
      <h2>Explore Our Courses</h2>
      <p>Discover practical courses designed to help you learn new skills, build confidence, and advance your career.</p>
      <Link to={"/courses"} className="btn btn-primary btn-lg">Browse Courses</Link>
    </div>
    </section> 
    </>
   
  )
}
