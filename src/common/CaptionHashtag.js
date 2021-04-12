import React from 'react';
import Typography from '@material-ui/core/Typography';

const CaptionHashtag = (post) => {

    return (
        <>
            <Typography>{post.caption}</Typography>
            <Typography style={{ color: 'deepskyblue' }}>#{post.hashtag}</Typography>
        </>
    );
}

export default CaptionHashtag;