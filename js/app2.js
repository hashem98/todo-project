let qus = [];
function fillQuestions() {
    qus[0] = prompt("Do you have a background in technology?").toLowerCase();
    // if (qus[0] == "")
    //     qus[0] = "invalid"
    qus[1] = prompt("Are you unemployed?").toLowerCase();
    // if (qus[1] == "")
    //     qus[1] = "invalid"
    qus[2] = prompt("Are you under 35?").toLowerCase();
    // if (qus[2] == "")
    //     qus[2] = "invalid"
    return qus;
}

function displayArray(arr) {
    for (let c = 0; c < arr.length; c++) {
        console.log(arr[c]);
    }


}
function validation (arr){
    for (let c = 0; c < arr.length; c++) {
        if(arr[c]=="")
        arr[c]="invalid";
    }
}

let questions = fillQuestions();
validation(questions);
displayArray(questions);







