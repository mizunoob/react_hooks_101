const ul = document.getElementById("list")
const lists = Array.from(document.querySelectorAll("li"));
const addBtn = document.getElementById("add")
const removeBtn = document.getElementById("remove")

addBtn.addEventListener("click", () => {
  const li = document.createElement("li")
  // const index = lists.findIndex(list => list === e.target)
  lists.push(li)
  let index = lists.length
  li.textContent = "Item" + index
  ul.appendChild(li)
})

removeBtn.addEventListener("click", () => {
  const li = document.createElement("li")
  let index = lists.length
  if (index >= 1) {
    ul.removeChild(ul.lastChild)
    lists.pop()
  }
})