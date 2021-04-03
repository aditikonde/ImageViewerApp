import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            usernameReq: "displayNone",
            pwd: "",
            pwdReq: "displayNone"
        }
    }

    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    passwordChangeHandler = (e) => {
        this.setState({ pwd: e.target.value });
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameReq: "displayBlock" }) : this.setState({ usernameReq: "displayNone" });

        this.state.pwd === "" ? this.setState({ pwdReq: "displayBlock" }) : this.setState({ pwdReq: "displayNone" });

        if (this.state.username !== "" && this.state.pwd !== "") {
            this.props.history.push({
                pathname: '/home'
            })
        } else {
            return;
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="login-page">
                    <Card className="card">
                        <CardContent>
                            <Typography variant="h5" component="h2" className="card-heading">Login</Typography>
                            <br />
                            <FormControl required className="form-control">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" onChange={this.usernameChangeHandler} />
                                <FormHelperText className={this.state.usernameReq}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className="form-control">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.passwordChangeHandler} />
                                <FormHelperText className={this.state.pwdReq}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler} className="login-btn">Login</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;