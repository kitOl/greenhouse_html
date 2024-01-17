const selectElements = document.querySelectorAll(".select");

selectElements.forEach(activateCustomSelect);

function activateCustomSelect(selectWrapper) {
  const realSelect = selectWrapper.querySelector("select");

  selectWrapper.querySelector(".select__value").innerText = realSelect.value;

  let labels = [];
  for (option of realSelect.options) {
    labels.push(option.label);
  }

  const selectList = selectWrapper.querySelector(".select__list");

  labels.forEach((label) => {
    const li = document.createElement("li");
    li.classList.add("select__list-item");
    li.innerText = label;

    if (realSelect.value === label) {
      li.classList.add("select__list-item--active");
    }

    li.addEventListener("click", selectElement);
    selectList.append(li);
  });

  selectWrapper.addEventListener("click", function () {
    selectList.classList.toggle("select__list--visible");
  });

  function selectElement(e) {
    // console.log("Element CLICK!!!");

    selectList
      .querySelector(".select__list-item--active")
      .classList.remove("select__list-item--active");
    e.target.classList.add("select__list-item--active");

    selectWrapper.querySelector(".select__value").innerText =
      e.target.innerText;

    realSelect.value = e.target.innerText;
  }
}
