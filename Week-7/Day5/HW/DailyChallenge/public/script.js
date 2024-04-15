let randomEmoji = {};

function getRandom() {
  fetch("http://127.0.0.1:3001/emojis")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      randomEmoji = data.randomEmoji;
      let options = data.shuffleEmojis;
      render(randomEmoji, options);
    })
    .catch((err) => {
      console.log(err);
    });
}

getRandom();

function render(emoji, options) {
  const html = options.map((item) => {
    return ` ${item.name}, `;
  });
  const root = document.getElementById("root");
  root.innerHTML = "options: " + html.join("") + " hint:" + emoji.emoji;
}

function gueseAnEmoji() {
  const guese = document.getElementById("guese").value;
  console.log(guese);
  const name = randomEmoji.name;
  console.log(name);

  fetch("http://127.0.0.1:3001/emojis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, guese }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
