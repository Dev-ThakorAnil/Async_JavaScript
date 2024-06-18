//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function invokeAfterDelay(callback) {
    setTimeout(callback, 2000); // 2000 milliseconds = 2 second
}
function display_message() {
    console.log('Hello!');
}
invokeAfterDelay(display_message); // Invokes the sayHello function after a 1-second delay
