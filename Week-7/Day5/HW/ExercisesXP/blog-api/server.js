const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Run on 3000");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let data = [
    {
        id: 1,
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
    },
    {
        id: 2,
        title: "Second Blog Post",
        content: "This is the content of the second blog post.",
    },
    {
        id: 3,
        title: "Third Blog Post",
        content: "This is the content of the third blog post.",
    },
];

    app.get("/posts", (req, res) => {
        res.json(data);
    });

    app.get("/posts/:id", (req, res) => {
        const { id } = req.params;
        let post = data.filter((item) => item.id == id);
        if (post.length === 0) {
            return res.json({ msg: "post not founded" });
        }
        res.json(post);
    });

    app.post("/posts", (req, res) => {
        console.log(req.body);
        data.push(req.body);
        res.send(data);
    });

    app.put("/posts/:id", (req, res) => {
        const { id } = req.params;
        const { title, content } = req.body;
        let index = data.findIndex((item) => item.id == id);

        if (index == -1) {
            res.status(404).json({ msg: "post not founded" });
        }
        data[index] = {
            ...data[index],
            title,
            content,
        };
        res.status(200).json(data);
    });

    app.delete("/posts/:id", (req, res) => {
        const { id } = req.params;
        let index = data.findIndex((item) => item.id == id);
        if (index == -1) {
            res.status(404).json({ msg: "post not founded" });
            return;
        }
        data.splice(index, 1);
        res.status(200).json(data);
    });