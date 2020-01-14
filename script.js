
function determineCurrentGrade(){
    var homeworkGrades =(document.getElementById("hwNums").value);
    var homeworkArray =convertArrayStringToNumber(homeworkGrades);
    var averageHomework =averageArray(homeworkArray);
    console.log(averageHomework);

    var quizGrades = (document.getElementById("quizNums").value);
    var quizArray =convertArrayStringToNumber(quizGrades);
    var averageQuiz =averageArray(quizArray);
    console.log(averageQuiz);

    var testGrades = (document.getElementById("testNums").value);
    var testArray =convertArrayStringToNumber(testGrades);
    var averageTest =averageArray(testArray);
    console.log(averageTest);

    var participationGrades=(document.getElementById("participationNums").value);
    var participationArray=convertArrayStringToNumber(participationGrades);
    var averageParticipation =averageArray(participationArray);
    console.log(averageParticipation);

    var projectGrades=(document.getElementById("projectNums").value);
    var projectArray=convertArrayStringToNumber(projectGrades);
    var averageProject=averageArray(projectArray);
    console.log(averageProject);

    var homeworkWeight=parseInt(document.getElementById("hwWeight").value);
    var quizWeight=parseInt(document.getElementById("qzWeight").value);
    var testWeight=parseInt(document.getElementById("tstWeight").value);
    var participationWeight=parseInt(document.getElementById("partWeight").value);
    var projectWeight=parseInt(document.getElementById("projectWeight").value);
    var totalWeight=  projectWeight + participationWeight + testWeight +quizWeight +homeworkWeight;
    var finalHwGrade= averageHomework*(homeworkWeight/100);
    var finalQuizGrade=averageQuiz*(quizWeight/100);
    var finalTestGrade=averageTest*(testWeight)/100;
    var finalProjectGrade=averageProject*(projectWeight/100);
    var finalParticipationGrade=averageParticipation*(participationWeight/100);
    var currentGrade= ((finalParticipationGrade+finalProjectGrade+finalTestGrade+finalQuizGrade+finalHwGrade)/totalWeight)*100;
    document.getElementById("current").innerHTML= "Your current grade is " +currentGrade + "%";
    return currentGrade;

}

function convertArrayStringToNumber(grade){
    var arr= grade.split(",");
    for(var i =0 ;i <arr.length;i++ ){
     arr[i]=parseInt(arr[i]);
 }
    return arr;
}

function averageArray(arr){
    sum=0;
    for(var i=0; i<arr.length;i++){
    sum =sum + arr[i];
    }
    var average= sum/(arr.length);
    return average;
}

function determineGradeNeeded() {

    var homeworkWeight=parseInt(document.getElementById("hwWeight").value);
    var quizWeight=parseInt(document.getElementById("qzWeight").value);
    var testWeight=parseInt(document.getElementById("tstWeight").value);
    var participationWeight=parseInt(document.getElementById("partWeight").value);
    var projectWeight=parseInt(document.getElementById("projectWeight").value);
    var finalWeight=parseInt(document.getElementById("finalWeight").value);


    var totalWeight=  projectWeight + participationWeight + testWeight +quizWeight + homeworkWeight + finalWeight;
    var current = determineCurrentGrade();
    var gradeWanted = parseInt(document.getElementById('wanted').value);
    weight = totalWeight * .10;
    console.log(totalWeight);
    var need = (gradeWanted - current * (1 - weight)) / weight;
    if(totalWeight!==100 || (isNaN(finalWeight))){
        document.getElementById("need").innerHTML = "Enter a valid final weight and make sure total weight adds up to 100.";
    }else {
        document.getElementById("need").innerHTML = "You will need a score of " + need + "% " + "to get " + gradeWanted + "% overall";

    }
}
function reset(){
    document.getElementById("current").innerHTML = "";
    document.getElementById("need").innerHTML = "";
    document.getElementById("wanted").value ="";
    document.getElementById("finalWeight").value= "";
}