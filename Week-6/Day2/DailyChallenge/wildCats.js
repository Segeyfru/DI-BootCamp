const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const userNames = []
gameInfo.forEach((item,index,arr) => {
    userNames.push(`${item.username}!`);
});
console.log(userNames);

const winners = []
gameInfo.forEach((item,index,arr) => {
    if(item.score > 5){
        winners.push(item.username)
    };
});

console.log(winners);

let sumScore = 0;
gameInfo.forEach((item) => {
    sumScore += item.score
});
console.log(sumScore);