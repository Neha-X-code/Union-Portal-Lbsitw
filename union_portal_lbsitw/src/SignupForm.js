import React from 'react';
import './SignupForm.css';

function SignupForm() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="registerNumber" className="form-label">Register Number</label>
          <input type="text" className="form-control" id="registerNumber" placeholder="Enter your register number" />
        </div>
        <div className="mb-3">
          <label htmlFor="semester" className="form-label">Semester</label>
          <input type="text" className="form-control" id="semester" placeholder="Enter your semester" />
        </div>
        <div className="mb-3">
          <label htmlFor="branch" className="form-label">Branch</label>
          <input type="text" className="form-control" id="branch" placeholder="Enter your branch" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Sign In</a></p>
    </div>
  );
}

export default SignupForm;
