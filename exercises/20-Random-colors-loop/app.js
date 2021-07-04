function getColor(color = 0) {
    //make sure parameter is a number and not a string by converting the value to int:
    var color = parseInt(colo);
    switch (color) {
        case 1: return "red";
            break;
        case 2: return "yellow";
            break;
        case 3: return "blue";
            break;
        case 4: return "green";
            break;
        default: return "black";
            break;
    }
}

function getAllStudentColors() {

    //your loop here
    var students = 10
    var arr = []
    while (students > 0) {
        var random = Math.floor(Math.random() * 4) + 1;
        console.log(random)
        var newColor = getColor(random);
        students--;
        arr.push(newColor)


    }
    console.log(arr);
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

