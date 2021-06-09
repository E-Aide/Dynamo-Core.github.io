"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:5000/getAll').then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log(data);
  });
  loadHTMLTable([]);
});

function SignUP() {
  var nameInput = document.querySelector('#name-input');
  var name = nameInput.value;
  nameInput.value = "";
  fetch('http://localhost:5000/insert', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      name: name
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return insertRowIntoTable(data['data']);
  });
}

function loadHTMLTable(data) {
  var table = document.querySelector("");
}