const time = document.querySelector(".time");
const date_of_the_week = document.querySelector(".date-of-the-week");
const greeting = document.querySelector(".greeting");
export let times_of_day;

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
  
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(date);
  
  times_of_day = showGreeting(date);
  //console.log(times_of_day);
  setTimeout(showTime, 1000);
}
export default times_of_day;
//export default showTime();
