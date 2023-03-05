const divs = document.querySelectorAll(
  ".right-page__column__time-management__table__row__hour div:first-child ~ div"
);

const totalSpan = document.querySelector(
  ".right-page__column__time-management__total span"
);

const clickedlist = [];

let totalTime = 0;

function clickedTime(event) {
  const div = event.target;
  const CLICKED = "clicked-effect";
  if (div.classList.contains(CLICKED)) {
    div.classList.remove(CLICKED);
    clickedlist.pop(div);
  } else {
    div.classList.add(CLICKED);
    clickedlist.push(div);
  }
  console.dir(clickedlist);

  const span = document.querySelector(
    ".right-page__column__time-management__total span"
  );

  totalTime = clickedlist.length * 10;
  let hour;
  let minute;
  if (totalTime >= 60) {
    hour = Math.floor(totalTime / 60);
    minute = totalTime % 60;
    span.innerText = `Total time : ${hour}h ${minute}m`;
  } else {
    span.innerText = `Total time : ${totalTime}m`;
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", clickedTime);
}
