import page from "../dist/main.js"
export default function about(){

    const mainDiv = document.createElement("div")
    mainDiv.className = "mainDiv"
    mainDiv.id = "aboutUsMainDiv"
    page.appendChild(mainDiv)

}