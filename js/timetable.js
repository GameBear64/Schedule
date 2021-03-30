let start = 480, hour = 40, pause = 15, lastpause = 10, lunch = 30, totalHours = 8

function time_convert(num) { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return `${hours}:${minutes == 0 ? '00' : minutes}`;         
}

let ttable = document.createElement('table');
let ttbody = document.createElement('tbody')

for (let i = 0; i < totalHours; i++) {
    let ttr = document.createElement('tr');
    let tth = document.createElement('th')
    let ttd = document.createElement('td')
    tth.appendChild(document.createTextNode(i + 1))
    ttd.appendChild(document.createTextNode(`${time_convert(start)} - ${time_convert(start += hour)}`))
    ttr.appendChild(tth)
    ttr.appendChild(ttd)

    i == 2 ? start += lunch : i + 2 == totalHours ? start += lastpause : start += pause

    ttbody.appendChild(ttr)
}

ttable.appendChild(ttbody)
document.getElementById("timetable").appendChild(ttable)
