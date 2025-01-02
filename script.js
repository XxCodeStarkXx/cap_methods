
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


    