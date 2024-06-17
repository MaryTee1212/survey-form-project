//Form Validation

let name = document.getElementById("fname").value;
console.log(name);

let gender = document.querySelector('input[name = "gender"]:checked').value;
console.log(gender);

let address = document.getElementById("address").value;
console.log(address);

let phone = document.querySelector('input[name ="Phone"]').value;
console.log(phone);

let Email = document.querySelector('input[name ="email"]').value;
console.log(Email);

let interest = document.querySelector('input[name = "interest"]:checked').value;
console.log(interest);

let contribute = document.querySelector(
  'input[name = "contribute"]:checked'
).value;
console.log(contribute);

let capacity = [];
let checkboxes = document.getElementsByName("capacity[]");
for (let i = 0; i < checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    capacity.push(checkboxes[i].value);
  }
}
console.log(capacity);
