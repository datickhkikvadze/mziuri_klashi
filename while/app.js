// let i = 0
// while (1 < 10) {
//     console.log(i);
// }


// const colors = ['red', 'green', 'blue']
// let j = 0

// while (j < colors.length) {
//     console.log(colors[j]);
//     j ++
// }



// const nums = [7, 8, 1]
// let i = 0
// let sum = 0
// let namravli = 1

// while (i < nums.length) {
//     sum += nums[i]         
//     namravli *= nums[i]  

//     i++
// }

//     console.log(sum)         
//     console.log(namravli)




// const nums = [1, 2, 3]
// let i = 0
// let sum = 0

// while (i < nums.length) {
//     if (nums[i] % 2 !== 0) {
//         sum += nums[i]
//     }
//     i++; 
// }

// console.log(sum)



// let ballance = 50

// while (ballance > 15) {
//     if (ballance >= 15) {
//         ballance -= 15
//      if (ballance < 15){
//         console.log('Not enough money')
//         break
//     }
// }
//     console.log(ballance)
// }




const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const min = [];
const max = [];
let i = 0;

while (i < nums.length) {
    if (nums[i] < 5) {
        min.push(nums[i]);
    } else {
        max.push(nums[i]);
    }
    i++;
}

console.log('Min:', min);
console.log('Max:', max);




