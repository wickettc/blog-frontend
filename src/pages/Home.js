import React, { useState, useEffect } from 'react';
import PostDiv from '../components/PostDiv';
import { getBlogPosts } from '../api/blogCall';
import _ from 'lodash';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBlogPosts();
            setPosts(res);
        };
        fetchData();
    }, []);

    const renderPosts = posts.map(({ _id, title, message, time }, index) => {
        return (
            <PostDiv
                key={index}
                id={_id}
                title={title}
                message={message}
                time={time}
            />
        );
    });

    return (
        <div>
            <h1>Blog</h1>
            {_.isEmpty(posts) ? (
                <div className="loader"></div>
            ) : (
                <div>{renderPosts}</div>
            )}
        </div>
    );
};

export default Home;
