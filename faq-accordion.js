var plus = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>';

var minus = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>';

var ansBox1 = document.getElementById("ans1");
var ansBox2 = document.getElementById("ans2");
var ansBox3 = document.getElementById("ans3");
var ansBox4 = document.getElementById("ans4");

var svgImg1 = document.getElementById("svg1");
var svgImg2 = document.getElementById("svg2");
var svgImg3 = document.getElementById("svg3");
var svgImg4 = document.getElementById("svg4");

var closedBlock = true;

function openContent1() {
    if (closedBlock == true) {
        ansBox1.style.transition = "0.3s"
        ansBox1.style.height = "auto"
        ansBox1.style.padding = "7px 0px 23px"
        closedBlock = false
        svgImg1.innerHTML = minus
    } else{
        ansBox1.style.height = "0px"
        ansBox1.style.padding = "0px"
        closedBlock = true
        svgImg1.innerHTML = plus
    }   
}

function openContent2() {
    if (closedBlock == true) {
        ansBox2.style.transition = "0.3s"
        ansBox2.style.height = "auto"
        ansBox2.style.padding = "7px 0px 23px"
        closedBlock = false
        svgImg2.innerHTML = minus
    } else{
        ansBox2.style.height = "0px"
        ansBox2.style.padding = "0px"
        closedBlock = true
        svgImg2.innerHTML = plus
    }   
}

function openContent3() {
    if (closedBlock == true) {
        ansBox3.style.transition = "0.3s"
        ansBox3.style.height = "auto"
        ansBox3.style.padding = "7px 0px 23px"
        closedBlock = false
        svgImg3.innerHTML = minus
    } else{
        ansBox3.style.height = "0px"
        ansBox3.style.padding = "0px"
        closedBlock = true
        svgImg3.innerHTML = plus
    }   
}

function openContent4() {
    if (closedBlock == true) {
        ansBox4.style.transition = "0.3s"
        ansBox4.style.height = "auto"
        ansBox4.style.padding = "7px 0px 23px"
        closedBlock = false
        svgImg4.innerHTML = minus
    } else{
        ansBox4.style.height = "0px"
        ansBox4.style.padding = "0px"
        closedBlock = true
        svgImg4.innerHTML = plus
    }   
}