const ul = document.getElementById("list")
const lists = Array.from(document.querySelectorAll("li"));
const addBtn = document.getElementById("add")
const removeBtn = document.getElementById("remove")

addBtn.addEventListener("click", () => {
  // liの追加
  const li = document.createElement("li")
  lists.push(li)
  ul.appendChild(li)
  // imgの追加
  const img = document.createElement("img")
  const index = lists.length
  img.setAttribute("src", "http://placehold.it/64x64")
  img.setAttribute("alt", "アイテム" + index)
  li.appendChild(img)
  // spanの追加
  const span = document.createElement("span")
  span.textContent = "アイテム" + index
  li.appendChild(span)
})

removeBtn.addEventListener("click", () => {
  const li = document.createElement("li")
  let index = lists.length
  if (index >= 1) {
    ul.removeChild(ul.lastChild)
    lists.pop()
  }
})