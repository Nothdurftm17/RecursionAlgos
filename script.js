function theGreatestCommonFactor(numOne, numTwo){
    if(numOne <= 1|| numTwo <= 1){
        return 1;
    }

    if(numOne == numTwo){
        return numOne;
    } 
    if(numOne > numTwo){
        numOne -= numTwo;
    } else{
        numTwo -= numOne;
    }
    return theGreatestCommonFactor(numOne, numTwo)
}

console.log(theGreatestCommonFactor(12,20))