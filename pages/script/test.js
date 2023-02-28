
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

var allText;
var values;
var angle = [];
allHigh = 0;
width = 0;
long = 0;
d = 0;
var calculatedValues = [];
var volumeValues = [];



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

                angle.push(values.angle.angle1);
                angle.push(values.angle.angle2);
                angle.push(values.angle.angle3);
                allHigh = values.high;
                width = values.width;
                long = values.long;
                d = values.d;
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

                console.log("data1: "+data1)
                console.log("data2: "+data2)
                console.log("data3: "+data3)
                console.log("data4: "+data4)
                console.log("data5: "+data5)
                console.log("data6: "+data6)
                console.log("data7: "+data7)
                console.log("data8: "+data8)
                console.log("data9: "+data9)
                console.log("data10: "+data10)
                console.log("data11: "+data11)
                console.log("data12: "+data12)
                console.log("angle: "+angle)
                console.log("high: "+allHigh)
                console.log("width: "+width)
                console.log("long: "+long)
                console.log("d: "+d)

                shape = 0;

                if(d !== 0){
                    shape = 1;
                }
                else{
                    shape = 0;
                }

                volumeValues = [];
                sum = 0;
                calculatedValues = [];

                volumeValues.push(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);
                
                if(shape === 0){
                    console.log("squareVolume ")
                    for (var i = 0; i < volumeValues.length; i++) {
                        var calculatedValue = allHigh - (volumeValues[i] * Math.sin(angle[i%3] * Math.PI / 180));
                        calculatedValues.push(calculatedValue);
                        }
                        /*chart.data.datasets[0].data = [
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
                        chart.update();*/
                        
                    for (var j = 0; j < calculatedValues.length; j++) {
                        if( j == 4 || j == 7 || j == 10 ){
                        sum += 0;
                        }
                        else{
                        sum += calculatedValues[j]*width*long/9;
                        }
                    }
                    document.getElementById("result").innerHTML = "<b>Output Volume:</b> "+sum.toFixed( 3 );
                }

                if(shape === 1){
                    console.log("cylVolume ")
                    for (var i = 0; i < volumeValues.length; i++) {
                        var calculatedValue = allHigh - (volumeValues[i] * Math.sin(angle[i%3] * Math.PI / 180));
                        calculatedValues.push(calculatedValue);
                        }
                        /*chart.data.datasets[0].data = [
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
                        chart.update();*/
            
                    for (var j = 0; j < calculatedValues.length; j++) {
                        if( j == 4 || j == 7 || j == 10 ){
                            sum += 0;
                        }
                        else{
                            sum += calculatedValues[j]*(d/6)*(d/6)*Math.PI;
                        }
                    }
                    document.getElementById("result").innerHTML = "<b>Output Volume:</b> "+sum.toFixed( 3 );
                }
            }
                        }
                    };
                    rawFile.send(null);
}

