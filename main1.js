let totalName = 0   // 1
function init() {
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', showName)
}
function showName() {
  const inputName = document.getElementById('yourName')
  //   console.log(inputName.value)
  const divShowName = document.getElementById('showName')
  //    <div></div>
  const divElement = document.createElement('div')
  divElement.style = 'display:flex'

  //create checkbox and add to div
  const checkboxElement = document.createElement('input') //<input/>
  checkboxElement.setAttribute('type', 'checkbox') //<input type='checkbox'/>
  divElement.appendChild(checkboxElement)

  const totalNameElement = document.getElementById('totalName'); // 2


  //add click event to checkbox for removing
  checkboxElement.addEventListener('click', () => {
    divElement.remove()
    totalName--
    totalNameElement.textContent = totalName  // 3
  })

  // create <p>Your input name<p> and add to div
  const pElement = document.createElement('p')
  pElement.textContent = inputName.value

  //<div> <p>Your input name<p></div>
  divElement.appendChild(pElement)
  // <div id="showName">
  //    <div><p>Your input name<p></div>
  // </div>
  //   divShowName.textContent = ''
  divShowName.appendChild(divElement)
  inputName.value = ''
           
  totalName++ // 4
  totalNameElement.textContent = totalName; // 5
}
init()