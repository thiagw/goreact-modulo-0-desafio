import React, { Component } from 'react';

// Components
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

// Styles
import './post.scss';

const Post = ({ data }) => {

    return (
        <article className="post">
            <PostHeader meta={data.meta} />
            <PostContent content={data.postContent} />
        </article>
    );
};

export default Post;
