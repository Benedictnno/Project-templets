const btn = document.querySelector(".btn");

function debounce(fn) {
  let timeOutId;
  return () => {
    console.log(timeOutId);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => fn(), 2000);
  };
}

btn.addEventListener(
  "click",
  debounce(() => {
    console.log("you clicked me ");
  })
);
