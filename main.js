// (1) write func that take 2 params
// first paramter is string of words
// second paramter is character
// calculate the number of char that apper in the string

// function countChar(str, char) {
//     counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             counter++;
//         }
//     }
//     console.log(counter);
// }
// countChar("DDDSSR", "V");
// ===============================================
//(2)  adcda =>{a:2,b:1,c:1,d:1}

// function countString(str){
//     let obj={};
//     str.split("").forEach(ch => {
//         // obj[ch] = obj[ch] ? obj[ch]+1 :1
//         // if(obj[ch]){
//         //     obj[ch] = obj[ch]+1
//         // }else{
//         //     obj[ch] = 1
//         // }
//     });
//     return obj;
// }
// console.log(countString("aassdddde"))
// ===============================================

// (3) factorial 3 = 3 * 2 * 1 =6

// function factorial(n) {
//     let fact = 1;
//     for (let i = n; i > 1; i--) {
//         fact = fact * i
//     }
//     console.log(fact)
// }
// console.log(factorial(6))
// ===============================================
//(4)  sum from 1 to n
// function sum(n) {
//     let sumBase = 0
//     for (let i = 1; i <= n; i++) {
//         sumBase = sumBase + i
//     }
//     console.log(sumBase)
// }
// sum(10)
// ===============================================
// (5) get middle string
// odd => d
// test => es
// function getMiddle(str) {
//     let length = str.length;
//     let mid = Math.floor(length / 2)
//     if (length % 2 == 0) {
//         console.log(str[mid - 1] + str[mid])
//     } else {
//         console.log(str[mid])
//     }
// }
// getMiddle("mohamed")
// getMiddle("test")
// ===============================================
//(6)  function take 3 params and return array
// then sum the numbers in that array


