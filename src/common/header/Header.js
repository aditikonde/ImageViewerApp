import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from '@material-ui/core/Input';

class Header extends Component {
    constructor(props) {
        super(props);
        this.logoutHandler = this.logoutHandler.bind(this);
        this.state = {
            anchorEl: null
        }
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    handleClick = (e) => {
        this.setState({ anchorEl: e.target });
    }

    searchHandle = (obj) => {
        // document.getElementById("standard-adornment-amount").style.borderBottom = "none";
    }

    // profilePageHandler = () => {
    //     this.props.history.push({
    //         pathname: '/profile'
    //     });
    // }

    logoutHandler = () => {
        sessionStorage.clear();
        // this.props.history.push({
        //     pathname: '/'
        // })
    }

    render() {

        return (
            <header id="header">
                <div id="logo">
                    <Link to="/home" className="no-underline">
                        <span id="home-logo">Image Viewer</span>
                    </Link>
                </div>
                <div className="home-page-obj">

                    {this.props.isHome === "true" ?
                        <div className="search-box">

                            <Input
                                id="standard-adornment-amount"
                                placeholder="Search..."
                                className="search"
                                onChange={this.searchHandle(this)}
                                startAdornment={<InputAdornment position="start"><SearchIcon className="search-icon" /></InputAdornment>}
                            />
                        </div> : ""
                    }

                    {this.props.isLoggedIn === "true" ?
                        <div className="user-icon">
                            {/* <IconButton aria-label="user-icon" aria-haspopup="true" onClick={this.handleClick}>
                                <img src="../assets/userIcon.png" alt="user" className="user-pic"></img>
                            </IconButton> */}

                            <Avatar alt="user" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" className="user-pic" onClick={this.handleClick}></Avatar>

                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                                className="menu"
                            >
                                <Link to="/profile" className="link">
                                    <MenuItem >My account</MenuItem>
                                </Link>
                                <hr style={{ margin: "0px 10px" }} />
                                <Link to="/" className="link">
                                    <MenuItem onClick={this.logoutHandler}>Logout</MenuItem>
                                </Link>
                            </Menu>
                        </div> : ""
                    }

                </div>
            </header>
        );
    }
}

export default Header;