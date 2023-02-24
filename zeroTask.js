const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const regExp =  /^[0-9a-zA-Z]*$/
let arr;
function sortingData(choice, arr) {
    arr = arr.filter(x=>x.match(regExp))
    switch (choice) {
        case '1':
            arr = arr.filter(value => !Number(value))
            const alphabeticallySort = arr.sort();
            console.log(alphabeticallySort);
            sortInput();
            break;
        case '2':
            arr = arr.filter((value) => Number(value)).sort((a, b) => a - b)
            console.log(arr);
            sortInput();
            break;
        case '3':
            arr = arr.filter((value) => Number(value)).sort((a, b) => b - a);
            console.log(arr);
            sortInput();
            break;
        case '4':
            arr = arr.filter((value) => !Number(value) && value!=='0');
            const lengthSort = arr.sort((a, b) => a.length - b.length);
            console.log(lengthSort);
            sortInput();
            break;
        case '5':
            arr = arr.filter(value => !Number(value) && value!=='0')
            const uniqueWords = [...new Set(arr)];
            console.log(uniqueWords);
            sortInput();
            break;
        case '6':
            const uniqueValues = [...new Set(arr)];
            console.log(uniqueValues);
            sortInput();
            break;
        case 'exit':
            rl.close();
            break;
        default:
            console.log('Invalid choice');
            sortInput();
            break;
    }
}

function sortInput() {
    rl.question('Enter a few words or numbers separated by a space: ', (input) => {
        arr = input.trim().split(' ');
        rl.question(`What would you like to do with ${arr}? 
1. Sort words alphabetically
2. Show numbers from lesser to greater
3. Show numbers from bigger to smaller
4. Display words in ascending order by number of letters in the word
5. Show only unique words
6. Display only unique values from the set of words and numbers entered by the user
Enter 'exit' to quit.
`, (choice) => {
            sortingData(choice, arr)
        });
    });
}

sortInput();

