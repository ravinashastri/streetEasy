/**
 * Created by Ravina on 12/27/16.
 */

function myBtn1() {
    var a = document.getElementById("btn1");

    var id1 = setInterval(frame, 200);
    function frame() {
        a.style.setProperty("background","url(images/tick.svg) no-repeat center center, #1ed19f");
        a.style.setProperty("color","transparent");
        a.style.setProperty("border","1px solid black");
        a.disabled="true";

        return false;
    }
}


function myBtn2() {
    var b = document.getElementById("btn2");

    var id2 = setInterval(frame, 200);
    function frame() {
        b.style.setProperty("background","url(images/tick.svg) no-repeat center center, #1ed19f");
        b.style.setProperty("color","transparent");
        b.style.setProperty("border","1px solid black");
        b.disabled="true";

        return false;
    }
}

function myBtn3() {
    var c = document.getElementById("btn3");

    var id3 = setInterval(frame, 200);
    function frame() {
        c.style.setProperty("background","url(images/tick.svg) no-repeat center center, #1ed19f");
        c.style.setProperty("color","transparent");
        c.style.setProperty("border","1px solid black");
        c.disabled="true";

        return false;
    }
}

function myBtn4() {
    var d = document.getElementById("btn4");

    var id4 = setInterval(frame, 200);
    function frame() {
        d.style.setProperty("background","url(images/tick.svg) no-repeat center center, #1ed19f");
        d.style.setProperty("color","transparent");
        d.style.setProperty("border","1px solid black");
        d.disabled="true";

        return false;
    }
}

