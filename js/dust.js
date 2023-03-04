function getAirSituation() {
  const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=100&returnType=json&serviceKey=Uptqa8KVNsZPcyDOtDdX72W50QNAwVTUn7ZsVamR5jx3gDPBBNkfYgFocDqWySq%2FqnD%2BqyHav2MhKPMuRFkLLw%3D%3D&ver=1.0`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dust = document.querySelector(
        ".right-page__column__right span:first-child"
      );

      const value = document.querySelector(
        ".right-page__column__right span:nth-child(2)"
      );

      const comment = document.querySelector(
        ".right-page__column__right span:last-child"
      );

      const colorBasedOnDust = document.querySelector(
        ".right-page__column__right"
      );

      const dustIcon = document.createElement("i");
      const curValue = data.response.body.items[0].pm10Value;
      if (curValue > 150) {
        dustIcon.className = "fa-solid fa-skull-crossbones";
        comment.innerText =
          "The air quality is dangerous. Wear a mask and avoid spending time outside.";
        colorBasedOnDust.id = "finedust-effect";
      } else if (curValue > 80) {
        dustIcon.className = "fa-solid fa-head-side-mask";
        comment.innerText =
          "The air quality is poor. Consider wearing a mask if you need to go outside.";
        colorBasedOnDust.id = "finedust-effect";
      } else if (curValue > 30) {
        dustIcon.className = "fa-regular fa-face-smile";
        comment.innerText =
          "The air quality is moderate. If you're sensitive to air pollution, consider reducing your time outdoors.";
      } else {
        dustIcon.className = "fa-regular fa-face-grin-hearts";
        comment.innerText = "The air is clear today. Enjoy your day outside!";
      }
      dust.appendChild(dustIcon);

      value.innerText = `Fine dust:  ${curValue}㎍`;
    });
}

getAirSituation();
