function abc (){
    console.log("Hello World")
}

function print_console (cb : () => void){
    cb()
}

print_console(abc);