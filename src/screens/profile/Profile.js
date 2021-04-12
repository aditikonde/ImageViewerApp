import React, { Component } from 'react';
import Header from '../../common/header/Header';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Modal from 'react-modal';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Profile.css';
import { Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostCard from '../postCard/PostCard';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Upgrad Education",
            tempName: "",
            tempNameReq: "displayNone",
            isModalOpen: false,
            posts: [],
        }
    }

    fullNameChangeHandler = (e) => {
        this.setState({ tempName: e.target.value });
    }

    editFullNameClickHandler = () => {
        if (this.state.tempName === "") {
            this.setState({ tempNameReq: "displayBlock" });
            return;
        }
        var temp = this.state.tempName;
        this.setState({ fullName: temp });
        this.setState({ tempName: '' });
        this.setState({ isModalOpen: false });
    }

    handleOpen = () => {
        this.setState({ isModalOpen: true });
    }

    handleClose = () => {
        this.setState({ tempNameReq: "displayNone" });
        this.setState({ isModalOpen: false });
    }

    componentWillMount() {
        let accessToken = sessionStorage.getItem("access-token");
        let api = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}/`;

        let that = this;
        let data = null;
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ posts: JSON.parse(this.responseText).data });
            }
            that.setState({ posts: that.state.posts })

        });
        xhr.open("GET", api);
        xhr.send(data);
    }

    render() {
        return (
            <div>
                <Header isLoggedIn="true" isProfile="true" />
                <div className="profile-page">
                    <div className="info-section">
                        <div className="user-icon-circle">
                            <IconButton aria-label="user-icon" aria-haspopup="true" >
                                <img src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" alt="user" className="profile-icon"></img>
                            </IconButton>
                        </div>
                        <div className="info ">
                            <div className="insta-handle info-divs"><span className="insta-handle-name" >upgrad_sde</span></div>
                            <div className="user-info-sec info-divs">
                                <ul className="ul-info">
                                    <li className="li-info">Posts: {this.state.posts.length}</li>
                                    <li className="li-info">Follows: 132</li>
                                    <li className="li-info">Followed By: 150</li>
                                </ul>
                            </div>
                            <div className="ful-name info-divs">
                                <span className="full-name">
                                    {this.state.fullName}
                                </span>
                                <Button color="secondary" className="edit-btn" onClick={this.handleOpen}>
                                    <Fab color="secondary" aria-label="edit">
                                        <EditIcon />
                                    </Fab>
                                </Button>
                                <Modal
                                    ariaHideApp={false}
                                    isOpen={this.state.isModalOpen}
                                    contentLabel="EditFullName"
                                    onRequestClose={this.handleClose}
                                    className="edit-modal"
                                >
                                    <Typography variant="h5" component="h2" style={{ paddingBottom: '10px' }}>Edit</Typography>

                                    <FormControl required >
                                        <InputLabel htmlFor="fullName" >Full Name</InputLabel>
                                        <Input id="fullName" type="text" onChange={this.fullNameChangeHandler} />
                                        <FormHelperText className={this.state.tempNameReq}><span style={{ color: 'red' }} >required</span>
                                        </FormHelperText>
                                    </FormControl>
                                    <br />
                                    <br />
                                    <Button variant="contained" color="primary" onClick={this.editFullNameClickHandler} style={{ marginTop: '10px' }}>
                                        UPDATE
                                    </Button>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="img-gallery">
                        <GridList className="grid-list" cols={3}>
                            {this.state.posts.map((tile) => (

                                <GridListTile key={tile.id} style={{ width: '310px', height: '300px', margin: '1px' }}>
                                    <PostCard isProfilePage="true" post={tile} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;