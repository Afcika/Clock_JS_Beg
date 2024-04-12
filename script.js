// for the first two caracters pad them with 0; ex: 00 -->padStart(2,0)

function updateclock(){
  const now = new Date();
  let hours = now.getHours(); 
  const ap = hours >=12 ? "PM":"AM";
  hours= hours%12 || 12;
  hours =hours.toString().padStart(2,0)
  const minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const displaytime =`${hours}:${minutes}:${seconds} ${ap}`;
  document.getElementById("clock").innerText= displaytime;
}
updateclock();
setInterval(updateclock,1000)

// setInterval updates after 1 secoond