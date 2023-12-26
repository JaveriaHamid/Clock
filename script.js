let hr = document.querySelector('#hrs');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

setInterval(() => {

    // get new date for hour, minute and second
    let day = new Date();
    let hh = day.getHours(); 
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    // For hours, mins and secs rotation
    let hRotation = hh * 30 + mm/2;
    let mRotation = mm * 6;
    let sRotation = ss * 6;

    hr.style.transform = `rotateZ(${hRotation}deg)`;
    mn.style.transform = `rotateZ(${mRotation}deg)`;
    sc.style.transform = `rotateZ(${sRotation}deg)`;


    //  Digital Clock
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let dt = document.getElementById('dt');
    let mon = document.getElementById('mon');
    let yr = document.getElementById('yr');
    let days = document.getElementById('day');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // Add Zero Before Single Digit Number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var am = h >= 12 ? 'PM' : 'AM';

    // Convert 24Hrs Clock to 12Hrs Clock
    if(h > 12){
        h = h - 12;
    }

    // For sample clock
    let dates = new Date().getDate();
    let months = new Date().getMonth() + 1;
    console.log(months);
    let years = new Date().getFullYear();
    
    // Get a day name
    const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]; 
    const dy = daysOfWeek[new Date().getDay()];
    

    // Display all values
    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    dt.innerHTML = dates;
    mon.innerHTML = months;
    yr.innerHTML = years; 
    days.innerHTML = dy;
})
