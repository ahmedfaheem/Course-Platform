import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/hero.png'

export default function Hero() {
  return (
     <section className="hero-section" id="home">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <span className="hero-kicker">Online Learning Platform</span>
          <h1 className="hero-title">
            Learn skills that move you forward.
          </h1>

          <p className="hero-text">
            Explore our wide range of courses and start learning today. Whether you're looking to advance your career or pick up a new hobby, we have something for everyone.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary btn-lg hero-btn">
              Get Started
            </Link>

            <Link to="/about" className="btn btn-outline-secondary btn-lg hero-btn">
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="hero-visual">
            <img src={heroImage} alt="Student learning online" />
            <div className="hero-stat">
              <strong>5+</strong>
              <span>Career-ready tracks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
