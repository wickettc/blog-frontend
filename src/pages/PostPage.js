import React, { useState, useEffect } from 'react';
import CommentDiv from '../components/CommentDiv';
import AddComment from '../components/AddComment';
import { getBlogPost } from '../api/blogCall';
import _ from 'lodash';
import './PostPage.css';

const PostPage = ({ match }) => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [showAddComment, setShowAddComment] = useState(false);
    const [commentSubmitted, setCommentSubmitted] = useState(false);

    useEffect(() => {
        const fetchData = async (matchURL) => {
            const res = await getBlogPost(matchURL);
            setPost(res.post);
            setComments(res.comments);
        };
        fetchData(match.params.id);
        // make sure commentSubmitted is false after fetch
        setCommentSubmitted(false);
    }, [match.params.id, commentSubmitted]);

    const handleClose = (wasSubmitted) => {
        setShowAddComment(false);
        // by updating commentSubmitted, we cause refetching of data to display the
        // newly added comment
        wasSubmitted ? setCommentSubmitted(true) : setCommentSubmitted(false);
    };

    return (
        <div>
            {_.isEmpty(post) ? (
                <div className="loader"></div>
            ) : (
                <div className="post-page-container">
                    <div>
                        <h2>{post.title}</h2>
                        <p className="post-message">{post.message}</p>
                        <p className="post-page-author">
                            A blog post by:{' '}
                            <span className="italics">{post.author}</span>
                        </p>
                    </div>
                    <hr />
                    <div>
                        <div className="post-page-add-comment-container">
                            <h3>Comments</h3>
                            {showAddComment ? (
                                <AddComment
                                    id={post._id}
                                    handleClose={handleClose}
                                />
                            ) : (
                                <button
                                    className="post-page-add-btn"
                                    onClick={() => setShowAddComment(true)}
                                >
                                    Add a Comment
                                </button>
                            )}
                        </div>
                        {comments.length === 0 ? (
                            <div>Nothing to display</div>
                        ) : (
                            comments.map(
                                ({ author, commentbody, time }, index) => {
                                    return (
                                        <CommentDiv
                                            key={index}
                                            author={author}
                                            commentbody={commentbody}
                                            time={time}
                                        />
                                    );
                                }
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostPage;
