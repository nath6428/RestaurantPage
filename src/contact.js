import page from "../dist/main.js"
export default function contact(){

    const mainDiv = document.createElement("div")
    mainDiv.className = "mainDiv"
    mainDiv.id = "contactUsMainDiv"
    page.appendChild(mainDiv)

    const contactDetails = document.createElement("p")
    contactDetails.className = "contact-details"
    contactDetails.innerText = "Steaktown Steakhouse\n    Address: 123 Fake Street, Cityville\nPhone: (555) 123-4567\nEmail: info@steaktown.com\nWebsite: www.steaktown.com"
    mainDiv.appendChild(contactDetails)
}