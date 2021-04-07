import { RoomService } from '@material-ui/icons';
import React from 'react';
import PostCard from '../postCard/PostCard';
import './Posts.css';

const Posts = ({ posts }) => {

    const rows = [...Array(Math.ceil(posts.length / 2))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) => posts.slice(idx * 2, idx * 2 + 2));
    // map the rows as div.row
    const content = productRows.map((row, idx) => (
        <div className="row all-posts" key={idx}>
            { row.map(product => <PostCard key={product.id} className="col-md-3" post={product} />)}
        </div>)
    );


    return (
        <div className="post-grid">
            {/* {postsList} */}
            {content}
        </div>
    );
    // return (
    //     <div className="post-grid">
    //         <div className="all-posts">
    //             {this.props.postList.map(item => {
    //                 return <PostCard key={item.id} post={item} />
    //             })}
    //         </div>
    //     </div>
    // );
}

export default Posts;