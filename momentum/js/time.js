const time = document.querySelector(".time");
const date_of_the_week = document.querySelector(".date-of-the-week");
const greeting = document.querySelector(".greeting");
export let times_of_day;
let date = new Date();
let currentTime;

export function showDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("eng-US", options);
  date_of_the_week.textContent = currentDate;
}

export function showGreeting(date) {
  const hours = date.getHours();
  if (hours < 6) { greeting.textContent = 'Good night,'; return 'night';
  } else if (hours < 12) { greeting.textContent = 'Good morning,'; return 'morning';
  } else if (hours < 18) { greeting.textContent = 'Good afternoon,'; return 'afternoon';
  } else if (hours >= 18) { greeting.textContent = 'Good evening,'; return 'evening';
  }
}
export function showTime() {
  date = new Date();
  currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(date);
  
  times_of_day = showGreeting(date);
  setTimeout(showTime, 1000);
}
//export default showTime();
