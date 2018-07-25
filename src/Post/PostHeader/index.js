import React, { Component } from 'react';
import PropTypes from "prop-types";

const PostHeader = ({ meta }) => {

    return (
        <header className="post__header">
            <figure className="post__thumb"><img src={meta.author.avatar} alt={meta.author.name} /></figure>
            <div>
                <strong className="post__author">{meta.author.name}</strong>
                <span className="post__helper">há {meta.createdAt} min</span>
            </div>
        </header>
    );
};

PostHeader.propTypes = {
    meta: PropTypes.shape({
        author: PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string
        }),
        createdAt: PropTypes.number
    })
};

export default PostHeader;
