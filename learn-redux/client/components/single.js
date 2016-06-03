import React from 'react';

import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
  render() {
    const { postid } = this.props.params;
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postid);
    // get the post at this index
    const post = this.props.posts[i];
    // get the comments that belong to this post
    const postComments = this.props.comments[postid] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
});

export default Single;
