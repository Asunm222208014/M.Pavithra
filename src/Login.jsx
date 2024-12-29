import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (validate()) {
            try {
                const response = await axios.post('http://localhost:5000/api/login', { username, password });
                localStorage.setItem('token', response.data.token); // Store token in localStorage
                navigate('/home'); // Navigate to home after successful login
            } catch (error) {
                alert('Invalid credentials. Please try again.');
            }
        }
    };

    const validate = () => {
        let formErrors = {};
        if (!username) formErrors.username = 'Username is required';
        if (!password) formErrors.password = 'Password is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div>
            {/* Navbar Section */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">ORGANIC GOODNESS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Login Section */}
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="row login-container shadow-lg rounded">
                    <div className="col-md-6 login-form bg-white d-flex flex-column justify-content-start align-items-start p-5">
                        <form className="w-100" style={{ maxWidth: '350px' }} onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <label htmlFor="username" className="form-label text-secondary">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="form-label text-secondary">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                    <div className="col-md-6 image-section d-flex align-items-center justify-content-center">
                        <div className="welcome-text text-white text-center">
                            <h3>Welcome to ORGANIC GOODNESS</h3>
                            <p>Experience the essence of nature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
