const express = require("express");
const cors = require("cors");
const { emojis } = require("./emojis/emojis.js");

const app = express();

let score = 0;
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log(`run on 3001`);
});

app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({ shuffleEmojis, randomEmoji });
});

app.post("/emojis", (req, res) => {
  const { name, guese } = req.body;
  if (name === guese) {
    score++
    return res.json({ message: "Correct!!!", score })
  };
  res.json({ message: "Try again :( " });
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
