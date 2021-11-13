"use strict";

//Variables//
//Boolean variables
let inputComplete = true;
//Input variables
const nameInput = document.querySelector(".nameInput");
const dateInput = document.querySelector(".dateInput");
const amountInput = document.querySelector(".amountInput");
const inputDiv = document.querySelector(".input");
const add = document.querySelector(".add");

//Output variables
const nameOutput = document.querySelector(".nameOutput");
const dateOutput = document.querySelector(".dateOutput");
const amountOutput = document.querySelector(".amountOutput");
const outputDiv = document.querySelector(".output");
const table = document.querySelector(".table");
const tr = document.querySelector(".tr");

//Array variables
const nameArray = [];
const dateArray = [];
const amountArray = [];

//Function for adding to arrays(to table)
const create = function () {
  nameArray.push(nameInput.value);
  dateArray.push(dateInput.value);
  amountArray.push(amountInput.value);
  render();
};

//Turning array into output
render();
function render() {
  table.innerHTML = "";
  tr.innerHTML = "";
  let total = 0;
  for (
    let i = 0;
    i < nameArray.length && i < dateArray.length && i < amountArray.length;
    i++
  ) {
    //Creating table elements
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const deleteBtn = document.createElement("button");
    const deleteClass = deleteBtn.classList.add("delete");
    const deleteBtnText = document.createTextNode("X");
    let names = document.createTextNode(nameArray[i]);
    let dates = document.createTextNode(dateArray[i]);
    let amounts = document.createTextNode(amountArray[i]);
    //Creating class for elements
    const trClass = tr.classList.add(".tr");
    //Creating table
    outputDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.appendChild(names);
    td2.appendChild(dates);
    td3.appendChild(amounts);
    td3.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteBtnText);
    //Delete button functionality
    deleteBtn.addEventListener("click", function () {
      amountArray.splice(i, 1);
      render();
    });
    //Adding Total DOM
    let score = Number(amountArray[i]);
    total += score;
    console.log(score);
    //
    if (total > 1000) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "green";
    }
    //
  }
  document.querySelector(".total").textContent = total;

  //Adding Expense functionality
  add.addEventListener("click", create);
  document.addEventListener("keydown", function (enter) {
    if (enter.key === "Enter") {
      create();
    }
  });
}
