function initVehicleData() {
  const vehicleData = [
    {
      "id": 0,
      "vehicleType": "Car/Jeep/Van",
      "vehicleNumber": "TN24AQ4644",
      "dateTime": "10/23/2018, 4:12:29 AM",
      "tollName": "Chengalpattu",
      "Tariff": 60,
      "DELETE": "DELETE"
    },
    {
      "id": 1,
      "vehicleType": "Car/Jeep/Van",
      "vehicleNumber": "TN19QQ1234",
      "dateTime": "9/19/2020, 10:12:29 PM",
      "tollName": "Kappalur",
      "Tariff": 75,
      "DELETE": "DELETE"
    },
    {
      "id": 2,
      "vehicleType": "Heavy Vehicle",
      "vehicleNumber": "TN24AA1234",
      "dateTime": "4/15/2018, 2:12:29 PM",
      "tollName": "Krishnagiri",
      "Tariff": 400,
      "DELETE": "DELETE"
    }
  ]
  const tollData = [
    {
      "id": 0,
      "tollName": "Chengalpatttu",
      "vehicleFare": {
        "CAR/JEEP/BUS": {
          "singleJ": "60",
          "returnJ": "30"
        },
        "LCV": {
          "singleJ": "95",
          "returnJ": "50"
        },
        "TRUCK/BUS": {
          "singleJ": "205",
          "returnJ": "100"
        },
        "HEAVY VEHICLE": {
          "singleJ": "320",
          "returnJ": "160"
        }
      },
      "DELETE": "DELETE"
    },
    {
      "id": 1,
      "tollName": "Kappalur",
      "vehicleFare": {
        "CAR/JEEP/BUS": {
          "singleJ": "75",
          "returnJ": "150"
        },
        "LCV": {
          "singleJ": "125",
          "returnJ": "180"
        },
        "TRUCK/BUS": {
          "singleJ": "235",
          "returnJ": "130"
        },
        "HEAVY VEHICLE": {
          "singleJ": "400",
          "returnJ": "200"
        }
      },
      "DELETE": "DELETE"
    },
    {
      "id": 2,
      "tollName": "Krishnagiri",
      "vehicleFare": {
        "CAR/JEEP/BUS": {
          "singleJ": "70",
          "returnJ": "40"
        },
        "LCV": {
          "singleJ": "110",
          "returnJ": "165"
        },
        "TRUCK/BUS": {
          "singleJ": "235",
          "returnJ": "130"
        },
        "HEAVY VEHICLE": {
          "singleJ": "365",
          "returnJ": "200"
        }
      },
      "DELETE": "DELETE"
    }
  ]

  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;
  if (!vehicleList) {
    localStorage.setItem("vehicleList", JSON.stringify({ vehicleList: vehicleData }))
    populateVehicleTable(vehicleData ?? []);
  }
  else {
    populateVehicleTable(vehicleList ?? []);
  }

  const tollList = JSON.parse(localStorage.getItem("tollList") || "[]").tollList;
  if (!tollList) {
    localStorage.setItem("tollList", JSON.stringify({ tollList: tollData }))
  }
  populateTollName(tollData ?? []);

  filterTollName();
}

function populateVehicleTable() {
  const table = document.getElementById("vehicleTable");
  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;

  table.innerHTML = `<tr>
                      <th>Vehicle Type</th>
                      <th>Vehicle Number</th>
                      <th>Date/Time</th>
                      <th>Toll Name</th>
                      <th>Tariff</th>
                    </tr>`;
  for (let i in vehicleList) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute("id", `${i}`);
    tr.innerHTML = `<td>${vehicleList[i]["vehicleType"]}</td> <td>${vehicleList[i]["vehicleNumber"]}</td >  <td>${vehicleList[i]["dateTime"]}</td>  <td>${vehicleList[i]["tollName"]}</td>  <td>${vehicleList[i]["Tariff"]}</td>`;

    td.innerText = vehicleList[i]["DELETE"]
    td.addEventListener("click", (e) => {
      const newvehicleList = vehicleList.filter((item) => {
        return e.path[1].id != item.id
      })
      location.reload();
      localStorage.setItem("vehicleList", JSON.stringify({ vehicleList: newvehicleList }));
    })
    tr.appendChild(td);
    tr.setAttribute("id", `${i}`);
    table.appendChild(tr);
  }
}

