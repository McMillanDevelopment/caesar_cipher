function caesar(str, num) {
    console.log(`The intial parameters: ${str} & ${num}`) //temp

    // caesar function variables
    let charArr = [];
    let shiftedArr = [];
    let cypheredText = "";

    // create the array of unicodes
    function charCoder(str) {
        console.log(`charCoder parameter: ${str}`) //temp
        str = str.split("");
        let arr = str;
        console.log(`charCoder Initial array of the string: ${arr}`); //temp
        for(i = 0; i < arr.length; i++) {
            charArr.push(arr[i].charCodeAt(str));
        };
        console.log(`charCoder The created charArr array: ${charArr}`);
        return charArr;
    };

    // shifter function
    function shifter(arr, num) {
        console.log(`shifter function parameters: ${str}, ${num}`);
        for(i = 0; i < arr.length; i++) {
            console.log(charArr[i] + num);
            let x = charArr[i] + num;
            shiftedArr.push(String.fromCharCode(x));
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

caesar("Hello, World", 5);

module.exports = caesar