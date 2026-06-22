import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="site-container">
        <div className="not-found-panel">
          <span>404</span>
          <h1>Page not found</h1>
          <p>The page you are looking for may have moved, or the course path is no longer available.</p>
          <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
        </div>
      </div>
    </section>
  )
}
