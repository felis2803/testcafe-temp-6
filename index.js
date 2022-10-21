const createTestCafe = require('testcafe');

async function run () {
    const testcafe = await createTestCafe('localhost', 1337, 1338);
    
    const failedCount = await testcafe
        .createRunner()
        .src(['./legacy.test.js'])
        .browsers(['chrome'])
        .run();
    
    console.log('Tests failed: ' + failedCount);
    await testcafe.close();

    process.exit(0);
}

run();
