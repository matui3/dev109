// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var lLine = "";
    for (var line = 1; line <= pHeight; line++) {
        lLine += "<p>";
        // Use the same pattern of spacing
        for (var j = 1; j <= (pHeight - line); j++) {
            lLine += "<span style='color: white;'>" + pSymbol + "</span>"; 
        }
        // Adjust color logic for left side to match right side
        for (var k = 1; k <= line; k++) {
            if (k % 2 === 0) {
                lLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                lLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        lLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = lLine;
}


function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    // number of lines of paragraph tag
    for (var i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (var j = 1; j <= i; j++) {
            // rLine += "*"
            //Is the position even or odd so we change the color
            if (j % 2) {
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                //odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
        

    }
    // console.log(rLine);

    document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = pHeight; i > 0; i--) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (var j = 0; j < i; j++) {
            // rLine += "*"
            //Is the position even or odd so we change the color
            if (j % 2) {
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                //odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }

        }
        rLine += "</p>";
        

    }
    // console.log(rLine);

    document.getElementById("downRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var lLine = "";
    for (var line = pHeight; line > 0; line--) {
        lLine += "<p>";
        for (var j = 0; j < (pHeight - line); j++) {
            lLine += "<span style='color: white;'>" + pSymbol + "</span>"; 
        }
        // Adjust color logic for left side to match right side
        for (var k = 1; k <= line; k++) {
            if (k % 2 === 0) {
                lLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                lLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        lLine += "</p>";
    }
    document.getElementById("downLeft").innerHTML = lLine;
}