function populateVehicleTable2(data) {
  const table = document.getElementById("vehicleTable");

  table.innerHTML = `<tr>
                      <th>Vehicle Type</th>
                      <th>Vehicle Number</th>
                      <th>Date/Time</th>
                      <th>Toll Name</th>
                      <th>Tariff</th>
                    </tr>`;
  for (let i in data) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute("id", `${i}`);
    tr.innerHTML = `<td>${data[i]["vehicleType"]}</td> <td>${data[i]["vehicleNumber"]}</td >  <td>${data[i]["dateTime"]}</td>  <td>${data[i]["tollName"]}</td>  <td>${data[i]["Tariff"]}</td>`;

    td.innerText = data[i]["DELETE"]
    td.addEventListener("click", (e) => {
      const newdata = data.filter((item) => {
        return e.path[1].id != item.id
      })
      location.reload();
    })
    tr.appendChild(td);
    tr.setAttribute("id", `${i}`);
    table.appendChild(tr);
  }
}

function handleOnVehicleEntry() {
  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;

  const tollNameInput = document.getElementById("t-type");
  const vehicleInput = document.getElementById("Vtypes");
  const vehicleNoInput = document.getElementById("vehicleNo");
  const tariffInput = document.getElementById("tariff");

  const d = new Date();

  const data = {
    "id": vehicleList?.length,
    "vehicleType": vehicleInput?.options[vehicleInput.selectedIndex]?.text,
    "vehicleNumber": vehicleNoInput?.value,
    "dateTime": d.toLocaleDateString() + ', ' + d.toLocaleTimeString(),
    "tollName": tollNameInput?.options[tollNameInput.selectedIndex]?.text,
    "Tariff": tariffInput?.value,
    "DELETE": "DELETE"
  }

  vehicleList.push(data);
  localStorage.setItem("vehicleList", JSON.stringify({ vehicleList }))


  const vehicleList1 = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;

  const table = document.getElementById("vehicleTable");
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  tr.setAttribute("id", `${vehicleList?.length}`);
  td.setAttribute("id", `${vehicleList?.length}`);
  tr.innerHTML = `<td>${data["vehicleType"]}</td> <td>${data["vehicleNumber"]}</td>  <td>${data["dateTime"]}</td>  <td>${data["tollName"]}</td>  <td>${data["Tariff"]}</td>`;
  td.innerText = data["DELETE"];
  td.addEventListener("click", (e) => {
    const newvehicleList = vehicleList1.filter((item) => {
      return e.path[1].id != item.id
    })
    location.reload();
    localStorage.setItem("vehicleList", JSON.stringify({ vehicleList: newvehicleList }));
    populateVehicleTable2(newvehicleList ?? []);
  })
  tr.appendChild(td);
  table.appendChild(tr);

  vehicleInput.selectedIndex = 0;
  tollNameInput.selectedIndex = 0;
  vehicleNoInput.value = '';
  tariffInput.value = '';
  modal1.style.display = "none";
  populateVehicleTable2(vehicleList ?? []);
}

