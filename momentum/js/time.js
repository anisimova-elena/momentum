const time = document.querySelector('.time');
const date = document.querySelector('.date');

export function showDate () {
    const date_current = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = date_current.toLocaleDateString('eng-US', options);
    date.textContent = currentDate;
}

export function showTime () {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}


//export default showTime();