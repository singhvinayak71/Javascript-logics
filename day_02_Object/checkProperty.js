function checkProperty() {
    let exampleObj = {};
    exampleObj.height = 100;
    exampleObj.width = 100;
 
    // Checking for existing property
    result1 = exampleObj.hasOwnProperty("height");
 
    // Checking for non-existing property
    result2 = exampleObj.hasOwnProperty("breadth");
 
    console.log(result1);
 
    console.log(result2);
}
checkProperty()