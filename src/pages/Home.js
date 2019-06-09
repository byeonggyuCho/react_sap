import React from 'react';


const Home = ({history}) => {
    return (
        <div>
            <h2>홈</h2>
            <button
                onClick={() => {
                    //자바스크립트로 경로 이동을 할 때.
                    history.push('/about/javascript')
                }}>
            자바스크립트를 사용하여 이동
            </button>
        </div>
    );
}

export default Home;