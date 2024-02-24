//click to count
let num = 0;

let counter = document.getElementById("counter");

function clickToCount() {
  num++;
  counter.innerHTML = num;
  if (num == 5) {
  alert("Time to focus");
}
}

//music


