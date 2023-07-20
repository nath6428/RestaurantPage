export default function layout(){
    
    const header = document.createElement("div")
    const page = document.getElementById("page")
    const logo = document.createElement("img")
    const headerContainer = document.createElement("div")
    const bookTableButton = document.createElement("button")

    header.className =  "header"
    logo.src = "logo.png"
    logo.className = "logo"
    headerContainer.className = "header-container"
    bookTableButton.className = "book-button"
    bookTableButton.innerText = "Book A Table"

    page.appendChild(header)
    header.appendChild(logo)
    header.appendChild(headerContainer)
    header.appendChild(bookTableButton)
    
    for (let i = 0 ; i < 3; i++){
        
        const headerRedirectButton = document.createElement("button")
        const redirectList = ["Menu", "About Us", "Contact Us"]
        headerRedirectButton.innerText = redirectList[i]
        headerRedirectButton.id = redirectList[i]
        headerContainer.appendChild(headerRedirectButton)
    
    }


    
}

