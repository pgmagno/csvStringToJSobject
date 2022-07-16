function parseCSVStringToJSObject(string, separator, hasExtraSpaces, fileName) {
    
    /**
     * Parses a CSV String and returns a JSON object
     * @param  {String}  string    The output of the function used to read the original CSV file
     * @param  {String}  separator The character that the CSV uses to separate values (i.e. commas, semicolon etc)
     * @param  {Boolean} hasExtraSpaces   Set to TRUE if you need to use the trim() method to clean the keys and values
     * @param  {String}  fileName  A string that will be used as the single Key:[] holding an array with results
     * @return {JSON}              A JSON object  
     */
    
    const splitString = string.split("\n"); // turns string into array from the original file lines

    // Dealing with the CSV HEADERS
    const keys = splitString.shift(); // removes first element to create keys
    let splitKeys = keys.split(separator);
    if(hasExtraSpaces){
        splitKeys = splitKeys.map(key => key.trim())
    }
    
    const allRows = [] // this array will hold subarrays[rows] containing the values[each element of the subarray]
    
    splitString.forEach( result => {
        let row = result.split(separator) // splits the long string CSV line using the separator, thus creating an array that will hold each individual value
        if(hasExtraSpaces){
            row = row.map(value => value.trim()) // cleans empty spaces around the strings
        }
        if(row.length == splitKeys.length){ // if the resulting array is the same length as the keys array, then it's valid to push
            allRows.push(row);
        }        
    })
    
    //This will be the final JSON
    // It will be composed ab object containing one key of fileName and a value of type Array { fileName: [] }
    // fileName was passed as argument and it will be replaced as the only key in this Json
    // The CSV rows (turned into objects) will be pushed to the array that this Key will hold 
    const jsObject = {}
    Object.defineProperties(jsObject,{[fileName]: { //this will be the key (passed as argument) 
        value: [], //this array will hold the objects
        writable: true, // I believe this makes it possible to for the property be assignable.
        enumerable: true //setting this to True so that 'object.keys' can later be used to get the name of the first key
    }})
    
    // Creating Objects to push to the fileName key array
    allRows.forEach(row => { // an object for each row (entry of the CSV file). Each row is an array of values (the individual elements of each CSV entry line)

        const objectModel = {} // creating an empty object

        for (let i = 0; i < splitKeys.length; i++) { // use the keys array to dynamically define key/pairs       
            Object.defineProperties(objectModel, {[splitKeys[i]]:{ // Each entry of this array is a key. Between [] the name of the array entry becomes the Key
                value: row[i],  // assigning the key a value of the row 
                writable: true  // again, I believe this makes it possible to for the property be assignable.
            }})
        }
        jsObject[Object.keys(jsObject)[0]].push(objectModel) // We don't know the name of the fileName the user passed, so we use Object.keys
                                                                // entry 0 between [] (it's the only key that's why index 0) to dynamically push the objects to the array 
                                                                // which we don't have any way to know the name of
    })
    
    return jsObject
}