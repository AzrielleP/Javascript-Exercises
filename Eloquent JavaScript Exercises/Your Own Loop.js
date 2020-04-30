

function loop (value, test, update, body){
    if (test == true){
    return body();
    update();
    }
    else return "stop";

}

loop(3, n => n > 0, n => n - 1, console.log);