
// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upperRhombus(pHeight, pColorEven, pColorOdd, pSymbol);
    // upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    
    
}

function upperRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    let upperRhombus = "";
    for (var i = 0; i < pHeight; i++) {
        upperRhombus += "<p>"

        for (var space = 0; space < pHeight - i - 1; space++) {
            upperRhombus += "&nbsp;";
        }
        
        // upper left
        for (var j = 0; j <= i; j++) {
            if (j % 2 == 0) {
                //even
                upperRhombus += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                //odd
                upperRhombus += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }



        upperRhombus += "&nbsp;&nbsp;"; // Adjust space as needed

        //Create each line on the Rhombus
        for (var j = 0; j <= i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2 == 0) {
                //even
                upperRhombus += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                //odd
                upperRhombus += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }

        }
        upperRhombus += "</p>";
        // console.log(upperRhombus);

    }
    
        
    document.getElementById("upper").innerHTML = upperRhombus;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var upperRhombus = "";
    for (var i = pHeight; i > 0; i--) {
        upperRhombus += "<p>";
        //Create each line on the Rhombus
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                upperRhombus += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                upperRhombus += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }
        upperRhombus += "</p>";
        // console.log(upperRhombus);

    }

    document.getElementById("downRight").innerHTML = upperRhombus;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    

    document.getElementById("upLeft").innerHTML = upperRhombus;
}

// function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
//     var upperRhombus = "";
//     for (var i = 0; i < pHeight; i++) {
//         upperRhombus += "<p>";

//         // Add leading spaces for the upper left rhombus
//         for (var space = 0; space < pHeight - i - 1; space++) {
//             upperRhombus += "&nbsp;"; // Add a non-breaking space
//         }

//         // Create each line on the Rhombus
//         for (var j = 0; j <= i; j++) {
//             // Is the position even or odd so we change the color
//             if (j % 2 === 0) {
//                 // even
//                 upperRhombus += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
//             } else {
//                 // odd
//                 upperRhombus += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
//             }
//         }
//         upperRhombus += "</p>";
//     }

//     document.getElementById("upLeft").innerHTML = upperRhombus;
// }


function downLeft() {

}
