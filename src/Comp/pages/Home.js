import React from 'react'
import Header  from '../components/Header.js'
import Dashboard from '../components/Dashboard.js'


const Home = ({loggedIn,setLoggedIn}) => {
    return (
        <div>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <main>
                <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            </main>
        </div>
    )
}

export default Home;

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>
//         <%= local.title %>
//     </title>
//     <meta name="description" content="<%= local.description %>">
//     <link rel="stylesheet" href="/css/style.css">
//     <script type="text/javascript" defer src="/js/script.js"></script>
// </head>

// <body>

//     <%- include('../partials/search.ejs') %>
//         <div class="container">
//             <%- include('../partials/header.ejs') %>
//                 <main class="main">
//                     <%- body %>
//                 </main>
//                 <%- include('../partials/footer.ejs') %>
//         </div>

// </body>

// </html>