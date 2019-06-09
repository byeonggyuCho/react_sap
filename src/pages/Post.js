import React from 'react';

/**
 *  라우트 안에 다른 라우트를 정의하는 방법
 * 
 * 라우트로 사용된 컴포넌트가 전달받는 props
 *  # 1.locatoin
 *  # 2.match
 *  # 3.history
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