// function range(start, end, step) {
//     let arr = [];
//     if (start < end && step < 0) {
//         [start, end] = [end, start]
//     }
//     if (start > end && step > 0) {
//         [start, end] = [end, start]
//     }
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) {
//             arr.push(i);
//         }
//     } else {
//         for (let i = start; i >= end; i += step) {
//             arr.push(i);
//         }
//     }
//     return arr
// }
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(range(5, 9, 1))
// console.log(range(9, 5, 1))
// console.log(range(5, 9, -1))
// console.log(range(9, 5, -1))
// console.log(sum(range(5, 9, 1)))
// ===============================================
// (7) swap two numbers
// let x = "Hello";
// let y = "World";
// console.log(x, y)
// let empVar;
// empVar = x;
// x = y;
// y = empVar;
// console.log(x, y)
// ===============================================
// (8) input => const str = "abcdefghsw"
// output =>['a','a.b','a.b.c','a.b.c.d']
// (10)['a', 'a.b', 'a.b.c', 'a.b.c.d', 'a.b.c.d.e', 'a.b.c.d.e.f', 'a.b.c.d.e.f.g', 'a.b.c.d.e.f.g.h', 'a.b.c.d.e.f.g.h.s', 'a.b.c.d.e.f.g.h.s.w']

// const str = "abcdefghsw"
// function splitString(str) {
//     let arr = str.split('')
//     let newArr = [];
//     for (let i = 1; i <= arr.length; i++) {
//         let x = arr.slice(0, i).join('.')
//         newArr.push(x)
//     }
//     console.log(newArr)
// }
// splitString(str)


// const strTest = "mohamed"
// (7) ['m', 'm.o', 'm.o.h', 'm.o.h.a', 'm.o.h.a.m', 'm.o.h.a.m.e', 'm.o.h.a.m.e.d']
// function splitTheString(strTest) {
//     let myArr = strTest.split('')
//     let finalArr = []
//     for (let i = 1; i <= strTest.length; i++) {
//         theSlice = myArr.slice(0, i).join('.')
//         finalArr.push(theSlice)
//     }
//     console.log(finalArr)
// }
// splitTheString(strTest)
// ===============================================
// (9) mohamed hamdy => M.H
// Sam Harris => S.H
// function convert(name) {
//     let arr = name.split(" ")
//     return (arr[0][0] + "." + arr[1][0]).toUpperCase()
// }
// console.log(convert("mohamed hamdy"))
// console.log(convert("sam harris"))
// ===============================================
// (10) return the sum ok all positive numbers
// sumPositive([2, 3, -4, 10]) => 2+3+10 = 15

// function sumPositive(arr) {
//     let total = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] > 0) {
//             total += arr[i]
//         }
//     }
//     return total
// }
// console.log(sumPositive([2, 3, -4, 10]))
// console.log(sumPositive([2, -3, -4, 10]))
// console.log(sumPositive([-2, -3, -4, -10]))
// ===============================================
// (11) ["1:2","4:3","1:0","2:2"]
// x > y => add 3 points
// x < y => add 0 point
// x = y => add 1 point

// function matchScore(gameArr) {
//     let totalPoints = 0;
//     for (let i = 0; i < gameArr.length; i++) {
//         let newArr = gameArr[i].split(":")
//         if (newArr[0] > newArr[1]) {
//             totalPoints += 3
//         } else if (newArr[0] < newArr[1]) {
//             totalPoints += 1
//         }
//     }
//     return totalPoints;
// }
// console.log(matchScore(["1:2", "4:3", "1:0", "2:2"]))
// ===============================================
//(12)  find max and min and difference between them
// [3,44,65,23,87,24,90,4]

// function findDifference(arr) {
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     return [min, max, max - min]
// }
// console.log(findDifference([3, 44, 65, 23, 87, 24, 90, 4]))
// ===============================================
//(13)  احسب عدد مرات تكرار حرف فى كلمة معينة
// function strCounter(word, char) {
//     let counter = 0;
//     let arr = word.split("")
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == char) {
//             counter += 1
//         }
//     }
//     return counter;
// }
// console.log(strCounter("heeello", "e"))
// ===============================================
// (14) even or odd
// function check(num) {
//     if (num % 2 == 0) {
//         console.log("Even Number")
//     } else {
//         console.log("Odd Number")
//     }
// }
// check(9)
// ===============================================
//(15)  هتاخد مصفوفة من اكواد الحروف ونشوف لة الاكواد فيها كود حرف متحرك هنرجع الحرف ده
// الحروف المتحركة :a,e,i,o,u
// function isVowel(arr) {
//     let newArr = arr.map(function (char) {
//         if (char === 97 || char === 101 || char === 105 || char === 111 || char === 107) {
//             return String.fromCharCode(char)
//         }
//         return char
//     })
//     return newArr;
// }
// console.log(isVowel([100, 104, 111, 105, 107, 97, 99, 101]))
// // (8) [100, 104, 'o', 'i', 'k', 'a', 99, 'e']
// ===============================================
//(16)  smash the array
// هتاخد مصفوفة واحلولها ل string
// function smash(arr) {
//     // let newArr = arr.join(" ");
//     return arr.join(" ");
// }
// console.log(smash(['hello', 'world', 'from', 'JS']))
// hello world from JS
// ===============================================
//(17)  حدد عدد الحروف المتحركة الموجودة فى الكلمة
// لازم اتجاهل المسافات
// الحروف المتحركة هى [a,e,i,o,u]
// function getCount(str) {
//     let vowels = 'aeiou';
// let count = 0;
// let arr = str.replaceAll(' ', '').split('');
// for (let i = 0; i < arr.length; i++) {
//     if (vowels.includes(arr[i])) {
//         count += 1
//     }
// }
// return count;
// ==================
//     return str.replaceAll(' ', '').split('').filter((letter) => vowels.includes(letter)).length;
// }
// console.log(getCount('hello ahmed ali'))

// ===============================================
// (18) حدد اكبر رقم واصغر رقم من مجموعة ارقام فى سترينج معين
// 1 - احول السترينج ل array
// 2- احلولها لارقام عشان اقدر احدد الاكبر والاصغر

// function getNumber(numbers) {
//     let numArr = numbers.split(' ').map((n) => Number(n))
//     let highest = Math.max(...numArr);
//     let lowest = Math.min(...numArr);
//     return `${highest} ${lowest}`
// }
// console.log(getNumber('10 3 55 -9 100 109 '))
// 109 -9
// ===============================================
// (19) ناخد 45 ونرجعها 2516 ... يعنى نربع 5 بعدين نربع 4
// هنقسم الرقم الكبير ل array of numbers
//  بعدين نمسك كل رقم نربعه لوحده بعدين نرجع كله فى string واحد
// function squareDigits(num) {
//     let arrNum = num.toString().split('').map((n) => n * n).join('')
//     return arrNum;
// }
// console.log(squareDigits(458))
// 4 => 16
// 5 => 25
// 8 => 64
// 162564
// ===============================================
// (20) رتب الارقام بشكل تنازلى
// function descendingOrder(n) {
//     return Number(n.toString().split('').sort().reverse().join(''))
// }
// console.log(descendingOrder(345699182347558))
//output => 998876555443321
// ===============================================
//(21) مطلوب ارجع الحرف الاوسط لو عدد الحروف فردى او الحرفين الاوسطين لو عدد حروف زوجى
// 1 احدد عدد الحروف زوجى او فردى عن طريق باقى القسمة %

// 8 % 2 = 0 ===> (8/2)-1 = 3 & 8/2 =4
// 7 % 3 = 1  === > 7/2 = 3.5 => 3
// function getMiddle(str) {
//     return str.length % 2 === 0 ? str[(str.length / 2) - 1] + str[str.length / 2] : str[Math.floor(str.length / 2)]
// }
// console.log(getMiddle('wdhud'))
// ===============================================
// (22)
// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================

// ===============================================