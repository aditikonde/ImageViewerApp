// import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import Typography from '@material-ui/core/Typography';
// import CardContent from '@material-ui/core/CardContent';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import './PostCard.css';
// import { CardHeader } from '@material-ui/core';

// class PostCard extends Component {
//     render() {
//         console.log("*******************" + this.props.post.id)
//         return (
//             <div>
//                 <Card className="post">
//                     <CardHeader>
//                         <Typography>Username here</Typography>
//                     </CardHeader>
//                     <CardContent>
//                         <Typography variant="h5" component="h2" className="card-heading">{this.props.post.id}</Typography>
//                         <br />
//                         <Typography>{this.props.post.caption}</Typography>
//                     </CardContent>
//                 </Card>
//             </div>
//         );
//     }
// }
// export default PostCard;

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import red from "@material-ui/core/colors/red";
import TextField from '@material-ui/core/TextField';
import './PostCard.css';
import { Button } from '@material-ui/core';

const styles = theme => ({

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    avatar: {
        border: 'black solid 2px',
    },
});
class PostCard extends Component {

    constructor() {
        super();
        this.state = {
            likes: 4,
            isLiked: false
        }
    }

    likeHandler = () => {
        let numLikes = this.state.likes;
        if (this.state.isLiked) {
            this.setState({ likes: numLikes - 1 });
            this.setState({ isLiked: false });
        } else {
            this.setState({ likes: numLikes + 1 });
            this.setState({ isLiked: true });
        }
    }

    randomFunc = () => {
        var x = Math.floor((Math.random() * 10) + 2);
        return x;
    }
    componentWillMount() {
        let randomLikes = this.randomFunc();
        this.setState({ likes: randomLikes });
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className="post">
                <CardHeader
                    avatar={
                        <Avatar alt="user" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" className={classes.avatar}>

                        </Avatar>
                    }

                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography>{this.props.post.caption}</Typography>
                </CardContent>

                <IconButton aria-label="add to favorites" className="like" onClick={this.likeHandler}>
                    {this.state.isLiked ? <Favorite style={{ color: "red" }} /> : <FavoriteIcon />}
                    <Typography className="like-no">{this.state.likes} likes</Typography>
                </IconButton>

                <CardContent className="comment-section">



                    <div className="comment-container">
                        <div className="comment-ip">
                            <TextField id="standard-basic" style={{ width: '84%' }} label="Add a comment" />
                        </div>
                        <div className="comment-btn">
                            <Button variant="contained" color="primary" className="add-comment" onClick={this.addCommentHandler}>Add</Button>
                        </div>
                    </div>

                </CardContent>

            </Card>
        );
    }

}

export default withStyles(styles)(PostCard);