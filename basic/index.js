// console.log("conect");

document.getElementById("btn").addEventListener("click", function () {
  const ulList = document.getElementById("list-text");
  // console.log(ulList);

  const inp = document.getElementById("inp");
  const inpTask = inp.value;
  //  console.log(inpTask);
  if (inpTask) {
    // const newInput = document.getElementById("list-text");
    // newInput.innerHTML = "";

    const child = document.createElement("li");
    child.innerHTML = inpTask;

    ulList.appendChild(child);

    // console.log(inpTask);
  }
  inp.value = "";
});
