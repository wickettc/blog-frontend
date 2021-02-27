import axios from 'axios';

const baseURL = 'https://peaceful-woodland-83684.herokuapp.com/';

const getBlogPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}blog/posts`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const getBlogPost = async (matchURL) => {
    try {
        const response = await axios.get(`${baseURL}blog/post/${matchURL}`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const postComment = async (author, postId, commentbody) => {
    try {
        const response = await axios.post(`${baseURL}blog/comments`, {
            author,
            postId,
            commentbody,
        });
        return response;
    } catch (err) {
        console.error(err);
    }
};

export { getBlogPosts, getBlogPost, postComment };
