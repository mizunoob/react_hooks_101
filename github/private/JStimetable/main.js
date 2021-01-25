'use strict'

{
  const Period1 = document.querySelector(".Period1")
  const Period2 = document.querySelector(".Period2")
  const Period3 = document.querySelector(".Period3")
  const Period4 = document.querySelector(".Period4")
  const Period5 = document.querySelector(".Period5")
  const Period6 = document.querySelector(".Period6")
  const Period7 = document.querySelector(".Period7")

  const addSub = document.getElementById("addSub")
  const tbody = document.querySelector("tbody")
  const addRow = document.getElementById("addRow")

  const kamokuForm = document.getElementById('kamoku')


  kamokuForm.addEventListener("click", () => {
    if (kamokuForm.value === "科目名を入力") {
      kamokuForm.value = "";
    }
  })

addRow.addEventListener('click', () => {
  let changeTime = document.getElementById("changeTime").value
  switch (changeTime) {
    case "1時限":
      Period1.classList.add('show')
      Period2.classList.remove("show")
      Period3.classList.remove("show")
      Period4.classList.remove("show")
      Period5.classList.remove("show")
      Period6.classList.remove("show")
      Period7.classList.remove("show")
      break
    case "2時限":
      Period1.classList.add('show')
      Period2.classList.add('show')
      Period3.classList.remove("show")
      Period4.classList.remove("show")
      Period5.classList.remove("show")
      Period6.classList.remove("show")
      Period7.classList.remove("show")
      break
    case "3時限":
      Period1.classList.add('show')
      Period2.classList.add('show')
      Period3.classList.add('show')
      Period4.classList.remove("show")
      Period5.classList.remove("show")
      Period6.classList.remove("show")
      Period7.classList.remove("show")
      break
    case "4時限":
      Period1.classList.add('show')
      Period2.classList.add('show')
      Period3.classList.add('show')
      Period4.classList.add('show')
      Period5.classList.remove("show")
      Period6.classList.remove("show")
      Period7.classList.remove("show")
      break
    case "5時限":
      Period1.classList.add('show')
      Period2.classList.add('show')
      Period3.classList.add('show')
      Period4.classList.add('show')
      Period5.classList.add('show')
      Period6.classList.remove("show")
      Period7.classList.remove("show")
      break
    case "6時限":
      Period1.classList.add('show')
      Period2.classList.add('show')
      Period3.classList.add('show')
      Period4.classList.add('show')
      Period5.classList.add('show')
      Period6.classList.add('show')
      Period7.classList.remove("show")
      break
    case "7時限":
      Period1.classList.add('show')
      Period2.classList.add('show')
      Period3.classList.add('show')
      Period4.classList.add('show')
      Period5.classList.add('show')
      Period6.classList.add('show')
      Period7.classList.add('show')
      break
  }
})

addSub.addEventListener('click', () => {
  let kamoku =  document.getElementById('kamoku').value
  let selectTime = document.getElementById("selectTime").value
  let Day = document.getElementById("selectDay").value
  function selectCell(week) {
    switch (selectTime) {
      case "1時限目":
        Period1.children[week].textContent = kamoku
        break
      case "2時限目":
        Period2.children[week].textContent = kamoku
        break
      case "3時限目":
        Period3.children[week].textContent = kamoku
        break
      case "4時限目":
        Period4.children[week].textContent = kamoku
        break
      case "5時限目":
        Period5.children[week].textContent = kamoku
        break
      case "6時限目":
        Period6.children[week].textContent = kamoku
        break
      case "7時限目":
        Period7.children[week].textContent = kamoku
        break
    }
    kamoku = '';
  } 
  switch (Day) {
    case "月曜日":
      selectCell(1)
      break;
    case "火曜日":
      selectCell(2)
      break;
    case "水曜日":
      selectCell(3)
      break;
    case "木曜日":
      selectCell(4)
      break;
    case "金曜日":
      selectCell(5)
      break;
  }
})
}