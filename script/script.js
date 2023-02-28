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

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                console.log("readfile 1")
                var allText = rawFile.responseText;
                console.log(allText)
                var values = JSON.parse(allText);
                console.log(values)
                chart.data.datasets[0].data = [values.data1, values.data2, values.data3, values.data4, values.data5, values.data6, values.data7, values.data8, values.data9, values.data10, values.data11, values.data12];
                chart.update();
                document.getElementById("result").innerHTML = allText;
            }
                        }
                    };
                    rawFile.send(null);
}