function initTollData() {
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

  const tollList = JSON.parse(localStorage.getItem("tollList") || "[]").tollList;
  if (!tollList) {
    localStorage.setItem("tollList", JSON.stringify({ tollList: tollData }))
    populateTollTable2(tollData ?? []);
  }
  else {
    populateTollTable2(tollList ?? []);
  }

  const vehicleList = JSON.parse(localStorage.getItem("vehicleList") || "[]").vehicleList;
  if (!vehicleList) {
    localStorage.setItem("vehicleList", JSON.stringify({ vehicleList: vehicleData }))
  }
  populateTollName(tollData ?? []);
}

function populateTollTable() {
  const table = document.getElementById("tollTable");
  const tollList = JSON.parse(localStorage.getItem("tollList") || "[]").tollList;

  table.innerHTML = `<tr>
                      <th>Toll Nmae</th>
                      <th>Car/Jeep/Bus</th>
                      <th>LCV</th>
                      <th>Truck/Bus</th>
                      <th>Heavy Vehicle</th>
                    </tr>`;
  for (let i in tollList) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.setAttribute("id", `${i}`);
    tr.innerHTML = `<td>${tollList[i]["tollName"]}</td> 
    <td>${tollList[i]["vehicleFare"]["CAR/JEEP/BUS"]["singleJ"]}/${tollList[i]["vehicleFare"]["CAR/JEEP/BUS"]["returnJ"]}</td >  
    <td>${tollList[i]["vehicleFare"]["LCV"]["singleJ"]}/${tollList[i]["vehicleFare"]["LCV"]["returnJ"]}</td >  
    <td>${tollList[i]["vehicleFare"]["TRUCK/BUS"]["singleJ"]}/${tollList[i]["vehicleFare"]["TRUCK/BUS"]["returnJ"]}</td >  
    <td>${tollList[i]["vehicleFare"]["HEAVY VEHICLE"]["singleJ"]}/${tollList[i]["vehicleFare"]["HEAVY VEHICLE"]["returnJ"]}</td > `;

    td.innerText = tollList[i]["DELETE"]
    td.addEventListener("click", (e) => {
      const newTollList = tollList.filter((item) => {
        return e.path[1].id != `${item.id}`
      })
      location.reload();
      localStorage.setItem("tollList", JSON.stringify({ tollList: newTollList }))
    })
    tr.appendChild(td);
    table.appendChild(tr);
  }
}
function populateTollTable2(data) {
  const table = document.getElementById("tollTable");

  table.innerHTML = `<tr>
                      <th>Toll Nmae</th>
                      <th>Car/Jeep/Bus</th>
                      <th>LCV</th>
                      <th>Truck/Bus</th>
                      <th>Heavy Vehicle</th>
                    </tr>`;
  for (let i in data) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.setAttribute("id", `${i}`);
    tr.innerHTML = `<td>${data[i]["tollName"]}</td> 
    <td>${data[i]["vehicleFare"]["CAR/JEEP/BUS"]["singleJ"]}/${data[i]["vehicleFare"]["CAR/JEEP/BUS"]["returnJ"]}</td >  
    <td>${data[i]["vehicleFare"]["LCV"]["singleJ"]}/${data[i]["vehicleFare"]["LCV"]["returnJ"]}</td >  
    <td>${data[i]["vehicleFare"]["TRUCK/BUS"]["singleJ"]}/${data[i]["vehicleFare"]["TRUCK/BUS"]["returnJ"]}</td >  
    <td>${data[i]["vehicleFare"]["HEAVY VEHICLE"]["singleJ"]}/${data[i]["vehicleFare"]["HEAVY VEHICLE"]["returnJ"]}</td > `;

    td.innerText = data[i]["DELETE"]
    td.addEventListener("click", (e) => {
      const newdata = data.filter((item) => {
        return e.path[1].id != `${item.id}`
      })
      location.reload();
      localStorage.setItem("tollList", JSON.stringify({ tollList: newdata }))
    })
    tr.appendChild(td);
    table.appendChild(tr);
  }
}

function handleOnTollEntry() {
  const tollList = JSON.parse(localStorage.getItem("tollList") || "[]").tollList;

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
      },
      "DELETE": "DELETE"
    }
  }

  tollList.push(data);
  localStorage.setItem("tollList", JSON.stringify({ tollList }))

  const table = document.getElementById("tollTable");
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  tr.setAttribute("id", `${tollList?.length}`);
  tr.innerHTML = `<td>${data["tollName"]}</td> 
    <td>${data["vehicleFare"]["CAR/JEEP/BUS"]["singleJ"]}/${data["vehicleFare"]["CAR/JEEP/BUS"]["returnJ"]}</td >  
    <td>${data["vehicleFare"]["LCV"]["singleJ"]}/${data["vehicleFare"]["LCV"]["returnJ"]}</td >  
    <td>${data["vehicleFare"]["TRUCK/BUS"]["singleJ"]}/${data["vehicleFare"]["TRUCK/BUS"]["returnJ"]}</td >  
    <td>${data["vehicleFare"]["HEAVY VEHICLE"]["singleJ"]}/${data["vehicleFare"]["HEAVY VEHICLE"]["returnJ"]}</td > `;
  td.innerText = data["DELETE"]
  td.addEventListener("click", (e) => {
    console.log(e.path[1].id);
    const newTollList = tollList.filter((item) => {
      return e.path[1].id != item.id
    })
    location.reload();
    localStorage.setItem("tollList", JSON.stringify({ tollList: newTollList }))
    populateTollTable2(newTollList ?? [])
  })
  tr.appendChild(td);
  table.appendChild(tr);

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
    "Tariff": tariffInput?.value
  }

  vehicleList.push(data);
  localStorage.setItem("vehicleList", JSON.stringify({ vehicleList }))

  vehicleInput.selectedIndex = 0;
  tollNameInput.selectedIndex = 0;
  vehicleNoInput.value = '';
  tariffInput.value = '';
  modal1.style.display = "none";
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
  const searchParam = document.getElementsByClassName("searchTollName");
  const tollList = JSON.parse(localStorage.getItem("tollList") || "[]").tollList;

  if (searchParam.input.value) {
    const newTollList = tollList.filter((data) => {
      return data.tollName.toLowerCase().includes(searchParam.input.value);
    })
    populateTollTable2(newTollList ?? []);
  }
  else {
    populateTollTable2(tollList ?? []);
  }
}
















/* ------------------------------------------------------------------ */
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
