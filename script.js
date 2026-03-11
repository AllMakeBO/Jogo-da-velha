let Jog = "X";

let busysqr1 = 0;
let busysqr2 = 0;
let busysqr3 = 0;
let busysqr4 = 0;
let busysqr5 = 0;
let busysqr6 = 0;
let busysqr7 = 0;
let busysqr8 = 0;
let busysqr9 = 0;

const sq1gm = document.getElementById("sq1");
const sq2gm = document.getElementById("sq2");
const sq3gm = document.getElementById("sq3");
const sq4gm = document.getElementById("sq4");
const sq5gm = document.getElementById("sq5");
const sq6gm = document.getElementById("sq6");
const sq7gm = document.getElementById("sq7");
const sq8gm = document.getElementById("sq8");
const sq9gm = document.getElementById("sq9");

function switchplayer(){
    if(Jog === "X"){
        Jog = "O";
    } else{
        Jog = "X";
        }
}

function velha(){
    if(busysqr1 !== 0 && busysqr2 !== 0 && busysqr3 !== 0 && busysqr4 !== 0 && busysqr5 !== 0 && busysqr6 !== 0 && busysqr7 !== 0 && busysqr8 !== 0 && busysqr9){
        alert('Empatado "Velha"!');
        reiniciarPagina();
    }
}

function testwinX(){
    if(busysqr1 !== 0 && busysqr1 === busysqr2 && busysqr3 === busysqr1){
        if(busysqr1 === 1){
            alert('O jogador "X" venceu!');
        }
    } else{
        if(busysqr4 !== 0 && busysqr4 === busysqr5 && busysqr6 === busysqr4){
            if(busysqr4 === 1){
                alert('O jogador "X" venceu!');
            }
        } else{
            if(busysqr7 !== 0 && busysqr7 === busysqr8 && busysqr9 === busysqr7){
                if(busysqr7 === 1){
                    alert('O jogador "X" venceu!');
                }
            } else{
                if(busysqr1 !== 0 && busysqr1 === busysqr4 && busysqr7 === busysqr1){
                    if(busysqr1 === 1){
                        alert('O jogador "X" venceu!');
                    }
                } else{
                    if(busysqr2 !== 0 && busysqr2 === busysqr5 && busysqr8 === busysqr2){
                        if(busysqr2 === 1){
                            alert('O jogador "X" venceu!');
                        }
                    } else{
                        if(busysqr3 !== 0 && busysqr3 === busysqr6 && busysqr9 === busysqr3){
                            if(busysqr3 === 1){
                                alert('O jogador "X" venceu!');
                            }
                        } else{
                            if(busysqr1 !== 0 && busysqr1 === busysqr5 && busysqr9 === busysqr1){
                                if(busysqr1 === 1){
                                    alert('O jogador "X" venceu!');
                                }
                            } else{
                                if(busysqr3 !== 0 && busysqr3 === busysqr5 && busysqr7 === busysqr3){
                                    if(busysqr3 === 1){
                                        alert('O jogador "X" venceu!');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function testwinY(){
    if(busysqr1 !== 0 && busysqr1 === busysqr2 && busysqr3 === busysqr1){
        if(busysqr1 === 2){
            alert('O jogador "O" venceu!');
        }
    } else{
        if(busysqr4 !== 0 && busysqr4 === busysqr5 && busysqr6 === busysqr4){
            if(busysqr4 === 2){
                alert('O jogador "O" venceu!');
            }
        } else{
            if(busysqr7 !== 0 && busysqr7 === busysqr8 && busysqr9 === busysqr7){
                if(busysqr7 === 2){
                    alert('O jogador "O" venceu!');
                }
            } else{
                if(busysqr1 !== 0 && busysqr1 === busysqr4 && busysqr7 === busysqr1){
                    if(busysqr1 === 2){
                        alert('O jogador "O" venceu!');
                    }
                } else{
                    if(busysqr2 !== 0 && busysqr2 === busysqr5 && busysqr8 === busysqr2){
                        if(busysqr2 === 2){
                            alert('O jogador "O" venceu!');
                        }
                    } else{
                        if(busysqr3 !== 0 && busysqr3 === busysqr6 && busysqr9 === busysqr3){
                            if(busysqr3 === 2){
                                alert('O jogador "O" venceu!');
                            }
                        } else{
                            if(busysqr1 !== 0 && busysqr1 === busysqr5 && busysqr9 === busysqr1){
                                if(busysqr1 === 2){
                                    alert('O jogador "O" venceu!');
                                }
                            } else{
                                if(busysqr3 !== 0 && busysqr3 === busysqr5 && busysqr7 === busysqr3){
                                    if(busysqr3 === 2){
                                        alert('O jogador "O" venceu!');
                                    }
                                } 
                            }
                        }
                    }
                }
            }
        }
    }
}

sq1gm.addEventListener("click", function() {

    if(busysqr1 === 0){
        document.getElementById("mark1").innerText = Jog;

        if(Jog === "X"){
            busysqr1 = 1;
        }else{
            busysqr1 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq2gm.addEventListener("click", function() {

    if(busysqr2 === 0){
        document.getElementById("mark2").innerText = Jog;

        if(Jog === "X"){
            busysqr2 = 1;
        }else{
            busysqr2 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq3gm.addEventListener("click", function() {

    if(busysqr3 === 0){
        document.getElementById("mark3").innerText = Jog;

        if(Jog === "X"){
            busysqr3 = 1;
        }else{
            busysqr3 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq4gm.addEventListener("click", function() {

    if(busysqr4 === 0){
        document.getElementById("mark4").innerText = Jog;

        if(Jog === "X"){
            busysqr4 = 1;
        }else{
            busysqr4 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq5gm.addEventListener("click", function() {

    if(busysqr5 === 0){
        document.getElementById("mark5").innerText = Jog;

        if(Jog === "X"){
            busysqr5 = 1;
        }else{
            busysqr5 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq6gm.addEventListener("click", function() {

    if(busysqr6 === 0){
        document.getElementById("mark6").innerText = Jog;

        if(Jog === "X"){
            busysqr6 = 1;
        }else{
            busysqr6 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq7gm.addEventListener("click", function() {

    if(busysqr7 === 0){
        document.getElementById("mark7").innerText = Jog;

        if(Jog === "X"){
            busysqr7 = 1;
        }else{
            busysqr7 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq8gm.addEventListener("click", function() {

    if(busysqr8 === 0){
        document.getElementById("mark8").innerText = Jog;

        if(Jog === "X"){
            busysqr8 = 1;
        }else{
            busysqr8 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

sq9gm.addEventListener("click", function() {

    if(busysqr9 === 0){
        document.getElementById("mark9").innerText = Jog;

        if(Jog === "X"){
            busysqr9 = 1;
        }else{
            busysqr9 = 2;
        }

        switchplayer();
        testwinY();
        testwinX();
        velha()
    }
});

function reiniciarPagina() {
    location.reload(); // Recarrega a página atual
}