import React, { useState, useEffect } from 'react';
import CommentDiv from '../components/CommentDiv';
import AddComment from '../components/AddComment';
import { getBlogPost } from '../api/blogCall';
import _ from 'lodash';

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
            {showAddComment ? (
                <AddComment id={post._id} handleClose={handleClose} />
            ) : null}
            {_.isEmpty(post) ? (
                <div className="loader"></div>
            ) : (
                <div>
                    <div className="post-container">
                        <h2>{post.title}</h2>
                        <p>{post.message}</p>
                    </div>
                    <div className="comments-container">
                        <h3>Comments</h3>
                        {showAddComment ? null : (
                            <button onClick={() => setShowAddComment(true)}>
                                Add a Comment
                            </button>
                        )}
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
