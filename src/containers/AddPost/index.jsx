import React, { Component } from "react";
import firebase from "../../firebase";

class AddPost extends Component {
  state = { title: "" };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const postsRef = firebase.database().ref("posts");
    const newPost = {
      title: this.state.title,
      upvote: 0,
      downvote: 0
    };
    postsRef.push(newPost);

    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div className="AddPost">
        <input
          type="text"
          placeholder="Write the title of your post"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default AddPost;