function handleOnTollEntry() {
  const tollList = JSON.parse(localStorage.getItem("tollList") || "[]").tollList;
  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;

  const tollNameInput = document.getElementById("toll-name1");
  const CsingleJ = document.getElementById("CsingleJ");
  const CreturnJ = document.getElementById("CreturnJ");
  const LsingleJ = document.getElementById("LsingleJ");
  const LreturnJ = document.getElementById("LreturnJ");
  const TsingleJ = document.getElementById("TsingleJ");
  const TreturnJ = document.getElementById("TreturnJ");
  const HVsingleJ = document.getElementById("HVsingleJ");
  const HVreturnJ = document.getElementById("HVreturnJ");

  const data = {
    "id": tollList?.length,
    "tollName": tollNameInput?.value,
    "vehicleFare": {
      "CAR/JEEP/BUS": {
        "singleJ": CsingleJ?.value,
        "returnJ": CreturnJ?.value
      },
      "LCV": {
        "singleJ": LsingleJ?.value,
        "returnJ": LreturnJ?.value
      },
      "TRUCK/BUS": {
        "singleJ": TsingleJ?.value,
        "returnJ": TreturnJ?.value
      },
      "HEAVY VEHICLE": {
        "singleJ": HVsingleJ?.value,
        "returnJ": HVreturnJ?.value
      }
    }
  }

  tollList.push(data);
  localStorage.setItem("tollList", JSON.stringify({ tollList }))

  const selectToll = document.getElementById("t-type");
  const optionType = document.createElement('option');
  optionType.innerText = tollNameInput?.value;
  selectToll.appendChild(optionType);


  const filterOptions = JSON.parse(localStorage.getItem("filterOptions") || "[]").filterOptions;

  if (!filterOptions.includes(tollNameInput?.value)) {
    const filterToll = document.getElementById("myDropdown");
    const newToll = document.createElement('div');
    newToll.innerText = tollNameInput?.value;
    newToll.addEventListener("click", (e) => {
      const newVehicleList = vehicleList.filter((item) => {
        return e.target.innerText.toLowerCase().includes(item.tollName.toLowerCase());
      })
      populateVehicleTable(newVehicleList ?? []);
    })
    filterToll.appendChild(newToll);
  }

  tollNameInput.value = '';
  CsingleJ.value = "";
  CreturnJ.value = "";
  LsingleJ.value = "";
  LreturnJ.value = "";
  TsingleJ.value = "";
  TreturnJ.value = "";
  HVsingleJ.value = "";
  HVreturnJ.value = "";
  modal.style.display = "none";
  populateVehicleTable(vehicleList);
}

function populateTollName(data) {
  const selectToll = document.getElementById("t-type");
  for (let i in data) {
    const optionType = document.createElement('option');
    optionType.innerText = data[i]["tollName"];
    selectToll.appendChild(optionType);
  }
}

function searchVehicleNumber() {
  const searchParam = document.getElementsByClassName("searchVehicle");
  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;

  if (searchParam.input.value) {
    const newVehicleList = vehicleList.filter((data) => {
      return data.vehicleNumber.toLowerCase().includes(searchParam.input.value);
    })
    populateVehicleTable2(newVehicleList ?? []);
  }
  else {
    populateVehicleTable2(vehicleList ?? []);
  }
}

function filterTollName() {
  const filterToll = document.getElementById("myDropdown");
  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;

  const all = document.createElement('div');
  all.innerText = "ALL"
  all.addEventListener("click", (e) => {
    populateVehicleTable2(vehicleList ?? []);
  })
  filterToll.appendChild(all);

  const filterOptions = ["ALL"]

  for (let i in vehicleList) {
    const div = document.createElement('div');
    div.addEventListener("click", (e) => {
      const newVehicleList = vehicleList.filter((item) => {
        console.log(item.tollName, e.target.innerText, item.tollName.toLowerCase().includes(e.target.innerText.toLowerCase()));
        return e.target.innerText.toLowerCase().includes(item.tollName.toLowerCase());
      })
      populateVehicleTable2(newVehicleList ?? []);
    })
    filterToll.appendChild(div);
    div.innerText = vehicleList[i].tollName;
    filterOptions.push(vehicleList[i].tollName);
  }
  localStorage.setItem("filterOptions", JSON.stringify({ filterOptions }));
}










/* -------------------------------------------------------------------------------------------- */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//Js for Add to entry
// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "flex";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// function for vehicle entry

// Get DOM Elements
const modal1 = document.querySelector("#my-btn");
const modalBtn1 = document.querySelector("#modal-el");
const closeBtn1 = document.querySelector(".close1");

// Events
modalBtn1.addEventListener("click", openModal1);
closeBtn1.addEventListener("click", closeModal1);
window.addEventListener("click", outsideClick1);

// Open
function openModal1() {
  modal1.style.display = "flex";
}

// Close
function closeModal1() {
  modal1.style.display = "none";
}

// Close If Outside Click
function outsideClick1(e) {
  if (e.target == modal1) {
    modal1.style.display = "none";
  }
}
