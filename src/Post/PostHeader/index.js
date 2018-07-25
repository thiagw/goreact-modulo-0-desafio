import React, { Component } from 'react';
import PropTypes from "prop-types";

class PostHeader extends Component {

    static propTypes = {
        meta: PropTypes.object
    };

    render() {

        const { meta } = this.props;
        
        return (
            <header className="post__header">
                <figure className="post__thumb"><img src={meta.author.avatar} alt={meta.author.name} /></figure>
                <div>
                    <strong className="post__author">{meta.author.name}</strong>
                    <span className="post__helper">há {meta.createdAt} min</span>
                </div>
            </header>
        );
    }
}

export default PostHeader;