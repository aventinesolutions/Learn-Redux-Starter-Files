import React from 'react';

import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postid);
    // get the post at this index
    const post = this.props.posts[i];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments/>
      </div>
    );
  }
});

export default Single;
