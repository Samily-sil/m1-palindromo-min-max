function isPalindrome (str) {
    let newOne = str.toLowerCase().replaceAll(" ","");
    let strReverse = "";

    for (let i = newOne.length - 1; i >= 0; i--) {
        strReverse += newOne[i]
    }
    if (newOne === strReverse) {
        return true
    }
    return false;
}

function arrayMaxMin (arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        
    } 
       return [min, max]
}
