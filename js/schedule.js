import data from './data.json' assert { type: 'json' };
let { schedule, periods } = data;
let { start, hour, pause, lastPause, lunch } = periods;

let table = document.createElement('table');

function time_convert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return `${hours}:${minutes == 0 ? '00' : minutes}`;
}

//===================doing the head=================================
let thead = document.createElement('thead');
let tr = document.createElement('tr');

for (let i = -1; i < Object.keys(schedule).length; i++) {
  let th = document.createElement('th');
  th.innerText = i == -1 ? ' / ' : Object.keys(schedule)[i];
  tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);

//===================doing the body==================================
let tbody = document.createElement('tbody');
let largestArrayLength = Object.values(schedule).reduce((maxI, el) => (el.length > maxI ? el.length : maxI), 0);

for (let n = 0; n < largestArrayLength; n++) {
  let tr = document.createElement('tr');

  for (let i = -1; i < Object.keys(schedule).length; i++) {
    let td = document.createElement('td');

    if (i == -1) {
      td.innerText = `${time_convert(start)} - ${time_convert((start += hour))}`;

      if (n == 2) {
        start += lunch;
      } else if (n == largestArrayLength - 2) {
        start += lastPause;
      } else {
        start += pause;
      }
    } else {
      td.innerHTML = Object.values(schedule)[i][n]?.replace(';', ' <br> ') || '-';
    }

    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

//================== end ==================
table.appendChild(tbody);

document.getElementById('schedule').appendChild(table);
