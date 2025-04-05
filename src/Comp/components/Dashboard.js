import React, { useState, useEffect } from "react";
import { Routes,Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const Dashboard = ({loggedIn,setLoggedIn}) => {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts from the API or other source
    const fetchPosts = async () => {
      if(loggedIn){
        try {
          // if(!user){
          //     setError('You must be logged in')
          //     return;
          // }
          // const login = await fetch()
          const response = await fetch("/route"); // Adjust the endpoint as needed
          if(!response.ok){
            setLoggedIn(false)
          }
          const data = await response.json();
          console.log(data)
          setPosts(data);
        } catch (error) {
          console.error("Error fetching posts:"+error.message);
        }
      }
    };
    fetchPosts();
  }, []);



  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await fetch(`/route/delete-post/${postId}`, {
          method: "DELETE",
        });
        // Remove the deleted post from the state
        setPosts(posts.filter((post) => post._id !== postId));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div>
      {/* Index.js cpode start */}
        <div className="author">
            <h1 className="author__heading">Welcome to our Blogs Site</h1>
            <p className="author__body">Here you can read, edit and write blogs</p>
        </div>

        <img src="" alt="person looking out through window" className="hero-image" width="981" height="528" />

        {/* <section className="articles">
            <h2 className="articles__heading">Latest Posts</h2>

            <ul className="article-ul">
                {posts.map(post => (
                <li key={post._id}>
                    <Link to={`/post/${post._id}`}>
                    <span>{post.title}</span>
                    <span className="article-list__date">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                    </Link>
                </li>
                ))}
            </ul>
            {nextPage !== null && (
                <Link to={`/?page=${nextPage}`} className="pagination">
                &lt; View Older Posts
                </Link>
            )}
        </section> */}
      {/* Index.js cpode start */}

      <div className="admin-title">
        <h2>Posts</h2>
          <a href="/add-post" className="button">
            + Add New
          </a>
        {/* <Routes path="/"
             element = {user ? <Home />: <Navigate to="/login"/>}>
        </Routes> */}
      </div>

      <ul className="admin-posts">
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/post/${post._id}`} dangerouslySetInnerHTML={{ __html: `${post.title} &nearr;` }}></a>
            <div className="admin-post-controls">
              <a href={`/edit-post/${post._id}`} className="btn">
                Edit
              </a>
              <button
                onClick={() => handleDelete(post._id)}
                className="btn-delete btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

// Certainly! To convert this HTML and EJS snippet into a React component, you'll need to:

// 1. **Use state to manage the list of posts.**
// 2. **Render the list of posts dynamically.**
// 3. **Handle navigation and actions like edit and delete.**

// Below is a React component that accomplishes this. For this example, I'll assume you have a `posts` array available in your component's state or props. You will need to adapt the fetch and delete logic as needed for your specific application.

// ```jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PostsList = () => {
//     const [posts, setPosts] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch posts from the API or other source
//         const fetchPosts = async () => {
//             try {
//                 const response = await fetch('/api/posts'); // Adjust the endpoint as needed
//                 const data = await response.json();
//                 setPosts(data);
//             } catch (error) {
//                 console.error('Error fetching posts:', error);
//             }
//         };

//         fetchPosts();
//     }, []);

//     const handleDelete = async (postId) => {
//         if (window.confirm('Are you sure you want to delete this post?')) {
//             try {
//                 await fetch(`/api/delete-post/${postId}`, {
//                     method: 'DELETE',
//                 });
//                 // Remove the deleted post from the state
//                 setPosts(posts.filter(post => post._id !== postId));
//             } catch (error) {
//                 console.error('Error deleting post:', error);
//             }
//         }
//     };

//     return (
//         <div>
//             <div className="admin-title">
//                 <h2>Posts</h2>
//                 <a href="/add-post" className="button">+ Add New</a>
//             </div>

//             <ul className="admin-posts">
//                 {posts.map(post => (
//                     <li key={post._id}>
//                         <a href={`/post/${post._id}`}>
//                             {post.title} &nearr;
//                         </a>
//                         <div className="admin-post-controls">
//                             <a href={`/edit-post/${post._id}`} className="btn">Edit</a>
//                             <button
//                                 onClick={() => handleDelete(post._id)}
//                                 className="btn-delete btn"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PostsList;
// ```

// ### Explanation:

// 1. **State Management**:
//    - `posts` state is used to hold the list of posts.

// 2. **Data Fetching**:
//    - The `useEffect` hook fetches posts from an API when the component mounts. Replace `'/api/posts'` with your actual API endpoint.

// 3. **Handling Delete**:
//    - `handleDelete` function confirms the action with the user and sends a DELETE request to remove the post. The post is then removed from the local state.

// 4. **Dynamic Rendering**:
//    - Posts are dynamically rendered using `map` based on the `posts` array. Each post includes links to view, edit, and delete.

// 5. **Styling**:
//    - Ensure you have corresponding CSS classes (`admin-title`, `button`, `admin-posts`, `btn`, `btn-delete`, etc.) to style the component as needed.

// This example assumes you are using React Router for navigation (`useNavigate`), but you can adjust the links and navigation logic based on your setup.
