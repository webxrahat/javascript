const inputData = document.getElementById("inp-field");
const terbtn = document.getElementById("add-btn");

terbtn.addEventListener("click", function () {
  console.log(inte);
});

inputData.addEventListener("blur", function () {
  const inte = inputData.innerText;
  console.log(inte);
});
