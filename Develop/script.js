var plannerDay = moment().format("MMMM Do YYYY, h:mm:ss a");
var currentTime = moment().format("HH:00");

var timeTable = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
];
$("#currentDay").append(plannerDay);
showPlans();


for (i = 0; i < timeTable.length; i++) {
  if (currentTime > timeTable) {
    console.log("past");
  }
  if (currentTime == timeTable) {
    console.log("present");
  }
  if (currentTime < timeTable) {
    console.log("future");
  }
}

$("#save1").on("click", function () {
  var myContent = document.getElementById("plan1").value;
  localStorage.setItem("plan1", plan1.value);
  console.log(myContent);
});

$("#save2").on("click", function () {
  var myContent = document.getElementById("plan2").value;
  localStorage.setItem("plan2", plan2.value);
  console.log(myContent);
});

$("#save3").on("click", function () {
  var myContent = document.getElementById("plan3").value;
  localStorage.setItem("plan3", plan3.value);
  console.log(myContent);
});

$("#save4").on("click", function () {
  var myContent = document.getElementById("plan4").value;
  localStorage.setItem("plan4", plan4.value);
  console.log(myContent);
});
$("#save5").on("click", function () {
  var myContent = document.getElementById("plan5").value;
  localStorage.setItem("plan5", plan5.value);
  console.log(myContent);
});
$("#save6").on("click", function () {
  var myContent = document.getElementById("plan6").value;
  localStorage.setItem("plan6", plan6.value);
  console.log(myContent);
});
$("#save7").on("click", function () {
  var myContent = document.getElementById("plan7").value;
  localStorage.setItem("plan7", plan7.value);
  console.log(myContent);
});
$("#save8").on("click", function () {
  var myContent = document.getElementById("plan8").value;
  localStorage.setItem("plan8", plan8.value);
  console.log(myContent);
});
$("#save9").on("click", function () {
  var myContent = document.getElementById("plan9").value;
  localStorage.setItem("plan9", plan9.value);
  console.log(myContent);
});
$("#save10").on("click", function () {
  var myContent = document.getElementById("plan10").value;
  localStorage.setItem("plan10", plan10.value);
  console.log(myContent);
});
function showPlans() {
  var savedContent = localStorage.getItem("plan1");
  var savedContent2 = localStorage.getItem("plan2");
  var savedContent3 = localStorage.getItem("plan3");
  var savedContent4 = localStorage.getItem("plan4");
  var savedContent5 = localStorage.getItem("plan5");
  var savedContent6 = localStorage.getItem("plan6");
  var savedContent7 = localStorage.getItem("plan7");
  var savedContent8 = localStorage.getItem("plan8");
  var savedContent9 = localStorage.getItem("plan9");
  var savedContent10 = localStorage.getItem("plan10");
  document.getElementById("plan1").value = savedContent;
  document.getElementById('plan2').value = savedContent2;
  document.getElementById("plan3").value = savedContent3;
  document.getElementById("plan4").value = savedContent4;
  document.getElementById("plan5").value = savedContent5;
  document.getElementById("plan6").value = savedContent6;
  document.getElementById("plan7").value = savedContent7;
  document.getElementById("plan8").value = savedContent8;
  document.getElementById("plan9").value = savedContent9;
  document.getElementById("plan10").value = savedContent10;
  console.log(savedContent);
}

