import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,useLocation } from 'react-router-dom';

const EditPost = () => {
    const [post, setPost] = useState({ title: '', body: '' });
    // const { postId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    useEffect(() => {
        // Fetch the post details when the component mounts
        const fetchPost = async () => {
            try {
                // console.log(location.pathname.split("/")[2])
                const response = await fetch(`/route/post/${postId}`); // Adjust the endpoint as needed
                const data = await response.json();
                console.log(data)
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error.message);
            }
        };

        fetchPost();
    }, [postId]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        // try {
            const response = await fetch(`/route/edit-post/${postId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post),
            });
            // Redirect to the post detail page or another page
            if(response.ok)
                navigate(`/dashboard`);
        // } catch (error) {
        //     console.error('Error updating post:', error);
        // }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await fetch(`/route/delete-post/${postId}`, {
                    method: 'DELETE',
                });
                // Redirect to the posts list or another page after deletion
                // navigate('/posts');
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    return (
        <div>
            <a href="/dashboard">&larr; Back</a>
            <div className="admin-title">
                <h2>View / Edit Post</h2>
                <button onClick={handleDelete} className="btn-delete btn">
                    Delete
                </button>
            </div>

            <form onSubmit={handleUpdate}>
                <label htmlFor="title"><b>Title</b></label>
                <input
                    type="text"
                    placeholder="Post Title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                />

                <label htmlFor="body"><b>Content</b></label>
                <textarea
                    name="body"
                    cols="50"
                    rows="10"
                    value={post.body}
                    onChange={handleChange}
                />

                <input type="submit" value="Update" className="btn" />
            </form>
        </div>
    );
};

export default EditPost;



// Explanation:
// State Management:

// post state holds the current values of the post. It is initialized with empty values for title and body.
// Fetching Data:

// useEffect fetches the post data from the server when the component mounts, based on the postId obtained from URL parameters.
// Form Handling:

// handleUpdate sends a PUT request to update the post and then navigates to the post detail page.
// handleDelete sends a DELETE request to remove the post and navigates to the posts list page.
// Form Inputs:

// handleChange updates the state when form inputs are changed.
// Rendering:

// The component renders a form with the current post data for editing, a delete button, and a back link.
// Navigation:

// useNavigate from react-router-dom is used for programmatic navigation after updating or deleting the post.
// Make sure to adapt API endpoints, navigation logic, and CSS class names as per your application setup.



