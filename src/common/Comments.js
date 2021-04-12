import React, { Component } from 'react';

class Comments extends Component {


    render() {
        return (

            <div className="all-comments">
                <List list={this.props.comments} user={this.props.postDetails.username} />
            </div>
        );
    }
}

const List = ({ list, user }) => (
    <ul>
        {list.map((item) => (
            <li key={item + "" + 1} className="li-comment"><span style={{ fontWeight: "bold" }}>{user}:</span> {item}</li>
        ))}
    </ul>
);

export default Comments;