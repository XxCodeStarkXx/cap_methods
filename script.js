
    //charAt method
//const word = "freecodecamp"
//const firstLetter = word.charAt(0);
//console.log(firstLetter);

    //slice-slices of characters of the string

 //const word = "freecodecamp"
 // remainingLetters = word.substring(1);
 ////.log(remainingLetters);

    //to uppercase

 //const firstLetter = "freedom"
 //onst firstLetterCap = firstLetter.toLocaleUpperCase();
//console.log(firstLetterCap);

    //all strings combined to capitalize the first letter in a string.
/*
    const word = "freecOdeCamP"
    const capitalize = 
        word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();

    console.log(capitalize);    

 */

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    
    }
    console.log(capitalize("freeDom"));

    //get last letter "string" lenghth needs to be idenified in order for function to count backwards

    function lastLetter(word) {
        return word.charAt(word.length -4);
    }

    console.log(lastLetter("grape"));



    let lastlet = (words) => {

    }

    function last(fruit) {
        return fruit.charAt(fruit.length -1);
    }
    console.log(last("apple"));

    function firstLetterCap(x) {
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    }

    console.log(firstLetterCap("grEat"));

    function third (thirdLet) {
        return thirdLet.charAt(3).toUpperCase() + thirdLet.slice().toLowerCase();
    }

    console.log(third("gRass"));

