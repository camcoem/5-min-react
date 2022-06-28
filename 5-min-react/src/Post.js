import React, { Component, useState, useEffect } from "react";
import "./App.css";

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

//   // export default function Post() {
//   render() {
//     const { posts } = this.state;

//     return (
//       <>
//         <div className="jumbotron">
//           <h1 className="display-4">Blog posts</h1>
//         </div>

//         {posts.map((post) => (
//           <div className="card" key={post.id}>
//             <div className="card-header" style={{ backgroundColour: "black" }}>
//               #{post.id} {post.title}
//             </div>
//             <div className="card-body">
//               <p className="card-text">{post.body}</p>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //the Usestate: allows us to track state in a function component.

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setIsLoading(true);
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  //using useEffect: is order to be able to see the loader, and to add a dependency (which is the empty array). An empty array in this case meants that the loader would only appear once. Similar as in the case of classComponents with componentDidMount.

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Blog posts</h1>
      </div>
      {isLoading && <h2>Loading.......</h2>}
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header" style={{ backgroundColour: "black" }}>
            #{post.id} {post.title}
          </div>
          <div className="card-body">
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
