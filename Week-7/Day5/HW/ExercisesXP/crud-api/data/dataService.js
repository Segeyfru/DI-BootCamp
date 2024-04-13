const axios = require("axios");

const fetchPosts = () => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => resp.data)
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => console.log("ERROR --> ", err));
};

// async function fetchPosts() {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       return response.data;
//     } catch (error) {
//       throw new Error('Failed to fetch posts');
//     }
// }
module.exports = { fetchPosts };
