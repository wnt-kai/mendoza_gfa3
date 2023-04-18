function numValue(){
    var num1 = Math.ceil((Math.random() * 20));
    document.getElementById("Row AValue").innerHTML = num1;
    var num2 = Math.ceil((Math.random() * 20));
    document.getElementById("Row BValue").innerHTML = num2;
    var num3 = Math.ceil((Math.random() * 20));
    document.getElementById("Row CValue").innerHTML = num3;
    var maxNum = Math.max(num1, num2, num3);
    
    if (maxNum==num1 && maxNum==num2 && maxNum==num3){
        document.getElementById("max").innerHTML = "Row A, Row B, Row C (" + maxNum + ")";
    } else if (maxNum==num1 && maxNum==num2){
        document.getElementById("max").innerHTML = "Row A, Row B (" + maxNum + ")";
    } else if (maxNum==num2 && maxNum==num3){
        document.getElementById("max").innerHTML = "Row B, Row C (" + maxNum + ")";
    } else if (maxNum==num1 && maxNum==num3){
        document.getElementById("max").innerHTML = "Row A, Row C (" + maxNum + ")";
    } else if (maxNum==num1 || maxNum==num2 || maxNum==num3){
        if (maxNum==num1){
            document.getElementById("max").innerHTML = "Row A (" + maxNum + ")";
        } else if (maxNum==num2){
            document.getElementById("max").innerHTML = "Row B (" + maxNum + ")";
        } else if (maxNum==num3){
            document.getElementById("max").innerHTML = "Row C (" + maxNum + ")";
        }
    }
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var num1Letter = alphabet[num1-1];
    document.getElementById("letter").innerHTML = num1Letter;
    var timeTaken = num2 * num3;
    var timeInHours = Math.floor(timeTaken/60);
    var timeInMinutes = timeTaken % 60;
    if (timeInHours == 1){
        if (timeInMinutes == 1){
            document.getElementById("time").innerHTML = "(" + timeTaken + " mins): " + timeInHours + " hr " + timeInMinutes + " min";
        } else {
            document.getElementById("time").innerHTML = "(" + timeTaken + " mins): " + timeInHours + " hr " + timeInMinutes + " mins";
        }
    } else {
        if (timeInMinutes == 1){
            document.getElementById("time").innerHTML = "(" + timeTaken + " mins): " + timeInHours + " hrs " + timeInMinutes + " min";
        } else {
            document.getElementById("time").innerHTML = "(" + timeTaken + " mins): " + timeInHours + " hrs " + timeInMinutes + " mins";
        }
    }
}