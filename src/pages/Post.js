import React from 'react';

/**
 *  라우트 안에 다른 라우트를 증의하는 바업ㅂ
 * 
 */
const Post = ({match}) => {
    return (
        <p>
            포스트 #{match.params.id}
        </p>

    )
};

export default Post;