let myArray = []

const app = {
    init: function(selectors){
        this.max = 0
        this.list=document.querySelector(selectors.listSelector)

        document.querySelector(selectors.formSelector).addEventListener("submit", this.handleSubmit.bind(this))
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
        fav.setAttribute("class","button")
        fav.setAttribute("id", this.max)
        fav.addEventListener("click",this.favChanger.bind(this))
        myArray.push(flick.name)
        console.log(myArray)
        item.textContent = flick.name
        item.appendChild(fav)
        return item
    },

    favChanger(ev){
        li = ev.target.parentElement
        li.style.backgroundColor = "red";
        console.log(li)
        console.log("clicked")
    }
}

app.init({
    formSelector:"form#flick-form",
    listSelector:"#flick-list",
})