const quoArray = [
  {
    photo: "img/nelson.jpg",
    quotation:
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    person: "- Nelson Mandela",
  },
  {
    photo: "img/einstein.jpg",
    quotation:
      '"If you want to live a happy life, tie it to a goal, not to people or things."',
    person: "- Albert Einstein",
  },
  {
    photo: "img/jobs.jpg",
    quotation: '"The only way to do great work is to love what you do."',
    person: "- Steve Jobs",
  },
  {
    photo: "img/churchill.jpg",
    quotation:
      '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    person: "- Winston Churchill",
  },
  {
    photo: "img/bezos.jpg",
    quotation:
      "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    person: "- Jeff Bezos",
  },
  {
    photo: "img/musk.jpg",
    quotation:
      '"Persistence is very important. You should not give up unless you are forced to give up."',
    person: "- Elon Musk",
  },
  {
    photo: "img/gates.jpg",
    quotation:
      '"Success is a lousy teacher. It seduces smart people into thinking they can\'t lose."',
    person: "- Bill Gates",
  },
  {
    photo: "img/buffett.jpg",
    quotation:
      '"Someone is sitting in the shade today because someone planted a tree a long time ago."',
    person: "- Warren Buffett",
  },
];

const quotation = quoArray[Math.floor(Math.random() * quoArray.length)];
const div = document.querySelector(".right-page__column__quote");
const div2 = document.querySelector(".right-page__column__quote__quotation");
const comment = document.createElement("span");
const celebrity = document.createElement("span");

div.style.background = `url(${quotation.photo}) no-repeat center`;
comment.innerText = quotation.quotation;
celebrity.innerText = quotation.person;

div2.appendChild(comment);
div2.appendChild(celebrity);

// console.log(div.style.backgroundImage);
