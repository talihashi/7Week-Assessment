function addToZero (arr) {
    for (let i=0; i<arr.length; i++) {
        let numCheck = arr[i]
        for (let k=0; k < arr.length; k++) {
            let numCompare = arr[k]
            
            if(numCheck + numCompare === 0) {
                return true
            }
        }
    }
    return false
}
//Runtime O(n^2)

function hasUniqueChars (str) {
    let tester = ""
    if (tester.includes(str[i])) {
        return false
    } else {
        tester += str[i]
    }
    
    return true
}
//Runtime O(n^2)

function isPangram (str) {
    let strArr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split()
    
    for (let i=0; i<alphabet.length; i++) {
        if(strArr.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}
//Runtime O(n)

function findLongestWord (arr) {
    let maxLength = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length
        } 
        return maxLength
    }
}
//Runtime O(n)