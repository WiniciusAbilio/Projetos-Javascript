/* function abbrevName(name) {
    var abbrev = name[0].toUpperCase();
    var j;
    for (var i = 0; i < name.length; i++) {
        if (name[i] == " ") {
            j = i + 1;
            abbrev += `.${name[j].toUpperCase()}`;
        }
    }
    return abbrev;
}
console.log(abbrevName("Jorjin jjj"))


function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


function getMiddle(s) {
    var str = "";
    var j = 0;
    var tamanho = s.length;
    for (var i = 0; i < tamanho; i++) {
        if (tamanho % 2 == 0) {
            if (i == tamanho / 2) {
                j = i - 1;
                str += s[j];
                str += s[i];
            }
        } else {
            if (i == Math.floor(tamanho / 2)) {
                str += s[i];
            }
        }
    }
    return str;
}

console.log(getMiddle("middle"));


function humanReadable(seconds) {
    var hoursReadable = parseInt(seconds / 3600);
    var minutesReadable = parseInt((seconds / 60) % 60);
    var secondsReadable = parseInt(seconds % 60);
    var number;
    var partHours;
    var partMinutes;
    var partSeconds;
    if (hoursReadable < 10) {
        partHours = `0${hoursReadable}`;
    } else {
        partHours = hoursReadable;
    }
    if (minutesReadable < 10) {
        partMinutes = `0${minutesReadable}`;
    } else {
        partMinutes = minutesReadable;
    }
    if (secondsReadable < 10) {
        partSeconds = `0${secondsReadable}`;
    } else {
        partSeconds = secondsReadable;
    }
    number = `${partHours}:${partMinutes}:${partSeconds}`;
    return number;
}
console.log(humanReadable(5));

function wordSpaced(word){
    var newWord = "";
    for (var i = 0; i < word.length; i++) {
        newWord += `${word[i]} `;
    }
    return newWord;
}

console.log(wordSpaced('nha'));

function solution(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            newStr += ` ${string[i]}`;
        } else {
            newStr += string[i];
        }
    }
    return newStr;
}

console.log(solution('camelCasingTest'))


function findUniq(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let number = arr[0];
    if (number == arr[1]) {
        number = arr[arr.length - 1];
    }
    return number;
}

console.log(findUniq([4, 2, 2, 2]));
console.log(findUniq([2, 4, 2, 2]));
console.log(findUniq([2, 2, 4, 2]));
console.log(findUniq([2, 2, 2, 4]));

function likes(names) {
    let phrase;
    switch (names.length) {
        case 0:
            phrase = `no one likes this`;
            break;
        case 1:
            phrase = `${names[0]} likes this`;
            break;
        case 2:
            phrase = `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            phrase = `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        default:
            phrase = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
    return phrase;
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

var uniqueInOrder = function (iterable) {
    let uniq = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) {
            uniq.push(iterable[i]);
        }
    }
    return uniq;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));


function domainName(url) {
    let nameUrl = url.replace("https://", '').replace("http://", '').replace("www.", '').split('.')[0];
    return nameUrl;
}

console.log(domainName("http://google.com"));
console.log(domainName("https://www.k95tfcnrczs0oz96.io/img/"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("ko4zcakx.tv/img/"));

function findUniq(arr) {
    let number;
    let i = 0;
    while (number == undefined) {
        i++;
        if (arr[0] != arr[i]) {
            number = arr[i];
        }
    }
    if (arr[0] != arr[1] && arr[0] != arr[2]) {
        number = arr[0];
    }
    return number;
}

console.log(findUniq([4, 2, 2, 2]));
console.log(findUniq([2, 4, 2, 2]));
console.log(findUniq([2, 2, 4, 2]));
console.log(findUniq([2, 2, 2, 4]));

function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

console.log(validate('djI38D55'));
console.log(validate('a2.d412'));
console.log(validate('JHD5FJ53'));
console.log(validate('!fdjn345'));
console.log(validate('jfkdfj3j'));
console.log(validate('123'));
console.log(validate('abc'));
console.log(validate('Password123'));


function numbersExpandedForm(num) {
    let numberString = num.toString();
    let numbers = '';
    let arrayNumbers = [];
    let j = numberString.length;
    for (let i = 0; i < numberString.length; i++) {
        j--;
        arrayNumbers[i] = parseInt(numberString[i]) * Math.pow(10, j);
        if (num % 10 == 0 && i < numberString.length - 2) {
            numbers += `${arrayNumbers[i]} + `;
        } else if (num % 10 != 0 && i < numberString.length - 1) {
            numbers += `${arrayNumbers[i]} + `;
        } else {
            numbers += arrayNumbers[i];
        }
    }
    return numbers;
}

console.log(numbersExpandedForm(310));
console.log(numbersExpandedForm(311));
console.log(numbersExpandedForm(31311));

function solution(roman) {
    let sum = 0;
    var numbers = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
        'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900
    };
    for (var i = 0; i < roman.length; i++) {
        let num = numbers[roman[i]];
        let nextNum = numbers[roman[i + 1]] | 0;
        if (nextNum && nextNum > num) {
            sum -= num;
        }
        else {
            sum += num;
        }
    }
    return sum;
}
console.log(solution('II'));
console.log(solution('XI'));
console.log(solution('IV'));
*/
