// import React from "react";

// class Post extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }

//   componentDidMount() {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => this.setState({ posts: json }));
//   }
// }

// export default function Post() {
//   const { posts } = this.state;

//   return (
//     <div className="container">
//       <div class="jumbotron">
//         <h1 class="display-4">Blog posts</h1>
//       </div>
//       {posts.map((post) => (
//         <div className="card" key={post.id}>
//           <div className="card-header">
//             #{post.id} {post.title}
//           </div>
//           <div className="card-body">
//             <p className="card-text">{post.body}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
