// console.log("conect");

document.getElementById("btn").addEventListener("click", function () {
 const inpTask = document.getElementById("inp").value;
 //  console.log(inpTask);
 if (inpTask) {
  const newInput = document.getElementById("list-text");
  newInput.innerHTML = inpTask;

  // console.log(inpTask);
 }
});
