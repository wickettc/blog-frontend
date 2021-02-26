import axios from 'axios';

const getBlogPosts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/blog/posts');
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const getBlogPost = async (matchURL) => {
    try {
        const response = await axios.get(
            `http://localhost:3000/blog/post/${matchURL}`
        );
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const postComment = async (postId, commentbody) => {
    try {
        const response = await axios.post(
            'http://localhost:3000/blog/comments',
            {
                postId,
                commentbody,
            }
        );
        return response;
    } catch (err) {
        console.error(err);
    }
};

export { getBlogPosts, getBlogPost, postComment };
