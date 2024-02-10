window.onload = () => {
  function digitalClock() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.toLocaleString("en-IN", { month: "long" });
    let today = date.getDate();
    let dayNum = date.getDay();
    let day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ][dayNum];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // console.log(today, day);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.querySelector(
      ".clockDate"
    ).innerText = `${day}, ${today} ${month}, ${year}`;
    document.querySelector(
      ".clockTime"
    ).innerText = `${hours} : ${minutes} : ${seconds}`;

    setInterval(digitalClock, 1000);
  }
  digitalClock();
};
