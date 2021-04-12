import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Posts from '../posts/Posts';

class Home extends Component {
    constructor() {
        super();
        console.log();
        this.state = {
            posts: [],
            searchField: '',
        }
    }

    searchHandle = (e) => {
        this.setState({ searchField: e.target.value });
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
            that.setState({ posts: that.state.posts });
        });
        xhr.open("GET", api);
        xhr.send(data);
    }

    render() {
        let userPosts = this.state.posts;

        return (
            <div>
                <Header isHome="true" isLoggedIn="true" searchHandle={this.searchHandle} />
                <Posts posts={userPosts} searchField={this.state.searchField} />
            </div>
        );
    }
}

export default Home;