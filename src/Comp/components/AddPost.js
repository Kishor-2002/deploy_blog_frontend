import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    // Define state for form fields
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();
    
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Title:', title);
        console.log('Body:', body);

        // Optionally, you can send a POST request here
        const response = await fetch('/route/add-post', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body }),
            })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
        if(response.ok)
            // window.('Post Added')
            alert("Post Added");
            navigate(`/dashboard`);
    };

    return (
        <div>
            <a href="/dashboard">&larr; Back</a>
            <div className="admin-title">
                <h2>Add New Post</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title"><b>Title</b></label>
                <input type="text" placeholder="Post Title" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}
                />

                <label htmlFor="body"><b>Content</b></label>
                <textarea name="body" cols="50" rows="10" value={body} onChange={(e)=> setBody(e.target.value)}
                        />
                <a href="/dashboard">
                    <input type="submit" value="Add" className="btn" />
                </a>
            </form>
        </div>
    );
};

export default AddPost;


// Explanation:
// State Management: Using useState hooks to manage the form input values (title and body).

// Form Handling: The handleSubmit function is called when the form is submitted. It prevents the default form behavior and logs the form data. You can replace this with actual logic for sending the form data to a server.

// Input Handling: The value and onChange attributes on <input> and <textarea> ensure that the component is controlled, meaning React keeps track of the input values and updates state on changes.

// JSX Syntax: The form structure is maintained, but with JSX syntax, including htmlFor instead of for in labels.

// This component should be placed in a React application and can be rendered as part of your component tree.