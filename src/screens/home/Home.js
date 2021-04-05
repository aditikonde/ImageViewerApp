import React, { Component } from 'react';
import Header from '../../common/header/Header';

class Home extends Component {
    constructor() {
        super();
        console.log();
        this.state = {
            posts: [{}]
        }
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
            console.log(that.state.posts);
        });
        xhr.open("GET", api);
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    render() {
        return (
            <div>
                <Header isHome="true" isLoggedIn="true" />
                <h1>Home page</h1>
            </div>
        );
    }
}

export default Home;