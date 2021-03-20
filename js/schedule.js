//this can also be an external json if you are running node.js
// let schedule2 = {
//     Понеделник : ["Математика", "Математика", "Бел", "Бел", "Физическо", "Англиски", "Англиски"],
//     Вторник : ["География", "Немски", "Немски", "Бел", "ИТ", "ИТ", "Свят и личност", "Свят и личност"],
//     Сряда : ["ИТ", "ИТ", "ИТ", "Англиски", "Англиски", "Руски", "Руски"],
//     Четвъртък : ["Бел", "Бел", "Физическо", "Физика", "Математика", "Математика", "Англиски", "ЧК"],
//     Пeтък : ["Англиски", "Англиски", "История", "История", "Руски", "Руски", "Математика", "Ф-М-В"]
// }

let schedule = {
    Monday: ["Mathematics", "Mathematics", "Bulgarian", "Bulgarian", "Physics", "English", "English"],
    Tuesday: ["Geography", "German", "German", "Bulgarian", "IT", "IT", "World and Personality", "World and Personality"],
    Wednesday: ["IT", "IT", "IT", "English", "English", "Russian", "Russian"],
    Thursday: ["Bulgarian", "Bulgarian", "Physical", "Physics", "Mathematics", "Mathematics", "English", "Classroom Hour"],
    Friday: ["English", "English", "History", "History", "Russian", "Russian", "Mathematics", "Module"]
}

let table = document.createElement('table');

//===================doing the head=================================
let thead = document.createElement('thead');
let tr = document.createElement('tr');

for (let i = -1; i < Object.keys(schedule).length; i++) {
    let th = document.createElement('th');
    i == -1 ? th.appendChild(document.createTextNode(' ')) : th.appendChild(document.createTextNode(Object.keys(schedule)[i]))
    tr.appendChild(th)
}
thead.appendChild(tr)
table.appendChild(thead)

//===================doing the body==================================
let tbody = document.createElement('tbody');
let largestArrayLength = Object.values(schedule).reduce((maxI,el) => el.length > maxI ? el.length : maxI, 0)

for (let n = 0; n < largestArrayLength; n++) {
    let tr = document.createElement('tr');

    for (let i = -1; i < Object.keys(schedule).length; i++) {
        let td = i == -1 ? document.createElement('th') : document.createElement('td');
        i == -1 ? td.appendChild(document.createTextNode(n + 1)) : td.appendChild(document.createTextNode(Object.values(schedule)[i][n] ? Object.values(schedule)[i][n] : "-"))
        tr.appendChild(td)
    }

    tbody.appendChild(tr)
}

//================== end ==================
table.appendChild(tbody)

document.getElementById("schedule").appendChild(table)