const contents = document.querySelectorAll('.content')
const listsItems = document.querySelectorAll('nav ul li')

listsItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  listsItems.forEach(item => item.classList.remove('active'))
}