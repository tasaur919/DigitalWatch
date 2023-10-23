/*12h=360deg            and 60sec=360deg
h hours=30h deg         and 1sec=360/60=6deg
1h=360/12=30deg         and s sec=6s deg

h hours=30h +m/2

60min=30deg               or 60min= 360deg
1min=30/60=1/2deg         or 1min= 360/60=6deg
m min=(1/2)m deg=m/2 deg   or m min=6m deg
*/

let hr=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

function displayTime(){
    let date=new Date();
    //geting hour,min,and sec from Date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation=30*hh + mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;
}
setInterval(displayTime,1000);
