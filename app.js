const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  favFlick(flick, ev) {
    const listItem = ev.target.closest('.flick')
    flick.fav = !flick.fav

    if (flick.fav) {
      listItem.classList.add('fav')
    } else {
      listItem.classList.remove('fav')
    }
  },

  removeFlick(flick, ev) {
    // remove from the DOM
    const listItem = ev.target.closest('.flick')
    listItem.remove()

    // remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  },

  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
      .querySelector('.flick-name')
      .textContent = flick.name

    item
      .querySelector('button.remove')
      .addEventListener(
        'click', 
        this.removeFlick.bind(this, flick)
        )

    item
      .querySelector('button.fav')
      .addEventListener(
        'click', 
        this.favFlick.bind(this, flick)
        )

    item
        .querySelector('button.up')
        .addEventListener(
        'click',
        this.moveUp.bind(this, flick)
        )

    item
        .querySelector('button.down')
        .addEventListener(
        'click',
        this.moveDown.bind(this, flick)
        )
    document.querySelector(".flick-name").contentEditable = true
    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      fav: false,
    }

    this.flicks.unshift(flick)

    const listItem = this.renderListItem(flick)
    this.list
      .insertBefore(listItem, this.list.firstElementChild)

    this.max ++
    f.reset()
  },

  moveUp(flick,ev){
    newItem = ev.target.closest('.flick')
    this.list.insertBefore(newItem, newItem.previousSibling)
  },
  moveDown(flick,ev){
    newItem = ev.target.closest('.flick')
    this.list.insertBefore(newItem, newItem.nextSibling.nextSibling)
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})