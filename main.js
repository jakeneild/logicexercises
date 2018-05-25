/*var piggyBank = {
    quarters: 10,
    nickels: 20,
    dimes: 25,
    pennies: 50
}

var dollarAmount = piggyBank.quarters*.25 + piggyBank.nickels*.05 + piggyBank.dimes*.1 + piggyBank.pennies*.01;
console.log("The dollar amount is " + dollarAmount);*/

/*var newBank = {
    quarters: 0,
    nickels: 0,
    dimes: 0,
    pennies: 0
}

function makeCoins(cash){
    while(cash > 0){
        if(cash > .24){
            newBank.quarters += 1;
            cash -= .25;
        } else if(cash > .09){
            newBank.dimes += 1;
            cash -= .1;
        } else if(cash > .04) {
            newBank.nickels += 1;
            cash -= .05;
        } else {
            newBank.pennies += 1;
            cash -= .01;
        }
    }
}

makeCoins(.17);
console.log(newBank);*/

/*const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
var grades = [];

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;

for(let i = 0; i < scores.length; i ++){
    if(scores[i] > 89){
        grades[i] = "A";
        a++;
    } else if(scores[i] >79){
        grades[i] = "B"; 
        b++;
    } else if(scores[i] > 69){
        grades[i] = "C";
        c++;
    } else if(scores[i] > 59){
        grades[i] = "D";
        d++;
    } else {
        grades[i] = "F";
        f++;
    }
}
scores.sort();

console.log("There are " + a + " a's, " + b + " b's, " + c + " c's, " + d + " d's, and " + f + " f's.");
console.log(`The highest grade is ${scores[0]}, and the lowest grade is ${scores[scores.length - 1]}`);

var modeGrade = "a";
var modeGradeNum = a;

if(b > a){
    modeGrade = "b";
    modeGradeNum = b;
}
if(c > modeGradeNum){
    modeGrade = "c";
    modeGradeNum = c;
} 
if(d > modeGradeNum){
    modeGrade = "d";
    modeGradeNum = d;
}
if(f > modeGradeNum){
    modeGrade = "f";
}

console.log("The most common grade is " + modeGrade);

modeGrade = "a";
modeGradeNum = a;

if(b < a){
    modeGrade = "b";
    modeGradeNum = b;
}
if(c < modeGradeNum){
    modeGrade = "c";
    modeGradeNum = c;
} 
if(d < modeGradeNum){
    modeGrade = "d";
    modeGradeNum = d;
}
if(f < modeGradeNum){
    modeGrade = "f";
}

console.log("The least common grade is " + modeGrade);*/

/*console.log("testing");

var a = 20;
console.log(a);

var c = 20;

console.log(a + c);

var cat = "cat";
var dog = "dog";

console.log(cat + dog);
var d = "jakob and"
var e = " britanyc"

var input = document.createElement("input");
input.type = "text";
document.querySelector("body").appendChild(input);

var button = document.createElement("button");
var newText = document.createTextNode("Submit");
button.appendChild(newText);
document.querySelector("body").appendChild(button);

function addText(){
    var stuff = document.querySelector("input").value;
    var p = document.createElement("p");
    var t = document.createTextNode(stuff);
    p.appendChild(t);
    document.querySelector("body").appendChild(p);
}

button.addEventListener("click", addText);



var f = " forever"

console.log(d + e +f)

var paragraph = document.createElement("p");
var text = document.createTextNode(f);
paragraph.appendChild(text);
document.querySelector("body").appendChild(paragraph);*/


