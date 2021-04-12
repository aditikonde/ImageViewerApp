import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import Caption from '../../common/CaptionHashtag';
import Like from '../../common/LikeComponent';
import './PostImage.css';
import Comments from '../../common/Comments';
import AddComment from '../../common/AddComment';

class PostImage extends Component {
    constructor() {
        super();
        this.state = {
            isImageModalOpen: false,
        }
    }

    // postImageOpenModalHandler = () => {
    //     this.setState({ isImageModalOpen: true });
    // }

    modalCloseHandler = () => {
        this.props.modalCloseHandler();
    }



    render() {
        return (
            <Modal
                open={this.props.open}
                onClose={this.modalCloseHandler}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal-page">
                    <div className="modal-img-part">
                        <img src={this.props.postDetails.media_url} alt={this.props.postDetails.id} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="modal-info-part">
                        <div className="modal-info-part-header">
                            <Avatar alt="user" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" >

                            </Avatar>
                            <h3 className="post-img-username">{this.props.postDetails.username}</h3>
                        </div>
                        <hr className="line" />
                        <div className="modal-img-caption">
                            <Caption caption={this.props.caption} hashtag={this.props.hashtag} />
                        </div>
                        <div className="like-comment-sec">
                            <Comments comments={this.props.comments} postDetails={this.props.postDetails} />

                            <Like likes={this.props.likes} isLiked={this.props.isLiked} numLikesHandler={this.props.numLikesHandler} likeChangeHandler={this.props.likeChangeHandler} />

                            <div style={{ marginBottom: '-2%' }}>
                                <AddComment comment={this.props.comment} comments={this.props.comments} inputCommntHandler={this.props.inputCommntHandler} addComment={this.props.addComment} />
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        );
    }
}

export default PostImage;