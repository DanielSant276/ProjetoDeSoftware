function removeDuplicates(arr1, arr2) {
    
    var arr = arr1.concat(arr2) 

    for(var i=0; i<arr.length; ++i) { 
        for(var j=i+1; j<arr.length; ++j) { 
            if(arr[i] === arr[j]) {
                arr.splice(j, 1); 
            }
        }
    }
    console.log(arr);
    return arr;
}

module.exports = removeDuplicates;