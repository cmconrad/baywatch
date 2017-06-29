
const app = {
    init: function(selectors){
        this.myArray = []
        this.max = 0
        this.list=document.querySelector(selectors.listSelector)

        document.querySelector(selectors.formSelector).addEventListener("submit", this.handleSubmit.bind(this))
    },
    
    handleSubmit(ev){
        ev.preventDefault()
        const f = ev.target
        const flick = {
            id: this.max + 1,
            name: f.flickName.value,
            favStatus: false,
        }

        const listItem= this.renderListItem(flick)
        this.list.insertBefore(listItem, this.list.firstChild)

        this.max ++
    },
    renderListItem(flick){
        const item = document.createElement("li")

        const fav = document.createElement('button')
        fav.textContent = "Favorite"
        fav.setAttribute("class","button")
        fav.setAttribute("id", "f"+this.max)
        fav.style.position = "absolute"
        fav.style.right = "10px"
        fav.addEventListener("click",this.favChanger.bind(this))


        const del = document.createElement('button')
        del.textContent = "Delete"
        del.setAttribute("class","button")
        del.setAttribute("id","d"+this.max)
        del.style.position = "absolute"
        del.style.right = "100px"
        del.addEventListener("click",this.deleter.bind(this))

        this.myArray.push(flick)
        console.log(this.myArray)
        item.textContent = flick.name
        item.appendChild(fav)
        item.appendChild(del)
        item.style.paddingBottom = "20px"
        return item
    },

    favChanger(ev){
        li = ev.target.parentElement
        if(li.style.backgroundColor == "red"){
            li.style.backgroundColor = "white";
            this.flick.favStatus = false;
        }
        else{
             li.style.backgroundColor = "red";
             this.flick.favStatus = true;
        }
       
    },

    deleter(ev){
        f = ev.target.parentElement
        f.remove(f)
        const i = (ev.target.id.substring(1))
        console.log(i)
        this.myArray.splice(i-1,1)
        this.max --
        // array
    },
}

app.init({
    formSelector:"form#flick-form",
    listSelector:"#flick-list",
})