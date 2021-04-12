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
import Caption from '../../common/CaptionHashtag';
import Like from '../../common/LikeComponent';
import PostImage from '../postImage/PostImage';
import AddComment from '../../common/AddComment';
import Comments from '../../common/Comments';


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
            isLiked: false,
            comments: [],
            comment: "",
            postDetails: {},
            timestamp: "",
            openImgModal: false
        }
    }

    changeNumLikes = (newLikes) => {
        this.setState({ likes: newLikes });
    }

    changeLiked = (isLikedChanged) => {
        this.setState({ isLiked: isLikedChanged });
    }



    // likeHandler = () => {
    //     let numLikes = this.state.likes;
    //     if (this.state.isLiked) {
    //         this.setState({ likes: numLikes - 1 });
    //         this.setState({ isLiked: false });
    //     } else {
    //         this.setState({ likes: numLikes + 1 });
    //         this.setState({ isLiked: true });
    //     }
    // }

    inputCommentHandler = (newComment) => {
        this.setState({ comment: newComment });
    }

    addCommentHandler = () => {

        let newComments = this.state.comments;
        if (this.state.comment !== "") {
            newComments.push(this.state.comment);
            this.setState({ comments: newComments });
            this.setState({ comment: "" });
        } else {
            return;
        }
    }
    randomFunc = () => {
        var x = Math.floor((Math.random() * 10) + 2);
        return x;
    }
    componentWillMount() {
        let randomLikes = this.randomFunc();
        this.setState({ likes: randomLikes });

        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ postDetails: JSON.parse(this.responseText), timestamp: that.state.postDetails.timestamp })
                console.log("postDetails", JSON.parse(this.responseText));
            }
        })

        let accesstoken = sessionStorage.getItem("access-token");
        let api = `https://graph.instagram.com/${this.props.post.id}?fields=id,media_type,media_url,username,timestamp&access_token=${accesstoken}`;
        xhr.open("GET", api);
        xhr.send(data);
    }

    subStrAfterChars = (str, char, pos) => {
        if (pos == 'b')
            return str.substring(str.indexOf(char) + 1);
        else if (pos == 'a')
            return str.substring(0, str.indexOf(char));
        else
            return str;
    }

    imageModalCloseHandler = () => {
        this.setState({ openImgModal: false });
    }

    render() {
        const { classes } = this.props;

        if (this.props.isProfilePage) {
            return (
                <>
                    <img src={this.state.postDetails.media_url} alt={this.state.postDetails.id} className="gallery-img" style={{ width: '100%' }} onClick={() => this.setState({ openImgModal: true })}></img>
                    <PostImage open={this.state.openImgModal} modalCloseHandler={this.imageModalCloseHandler} post={this.props.post} postDetails={this.state.postDetails} likes={this.state.likes} isLiked={this.state.isLiked} numLikesHandler={this.changeNumLikes} likeChangeHandler={this.changeLiked} comment={this.state.comment} comments={this.state.comments} inputCommntHandler={this.inputCommentHandler} addComment={this.addCommentHandler} caption={this.subStrAfterChars(this.props.post.caption, '#', 'a')} hashtag={this.subStrAfterChars(this.props.post.caption, '#', 'b')} />
                </>
            );
        }
        return (
            <Card className="post">
                <CardHeader
                    avatar={
                        <Avatar alt="user" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" className={classes.avatar}>

                        </Avatar>
                    }

                    title={this.state.postDetails.username}
                    subheader={new Date(this.state.postDetails.timestamp).getDate() +
                        "/" + (new Date(this.state.postDetails.timestamp).getMonth() + 1) +
                        "/" + new Date(this.state.postDetails.timestamp).getFullYear() +
                        " " + new Date(this.state.postDetails.timestamp).getHours() +
                        ":" + new Date(this.state.postDetails.timestamp).getMinutes() +
                        ":" + new Date(this.state.postDetails.timestamp).getSeconds()}
                />

                <CardContent className="content">
                    <div className="post-img">
                        <CardMedia

                            className={classes.media}
                            image={this.state.postDetails.media_url}

                        />

                    </div>
                    <hr />


                    {/* <Typography>{this.subStrAfterChars(this.props.post.caption, '#', 'a')}</Typography>
                    <Typography style={{ color: 'deepskyblue' }}>#{this.subStrAfterChars(this.props.post.caption, '#', 'b')}</Typography> */}
                    <Caption caption={this.subStrAfterChars(this.props.post.caption, '#', 'a')} hashtag={this.subStrAfterChars(this.props.post.caption, '#', 'b')} />


                    {/* <IconButton aria-label="add to favorites" className="like" onClick={this.likeHandler}>
                        {this.state.isLiked ? <Favorite style={{ color: "red" }} /> : <FavoriteIcon />}
                        <Typography className="like-no">{this.state.likes} likes</Typography>
                    </IconButton> */}
                    <Like likes={this.state.likes} isLiked={this.state.isLiked} numLikesHandler={this.changeNumLikes} likeChangeHandler={this.changeLiked} />

                    <div className="comment-section">
                        {/* <div className="all-comments">
                            <List list={this.state.comments} user={this.state.postDetails.username} />
                        </div> */}
                        {/* <div className="comment-container">
                            <div className="comment-ip">
                                <TextField id="standard-basic" style={{ width: '84%' }} value={this.state.comment} label="Add a comment" onChange={this.inputCommentHandler} />
                            </div>
                            <div className="comment-btn">
                                <Button variant="contained" color="primary" className="add-comment" onClick={this.addCommentHandler}>Add</Button>
                            </div>
                        </div> */}

                        <Comments comments={this.state.comments} postDetails={this.state.postDetails} />

                        <AddComment comment={this.state.comment} comments={this.state.comments} inputCommntHandler={this.inputCommentHandler} addComment={this.addCommentHandler} />

                    </div>
                </CardContent>

            </Card>
        );
    }

}

// const List = ({ list, user }) => (
//     <ul>
//         {list.map((item) => (
//             <li key={item + "" + 1} className="li-comment"><span style={{ fontWeight: "bold" }}>{user}:</span> {item}</li>
//         ))}
//     </ul>
// );

export default withStyles(styles)(PostCard);