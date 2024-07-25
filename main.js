function abc() {
    console.log("Hello World");
}
function print_console(cb) {
    cb();
}
print_console(abc);
export {};
