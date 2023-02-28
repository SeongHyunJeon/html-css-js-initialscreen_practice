const today = document.querySelector(".right-page__column__left__today span");
const dDayInput = document.querySelector(
  ".right-page__column__left__d-day input"
);
const dDaySpan = document.querySelector(
  ".right-page__column__left__d-day span"
);

const DEADLINE_KEY = "deadline";

const dateInfo = {
  getToday: function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    today.innerText = `${year}-${month}-${day}`;
  },

  getDeadline: function () {
    dDayInput.classList.add(HIDDEN_CLASSNAME);
    const setDay = dDayInput.value;
    localStorage.setItem(DEADLINE_KEY, setDay);
    dateInfo.paintDeadline(setDay);
  },

  paintDeadline: function (setDay) {
    const dDay = new Date(setDay);
    const curDay = new Date(today.innerText);

    const diffInMs = dDay.getTime() - curDay.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    console.log(today.innerText);
    dDayInput.classList.add("hidden");
    dDaySpan.id = "deadline-effect";

    if (diffInDays < 0) {
      dDaySpan.innerText = `D+${Math.abs(diffInDays)}`;
    } else if (diffInDays === 0) {
      dDaySpan.innerText = "D-Day";
    } else {
      dDaySpan.innerText = `D-${diffInDays}`;
    }
  },
};

dateInfo.getToday();
const savedDeadline = localStorage.getItem(DEADLINE_KEY);

if (savedDeadline === null) {
  dDayInput.classList.remove(HIDDEN_CLASSNAME);
  dDayInput.addEventListener("input", dateInfo.getDeadline);
} else {
  dateInfo.paintDeadline(savedDeadline);
}
