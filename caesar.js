function caesar(str, num) {
    // console.log(`The intial parameters: ${str} & ${num}`) //temp

    // caesar function variables
    let charArr = [];
    let shiftedArr = [];
    let cypheredText = "";

    // create the array of unicodes
    function charCoder(str) {
        // console.log(`charCoder parameter: ${str}`) //temp
        str = str.split("");
        let arr = str;
        // console.log(`charCoder Initial array of the string: ${arr}`); //temp
        for(i = 0; i < arr.length; i++) {
            charArr.push(arr[i].charCodeAt(str));
        };
        // console.log(`charCoder The created charArr array: ${charArr}`);
        return charArr;
    };

    // shifter function
    function shifter(arr, num) {
        // console.log(`shifter function parameters: ${str}, ${num}`);
        for(i = 0; i < arr.length; i++) {
            let x = charArr[i];
            if(num > 26) {
                num = num % 26;
                // console.log(num) //temp
            };
            if(x === 44 || x === 32 || x === 33) {
                // ignores punctuation
                x = x;
                // console.log(shiftedArr); // temp
            };
            if (x <= 122 && x >= 97) {
                if(num < 0) {
                    num = num + 26;
                };
                x = x + num;
                if(x > 122) {
                    x = x - 26;
                };
            } else if (x <= 90 && x >= 65) {
                if(num < 0) {
                    num = num + 26;
                };
                x = x + num;
                if(x > 90) {
                    x = x - 26;
                };
            };
        shiftedArr.push(String.fromCharCode(x));
        console.log(shiftedArr);
        };

        console.log(`shifter shiftedArr: ${shiftedArr}`);
        return shiftedArr;
    };

    // Function to convert shifterArr into a string;
    function arrStringer(shiftedArr) {
        cypheredText = shiftedArr.join("");
        console.log(`arrStringer cypheredText: ${cypheredText}`);
        return cypheredText;
    };

    // function calls
    charCoder(str);
    shifter(charArr, num);
    arrStringer(shiftedArr);

    // Final returned value;
    return cypheredText;
};

caesar("Keith is a bitch", 5);

module.exports = caesar