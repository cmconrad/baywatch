let myArray = []

const app = {
    init: function(selectors){
        this.max = 0
        this.list=document.querySelector(selectors.listSelector)

        document.querySelector(selectors.formSelector).addEventListener("submit", this.handleSubmit.bind(this))
        document.querySelector(selectors.buttonSelector).addEventListener("click",this.favChanger.bind(this))
    },

    handleSubmit(ev){
        ev.preventDefault()
        const f = ev.target
        const flick = {
            id: this.max + 1,
            name: f.flickName.value
        }

        const listItem= this.renderListItem(flick)
        this.list.appendChild(listItem)


        this.max ++
    },
    renderListItem(flick){
        const item = document.createElement("li")
        const fav = document.createElement('button')
        fav.textContent = "Favorite"
        fav.setAttribute("class","favButton")
        fav.setAttribute("id", this.max)
        myArray.push(flick.name)
        console.log(myArray)
        item.textContent = flick.name
        item.appendChild(fav)
        return item
    },
    favChanger(button){

    }
}

app.init({
    formSelector:"form#flick-form",
    listSelector:"#flick-list",
    buttonSelector:"favButton"
})