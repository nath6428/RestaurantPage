import page from "../dist/main.js"
export default function menu(){
    
    const mainDiv = document.createElement("div")
    mainDiv.className = "mainDiv"
    mainDiv.id = "menuMainDiv"
    page.appendChild(mainDiv)
     

    function newMenuItem(name, description, image){

        const itemContainer = document.createElement("div")
        itemContainer.className = "item-container"
        mainDiv.appendChild(itemContainer)
        
        const nameTag = document.createElement("p")
        nameTag.className = "name-tag"
        nameTag.innerText = name
        itemContainer.appendChild(nameTag)
        
        const descImgWrapper = document.createElement("div")
        descImgWrapper.className = "desc-img-wrapper"
        itemContainer.appendChild(descImgWrapper)

        const descTag = document.createElement("p")
        descTag.className = "desc-tag"
        descTag.innerText = description
        descImgWrapper.appendChild(descTag)
        
        const itemPic = document.createElement("img")
        itemPic.className = "item-pic"
        itemPic.src = image
        descImgWrapper.appendChild(itemPic)


    }
    newMenuItem("Filet Mignon", "This premium cut of beef is renowned for its tenderness and exquisite flavor, appealing to discerning palates worldwide. Sourced from a specific part of the cow, it boasts a naturally lean profile, making it a popular choice among health-conscious meat lovers.", "filet.png")
    newMenuItem("Ribeye", "Ribeye is a popular and flavorful cut of beef known for its marbling, which contributes to its tenderness and rich taste. It is sourced from the rib area of the cow, specifically from the rib primal, making it well-suited for grilling or pan-searing to perfection.", "ribeye.png")
}