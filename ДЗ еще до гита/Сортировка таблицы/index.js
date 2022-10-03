const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");

const arr = [
  { firstname: "Mark", lastname: "Zuckerberg", age: 34, company: "Faceebook" },
  { firstname: "Larry", lastname: "Page", age: 45, company: "Google" },
  { firstname: "Tomothy", lastname: "Cook", age: 57, company: "Apple" },
  { firstname: "Bill", lastname: "Gates", age: 62, company: "Microsoft" }
];

render(arr);

function render(arr) {
  tbody.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    tbody.innerHTML += `<tr>
      <td>${item.firstname}</td>
      <td>${item.lastname}</td>
      <td>${item.age}</td>
      <td>${item.company}</td>
    </tr>`;
  }
}

thead.addEventListener("click", function (event) {
  const field = event.target.getAttribute("data-column");
  console.log(field);
  arr.sort(function (arr1, arr2) {
    if (arr1[field] < arr2[field]) {
      return -1;
    }
    if (arr1[field] > arr2[field]) {
      return 1;
    }
    return 0;
  });

  render(arr);
});
