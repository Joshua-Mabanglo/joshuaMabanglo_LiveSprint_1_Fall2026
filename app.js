(function () {
  "use strict()";

  const catImg = document.getElementById("cat");
  const dogImg = document.getElementById("dog");
  const cowImg = document.getElementById("cow");
  const catBtn = document.getElementById("cat-btn");
  const dogBtn = document.getElementById("dog-btn");
  const cowBtn = document.getElementById("cow-btn");

  catBtn.addEventListener("click", (event) => {
    catImg.classList.contains("hidden")
      ? catImg.classList.remove("hidden")
      : catImg.classList.add("hidden");
  });

  dogBtn.addEventListener("click", (event) => {
    dogImg.classList.contains("hidden")
      ? dogImg.classList.remove("hidden")
      : dogImg.classList.add("hidden");
  });

  cowBtn.addEventListener("click", (event) => {
    cowImg.classList.contains("hidden")
      ? cowImg.classList.remove("hidden")
      : cowImg.classList.add("hidden");
  });
})();
