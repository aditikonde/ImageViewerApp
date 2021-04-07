import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Posts from '../posts/Posts';

class Home extends Component {
    constructor() {
        super();
        console.log();
        this.state = {
            posts: []
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
            that.setState({ posts: that.state.posts })
            console.log(that.state.posts);
        });
        xhr.open("GET", api);
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    render() {
        let userPosts = this.state.posts;
        console.log("======" + userPosts);
        console.log("-----" + JSON.stringify(userPosts));
        return (
            <div>
                <Header isHome="true" isLoggedIn="true" />
                <Posts posts={userPosts} />
            </div>
        );
    }
}

export default Home;