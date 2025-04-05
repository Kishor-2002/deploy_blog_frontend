import React, { useState } from 'react';

const LoginForm = () => {
    // State for form inputs
    const [formType, setFormType] = useState('signIn');
    const [formData, setFormData] = useState({ username: '', password: '' });

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = formType === 'signIn' ? '/admin' : '/register';
        
        try {
            await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            // Handle successful authentication or registration
            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <h3>{formType === 'signIn' ? 'Sign In' : 'Register'}</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username"><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="password"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input type="submit" value={formType === 'signIn' ? 'Login' : 'Register'} className="btn" />
            </form>

            <button onClick={() => setFormType(formType === 'signIn' ? 'register' : 'signIn')}>
                {formType === 'signIn' ? 'Need an account? Register' : 'Already have an account? Sign In'}
            </button>
        </div>
    );
};

export default LoginForm;



// Explanation:
// State Management:

// formType state determines whether the user is viewing the sign-in or register form.
// formData state holds the input values for username and password.
// Handling Input Changes:

// handleChange updates the formData state when input fields change.
// Form Submission:

// handleSubmit sends a POST request to the appropriate endpoint based on the formType. Adjust the endpoints as needed for your server.
// Form Toggling:

// A button allows users to toggle between sign-in and registration forms by changing the formType.
// Rendering:

// The component conditionally renders the form title and submit button text based on formType.
// Styling:

// Ensure that your CSS classes (btn) are defined for styling the buttons.
// This React component provides a simple way to switch between authentication forms while managing form state and submissions. Adjust the endpoints and logic as needed for your specific use case.