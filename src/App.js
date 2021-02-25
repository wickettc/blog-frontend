import React, { useEffect } from 'react';
import { getBlogPosts } from './api/blogCall';

function App() {
    useEffect(() => {
        const fetchData = async () => {
            const res = await getBlogPosts();
            console.log(res);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <div>App</div>
        </div>
    );
}

export default App;
