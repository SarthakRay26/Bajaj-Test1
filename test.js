const testData = require('./server.js');

// Test the logic without running the server
function testProcessing() {
    console.log('Testing data processing logic...\n');
    
    // Test Example A
    const testA = ["a","1","334","4","R", "$"];
    console.log('Test A Input:', testA);
    
    // Test Example B  
    const testB = ["2","a", "y", "4", "&", "-", "*", "5","92","b"];
    console.log('Test B Input:', testB);
    
    // Test Example C
    const testC = ["A","ABcD","DOE"];
    console.log('Test C Input:', testC);
}

// For now, let's just test if the server starts
console.log('Server module loaded successfully');
