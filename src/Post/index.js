import React, { Component } from 'react';

// Components
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

// Styles
import './post.scss';

class Post extends Component {

    render() {

        const { data } = this.props;

        return (
            <article className="post">
                <PostHeader meta={data.meta} />
                <PostContent content={data.postContent} />
            </article>
        );
    }
};

export default Post;
