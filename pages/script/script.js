
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getMode && getMode === "close"){
    body.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode","dark");
    }
    else{
        localStorage.setItem("mode","light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status","open");
    }
    else{
        localStorage.setItem("status","close");
    }
});

var allHigh = 0;
var width = 0;
var long = 0;

var d=0;
var highCyl = 0;

var angle = [];
var Astatus = 0;
var angles;
var shapes;
var shape = 0;
var volumeValues = [];
var calculatedValues = [];
var sum = 0;
var allText;
var values;

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                console.log("readfile 1")
                allText = rawFile.responseText;
                console.log(allText)
                values = JSON.parse(allText);
                console.log(values)
                document.getElementById("result").innerHTML = "Output Volume : ";
            }
                        }
                    };
                    rawFile.send(null);
}

function toggleFields() {
    const select = document.getElementById('shape');
    const message = document.getElementById('squa');
    const number = document.getElementById('cyli');
    console.log(select.value)
    if (select.value === 'square') {
      message.style.display = 'block';
      number.style.display = 'none';
    } else if (select.value === 'cyl') {
      message.style.display = 'none';
      number.style.display = 'block';
    } else {
      message.style.display = 'none';
      number.style.display = 'none';
    }
  }

  function updateAngles(){
    angles = document.getElementById("angles").value;
    Astatus = 0;
    if(angles === "opt-1"){
        Astatus = 1;
    }
    if(angles === "opt-2"){
        Astatus = 2;
    }
    if(angles === "opt-3"){
        Astatus = 3;
    }
    console.log(Astatus)
}

function updateShape(){
    shapes = document.getElementById("shape").value;
    if(shapes === "square"){
        shape = 0;
    }
    if(shapes === "cyl"){
        shape = 1;
    }
    console.log(shape)
}

function updateValues() {
    allHigh = document.getElementById("allHigh").value;
    width = document.getElementById("width").value;
    long = document.getElementById("long").value;
    console.log(allHigh+width+long)
}

function updateCylValues() {
    highCyl = document.getElementById("highCyl").value;
    d = document.getElementById("d").value;
    console.log(highCyl+d)
}

function calculateVolume() {
    console.log("-cal  START-")
    console.log(values)
    console.log(allHigh)
    console.log(width)
    console.log(long)
    console.log(Astatus)
    console.log("-cal  check-")
    angle = [];
    if(Astatus === 1){
        angle.push(45,90,135);
    }
    if(Astatus === 2){
        angle.push(60,90,120);
    }
    if(Astatus === 3){
        angle.push(70,90,110);
    }
    console.log(angle)
    data1 = values.data1;
    data2 = values.data2;
    data3 = values.data3;
    data4 = values.data4;
    data5 = values.data5;
    data6 = values.data6;
    data7 = values.data7;
    data8 = values.data8;
    data9 = values.data9;
    data10 = values.data10;
    data11 = values.data11;
    data12 = values.data12;

    console.log("data12 :"+data12)

    volumeValues = [];
    sum = 0;
    calculatedValues = [];
    console.log("shape :"+shape)
    volumeValues.push(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);


    if(shape === 0){
        console.log("squareVolume ")
        for (var i = 0; i < volumeValues.length; i++) {
            var calculatedValue = allHigh - (volumeValues[i] * Math.sin(angle[i%3] * Math.PI / 180));
            calculatedValues.push(calculatedValue);
            }
            chart.data.datasets[0].data = [
                calculatedValues[0], 
                calculatedValues[1], 
                calculatedValues[2], 
                calculatedValues[3], 
                calculatedValues[4], 
                calculatedValues[5], 
                calculatedValues[6], 
                calculatedValues[7], 
                calculatedValues[8], 
                calculatedValues[9], 
                calculatedValues[10], 
                calculatedValues[11]
            ];
            chart.update();
            
        for (var j = 0; j < calculatedValues.length; j++) {
            if( j == 4 || j == 7 || j == 10 ){
            sum += 0;
            }
            else{
            sum += calculatedValues[j]*width*long/9;
            }
        }
        document.getElementById("result").innerHTML = "<b>Output Volume:</b> "+sum.toFixed( 3 )+" cubic centimeter.<br>"+"<b>Width:</b> "+width+" centimeter.<br>"+"<b>Long:</b> "+long+" centimeter.<br>"+"<b>All high:</b> "+allHigh+" centimeter.";
    }

    if(shape === 1){
        console.log("cylVolume ")
        for (var i = 0; i < volumeValues.length; i++) {
            var calculatedValue = highCyl - (volumeValues[i] * Math.sin(angle[i%3] * Math.PI / 180));
            calculatedValues.push(calculatedValue);
            }
            chart.data.datasets[0].data = [
                calculatedValues[0], 
                calculatedValues[1], 
                calculatedValues[2], 
                calculatedValues[3], 
                calculatedValues[4], 
                calculatedValues[5], 
                calculatedValues[6], 
                calculatedValues[7], 
                calculatedValues[8], 
                calculatedValues[9], 
                calculatedValues[10], 
                calculatedValues[11]
            ];
            chart.update();

        for (var j = 0; j < calculatedValues.length; j++) {
            if( j == 4 || j == 7 || j == 10 ){
                sum += 0;
            }
            else{
                sum += calculatedValues[j]*(d/6)*(d/6)*Math.PI;
            }
        }
        document.getElementById("result").innerHTML = "<b>Output Volume:</b> "+sum.toFixed( 3 )+" cubic centimeter<br>"+"<b>All high:</b> "+highCyl+" centimeter.<br>"+"<b>Diameter:</b> "+d+" centimeter.";
    }
}