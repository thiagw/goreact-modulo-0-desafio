import React, { Component } from 'react';
import PropTypes from "prop-types";

const PostContent = ({ content }) => {
        
    return (
        <div className="post__content">
            <p>{content}</p>
        </div>
    );
};

PostContent.propTypes = {
    content: PropTypes.string
}

export default PostContent;
