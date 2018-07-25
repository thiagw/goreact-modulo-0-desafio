import React, { Component } from 'react';
import PropTypes from "prop-types";

class PostContent extends Component {

    static propTypes = {
        content: PropTypes.string
    };

    render() {

        const { content } = this.props;
        
        return (
            <div className="post__content">
                <p>{content}</p>
            </div>
        );
    }
}

export default PostContent;
