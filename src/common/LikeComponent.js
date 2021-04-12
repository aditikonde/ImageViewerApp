import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';

class LikeComponent extends Component {

    likeHandler = () => {
        let numLikes = this.props.likes;

        if (this.props.isLiked) {
            this.props.numLikesHandler(numLikes - 1);
            this.props.likeChangeHandler(false);
        } else {
            this.props.numLikesHandler(numLikes + 1);
            this.props.likeChangeHandler(true);
        }

    };

    render() {

        return (
            <IconButton aria-label="add to favorites" style={{ padding: '0%' }} onClick={this.likeHandler}>
                {this.props.isLiked ? <Favorite style={{ color: "red" }} /> : <FavoriteIcon />}
                <Typography className="like-no">{this.props.likes} likes</Typography>
            </IconButton>
        );
    }
}

export default LikeComponent;