import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from '@material-ui/core/Input';

class Header extends Component {
    constructor(props) {
        super(props);
        this.logoutHandler = this.logoutHandler.bind(this);
        this.state = {
            anchorEl: null,
        }
    }

    menuHandleClose = () => {
        this.setState({ anchorEl: null });
    }

    menuHandleClick = (e) => {
        this.setState({ anchorEl: e.target });
    }


    logoutHandler = () => {
        sessionStorage.clear();
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
                                disableUnderline={true}
                                onChange={this.props.searchHandle}
                                startAdornment={<InputAdornment position="start"><SearchIcon className="search-icon" /></InputAdornment>}
                            />
                        </div> : ""
                    }

                    {this.props.isLoggedIn === "true" ?
                        <div className="user-icon">
                            {/* <IconButton aria-label="user-icon" aria-haspopup="true" onClick={this.handleClick}>
                                <img src="../assets/userIcon.png" alt="user" className="user-pic"></img>
                            </IconButton> */}

                            <Avatar alt="user" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" className="user-pic" onClick={this.menuHandleClick}></Avatar>

                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.menuHandleClose}
                                className="menu"
                            >
                                {this.props.isProfile ? '' :
                                    <Link to="/profile" className="link">
                                        <MenuItem >My account</MenuItem>
                                    </Link>}
                                {this.props.isProfile ? '' :
                                    <hr style={{ margin: "0px 10px" }} />
                                }
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