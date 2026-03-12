function consumeWithTimeout(iterator, timeoutSeconds) {
    const endTime = Date.now() + timeoutSeconds * 1000;

    let sum = 0;
    let count = 0;

    function process() {
        if (Date.now() >= endTime) {
            console.log("\nTimeout reached!");
            console.log("Total numbers:", count);
            console.log("Sum:", sum);
            console.log("Average:", count > 0 ? sum / count : 0);
            return;
        }

        const { value } = iterator.next();
        console.log("Generated value:", value);

        sum += value;
        count++;

        setTimeout(process, 500);
    }

    process();
}

module.exports = consumeWithTimeout;