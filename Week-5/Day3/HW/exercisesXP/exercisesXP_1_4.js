// //           Exercise 1      Find The Numbers Divisible By 23 + BONUS

// function displayNumbersDivisible(divisor = 23){
//     let outcome ='Outcome: '
//     let sum = 0
//     for (let i = 0; i < 500;i++){
//         if (i % divisor == 0){
//             outcome += `${i} `
//             sum += i
//         }
//     }
//     console.log(outcome);
//     console.log(`THE SUM is: ${sum}`);
// }

// displayNumbersDivisible(3);

// //           Exercise 2     Shopping List

// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }

// let shoppingList = ['banana', 'orange', 'apple']

// function myBill(){
//     let totalPrice = 0
//     for (let i = 0; i < shoppingList.length; i++) {
//         let ind = shoppingList[i]
//         if ( stock[ind] > 0) {
//             stock[ind]--
//             console.log(prices[ind]);
//             totalPrice += prices[ind]
//         }
//     }
//     return totalPrice
// }

// console.log(`Total price: ${myBill()}`);

// console.log(stock);

// //          Exercise 3      What’s In My Wallet ?

// function changeEnough(itemPrice, amountOfChange){
//     let bool = false
//     let cash = [0.25, 0.1, 0.05, 0.01]
//     let sumOf = 0
//     for(i in amountOfChange){
//         sumOf += amountOfChange[i] * cash[i]
//     }
//     // let sumQua = amountOfChange[0] * 0.25
//     // let sumDim = amountOfChange[1] * 0.1
//     // let sumNic = amountOfChange[2] * 0.05
//     // let sumPen = amountOfChange[3] * 0.01
//     // sumOf = sumQua + sumDim + sumNic + sumPen
//     // console.log(sumOf);
//     if (itemPrice < sumOf){
//         bool = true
//     }
//     return bool
// }
// console.log(changeEnough(4.25,[25,20,5,0]));

//          Exercise 4      Vacations Costs

function hotelCost() {
    while (true) {
        let numNights = parseInt(
            prompt("Who many nights you would like stay in hotel?")
        );
        if (Number.isInteger(numNights)) {
            return numNights * 140;
        }
    }
}

function planeRideCost() {
    while (true) {
        let destination = prompt("Where are you going?");
        if (isNaN(destination) && destination != "") {
            if (destination === "Paris" || destination === "paris") {
                return 183;
            } else if (destination === "London" || destination === "london") {
                return 220;
            } else {
                return 300;
            }
        }
    }
}

function rentalCarCost() {
    while (true) {
        let numRent = parseInt(prompt("Who many days of rent?"));
        if (!isNaN(numRent)) {
            if (numRent > 10) {
                console.log(numRent * (40 - 40 * 0.05));
                return numRent * (40 - 40 * 0.05);
            } else {
                console.log(numRent * 40);
                return numRent * 40;
            }
        }
    }
}

function totalVacationCost(){
    return hotelCost() + planeRideCost() + rentalCarCost();
}
console.log(totalVacationCost());