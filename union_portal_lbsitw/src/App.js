import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
import SignupForm from './SignupForm';
import './App.css';

function App() {
  return (
    <Router>
    <div className="">
      <div className="wrapper">
    
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="../assets/img/logo.png" alt="College Union Logo" width="auto" height="90" />
              <span className="d-inline-block">College Union LBSITW</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/initiatives" className="nav-link">Union Initiatives</Link>
            </li>
            <li className="nav-item">
              <Link to="/meet-the-union" className="nav-link">Meet the Union</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-primary nav-link">Sign In</Link>
            </li>
                <li className="nav-item">
                <Link to="/signup" className="btn btn-success nav-link">Sign Up</Link>
                  {/* <button className="btn btn-success nav-link">Sign Up</button> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="welcome-heading">Welcome to</div>
        <div className="main-heading">LBSITW College Union</div>
        <div className="main-heading1">Web Portal</div>
        <div className="sub-paragraph">
          <p>This is the official web portal of the College Union at LBS Institute of Technology for Women.</p>
        </div>
        <div className="container-fluid" style={{ position: "relative" }}>
          <img src="../assets/img/lbs.jpg" alt="College Union Members" className="img-fluid" style={{ width: "100%", opacity: "0.4" }} />
        </div>


        <div className="container-fluid login-form">
          <form>
            <div className="mb-3" >
              <label htmlFor="unionLogin" className="form-label">Union Login</label>
              <input type="text" className="form-control" id="unionLogin" placeholder="Enter username" />
            </div>
            <div className="mb-3">
              <label htmlFor="unionPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="unionPassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>

        <div className="container mt-5">
          <div className="about-us-container">
            <div className="about-us-heading">About Us</div>
            <div className="about-us-content">
              <p>
                Welcome to the College Union of LBS Institute of Technology for Women (LBSITW)! We're dedicated to cultivating a vibrant campus community by fostering student engagement, leadership development, and holistic growth. Through diverse events, initiatives, and advocacy efforts, we aim to create a sense of belonging and pride among students while enhancing their educational experience. Join us in making a positive impact and leaving a lasting legacy at LBSITW!</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h2 className="text-center mb-4">Union Initiatives</h2>
          <div id="initiativesCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img src="../assets/img/1.jpg" className="card-img-top" alt="Initiative 1" />
                      <div className="card-body">
                        <p className="card-text">Description of Initiative 1.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="../assets/img/2.jpg" className="card-img-top" alt="Initiative 2" />
                      <div className="card-body">
                        <p className="card-text">Description of Initiative 2.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="../assets/img/3.jpg" className="card-img-top" alt="Initiative 3" />
                      <div className="card-body">
                        <p className="card-text">Description of Initiative 3.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img src="../assets/img/4.jpeg" className="card-img-top" alt="Initiative 4" />
                      <div className="card-body">
                        <p className="card-text">Description of Initiative 4.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="../assets/img/5.jpeg" className="card-img-top" alt="Initiative 5" />
                      <div className="card-body">
                        <p className="card-text">Description of Initiative 5.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="../assets/img/6.png" className="card-img-top" alt="Initiative 6" />
                      <div className="card-body">
                        <p className="card-text">Description of Initiative 6.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#initiativesCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#initiativesCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container mt-5">
          <h2>Meet the Union</h2>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Creative Tim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            </ul>
            <div className="copyright">
            </div>
          </div>
        </footer>
        <Routes> {/* Define your routes inside Routes */}
            <Route path="/signup" element={<SignupForm />} /> {/* Use element prop to render components */}
    </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
