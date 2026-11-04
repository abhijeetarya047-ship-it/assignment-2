// ==========================================
// Assignment 2: String and Array Problem-Solving Toolkit
// ==========================================

// 1. Reverse a string without using reverse()
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 2. Check whether a string is a palindrome
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let len = cleanStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanStr[i] !== cleanStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 3. Count vowels and consonants in a string
function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    let cleanStr = str.toLowerCase();
    const vowels = "aeiou";

    for (let char of cleanStr) {
        if (char >= "a" && char <= "z") {
            if (vowels.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }
    return { vowels: vowelsCount, consonants: consonantsCount };
}

// 4. Find the second-largest distinct number in an array
function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

// 5. Remove duplicate elements from an array without using Set
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}

// 6. Find the sum of all even numbers in an array
function sumOfEvens(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// 7. Find the frequency of a given element in an array
function findFrequency(arr, element) {
    let count = 0;
    for (let item of arr) {
        if (item === element) {
            count++;
        }
    }
    return count;
}

// 8. Check whether two strings are anagrams
function isAnagram(str1, str2) {
    let cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
    let cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (cleanStr1.length !== cleanStr2.length) return false;

    let sorted1 = cleanStr1.split("").sort().join("");
    let sorted2 = cleanStr2.split("").sort().join("");

    return sorted1 === sorted2;
}

// 9. Move all zeros to the end of an array while maintaining order
function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}

// ==========================================
// Test Cases (Sample verification)
// ==========================================
console.log("Task 1:", reverseString("hello")); // Expected: "olleh"
console.log("Task 2:", isPalindrome("madam")); // Expected: true
console.log("Task 3:", countVowelsAndConsonants("Hello World")); // Expected: { vowels: 3, consonants: 7 }
console.log("Task 4:", secondLargest([10, 5, 20, 8, 20])); // Expected: 10
console.log("Task 5:", removeDuplicates([1, 2, 2, 3, 1])); // Expected: [1, 2, 3]
console.log("Task 6:", sumOfEvens([1, 2, 3, 4, 5, 6])); // Expected: 12
console.log("Task 7:", findFrequency([1, 2, 3, 2, 4, 2], 2)); // Expected: 3
console.log("Task 8:", isAnagram("listen", "silent")); // Expected: true
console.log("Task 9:", moveZeros([0, 1, 0, 3, 12])); // Expected: [1, 3, 12, 0, 0]