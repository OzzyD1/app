const greenbtn = document.querySelector(".green");
greenbtn &&
  greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));

const bluebtn = document.querySelector(".blue");
bluebtn &&
  bluebtn.addEventListener("click", () => {
      let readMoreDiv = document.querySelector("#readmore");
      if (readMoreDiv.style.display === "block") {
        readMoreDiv.style.display = "none";
      } else {
        readMoreDiv.style.display = "block";
      }
  });

const redbtn = document.querySelector(".red");
redbtn &&
  redbtn.addEventListener("click", () => {
    let username = prompt("What's your name?");
    let welcomeUserDiv = document.querySelector("#welcomeuser");
    welcomeUserDiv.style.display = "block";
    document.querySelector("#welcomeuser").innerHTML 
      = `<p> Hello, ${username}, looking forward to hearing your playlists!. Click this message to close it.</p>`;
    welcomeUserDiv.style.cursor = "pointer";
  });

const hideDiv = document.querySelector("#welcomeuser");
hideDiv &&
  hideDiv.addEventListener("click", () => {
    hideDiv.style.display = "none"
  })

$(".delrace").click(() => confirm('Really delete this race?'));
$(".delseries").click(() => confirm('Really delete this series?'))

function getAverageFinishingPosition(series) {
  let totalPosition = 0;
  for (const race of series.races) {
    totalPosition += race.position;
  }
  const averagePosition = totalPosition / series.races.length;
  return averagePosition;
}