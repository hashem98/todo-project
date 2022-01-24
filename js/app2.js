let qus = [];
function fillQuestions() {
    qus[0] = prompt("Do you have a background in technology?").toLowerCase();
    if(qus[0]=="yes"||qus[0]=="no"||qus[0]=="y"||qus[0]=="n")
       log.console("its ok");
    else{
        while (true){
            qus[0] = prompt("your answer must be (yes or no , Y or N)").toLowerCase();
            if(qus[0]=="yes"||qus[0]=="no"||qus[0]=="y"||qus[0]=="n"){
            break; }
        } 
    
    }
    // if (qus[0] == "")
    //     qus[0] = "invalid"
    qus[1] = prompt("Are you unemployed?").toLowerCase();
    if(qus[1]=="yes"||qus[1]=="no"||qus[1]=="y"||qus[1]=="n")
        log.console("its ok");
    else{
        while (true){
            qus[1] = prompt("your answer must be (yes or no , Y or N)").toLowerCase();
            if(qus[1]=="yes"||qus[1]=="no"||qus[1]=="y"||qus[1]=="n"){
            break; }
        } 
    
    }
    // if (qus[1] == "")
    //     qus[1] = "invalid"
    qus[2] = prompt("Are you under 35?").toLowerCase();
    if(qus[2]=="yes"||qus[2]=="no"||qus[1]=="y"||qus[1]=="n")
       log.console("its ok");
    else{
        while (true){
            qus[2] = prompt("your answer must be (yes or no , Y or N)").toLowerCase();
            if(qus[2]=="yes"||qus[2]=="no"||qus[2]=="y"||qus[2]=="n"){
            break; }
        } 
    
    }
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





