let input = "";

    function myFunc(x) {
        if (x == 1) {
            input += 1;
        } else if (x == 2) {
            input += 2;
        } else if (x == 3) {
            input += 3;
        } else if (x == 4) {
            input += 4;
        } else if (x == 5) {
            input += 5;
        } else if (x == 6) {
            input += 6;
        } else if (x == 7) {
            input += 7;
        } else if (x == 8) {
            input += 8;
        } else if (x == 9) {
            input += 9;
        } else if (x == 0) {
            input += 0;
        } else if (x == 10) {
            input += "+";
        } else if (x == 11) {
            input += "-";
        } else if (x == 12) {
            input += "*";
        } else if (x == 13) {
            input += "/";
        }
        document.getElementById("result").value = input;
    }

    function erase() {
        document.getElementById("result").value = "";
        input = "";
    }

    function run() {
        document.getElementById("result").value = (eval(input));
    }
