// key = 1c2225137de64aa3bbc468c6b970a624


// buss https://api.sl.se/api2/realtimedeparturesV4.json?key=1c2225137de64aa3bbc468c6b970a624&siteid=7000&timewindow=60

// tåg https://api.sl.se/api2/realtimedeparturesV4.json?key=1c2225137de64aa3bbc468c6b970a624&siteid=7006&timewindow=60


fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=1c2225137de64aa3bbc468c6b970a624&siteid=7000&timewindow=20')
.then(res => res.json())
.then(data => data.ResponseData.Buses.map((data)=> {
    console.log(data);
    add_bus_time(data);
}));

const add_bus_time = (data) => {
    let bus_number = data.LineNumber;
    let bus_destination = data.Destination;
    let bus_time = data.DisplayTime;
    let bus_stop = data.StopPointDesignation;

    const tableEl = document.getElementById("table-el");
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');



    let busNumText = document.createTextNode = `${bus_number}`;
    let busDesText = document.createTextNode = `${bus_destination}`;
    let busTimeText = document.createTextNode = `${bus_time}`;
    let busStopText = document.createTextNode = `Stop: ${bus_stop}`;

    if (data.GroupOfLine == "blåbuss") {
        td.style.backgroundColor = "blue";
    } else {
        td.style.backgroundColor = "red";
    };

    const imgUrl = "../img/bus-solid.svg";
    let img = document.createElement("img");
    img.src = imgUrl;
    img.setAttribute("id","bus-img")

    td.textContent = busNumText;
    td.classList.add("bus-num");

    td2.textContent = busDesText;
    td2.classList.add("bus-des")

    td3.textContent = busTimeText;
    td3.classList.add("bus-time")

    td4.textContent = busStopText;
    td4.classList.add("bus-stop")

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(img)

    tableEl.appendChild(tr);
}

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=1c2225137de64aa3bbc468c6b970a624&siteid=7006&timewindow=20")
.then(res => res.json())
.then(data => data.ResponseData.Trains.map((data) => {
    console.log(data);
    add_train_time(data);
}));

const add_train_time = (data) => {
    let train_number = data.LineNumber;
    let train_destination = data.Destination;
    let train_time = data.DisplayTime;
    let train_stop = data.StopPointDesignation;

    const tableEl = document.getElementById("table-el");
    let tr = document.createElement('tr');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');




    let trainNumText = document.createTextNode = `${train_number}`;
    let trainDesText = document.createTextNode = `${train_destination}`;
    let trainTimeText = document.createTextNode = `${train_time}`;
    let trainStopText = document.createTextNode = `Stop: ${train_stop}`;

    const imgUrl = "../img/train-subway-solid.svg";
    let img = document.createElement("img");
    img.src = imgUrl;

    td5.textContent = trainNumText;
    td5.classList.add("train-num");
    td5.style.backgroundColor = "#EC407A"

    td6.textContent = trainDesText;
    td6.classList.add("train-des")

    td7.textContent = trainTimeText;
    td7.classList.add("train-time")

    td8.textContent = trainStopText;
    td8.classList.add("train-stop")

    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(img);

    tableEl.appendChild(tr);
}
