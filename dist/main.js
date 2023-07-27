const page = document.getElementById("page")
export default page

import layout from '../src/index.js'
layout()
import {booking} from '../src/index.js'
booking()
import menu from '../src/menu.js'
menu()
import contact from '../src/contact.js'
contact()
import about from '../src/about.js'
about()


const menuMainDiv = document.getElementById("menuMainDiv")
const aboutUsMainDiv = document.getElementById("aboutUsMainDiv")
const contactUsMainDiv = document.getElementById("contactUsMainDiv")
const landingPageMainDiv = document.getElementById("landingPageMainDiv")

const menuButton = document.getElementById("Menu")
menuButton.addEventListener('click', () => {
    landingPageMainDiv.style.display = 'none'
    menuMainDiv.style.display = 'flex'
    aboutUsMainDiv.style.display = 'none'
    contactUsMainDiv.style.display = 'none'
})
const aboutUsButton = document.getElementById("About Us")
aboutUsButton.addEventListener('click', () => {
    landingPageMainDiv.style.display = 'none'
    menuMainDiv.style.display = 'none'
    aboutUsMainDiv.style.display = 'flex'
    contactUsMainDiv.style.display = 'none'
})
const contactUsButton = document.getElementById("Contact Us")
contactUsButton.addEventListener('click', () => {
    landingPageMainDiv.style.display = 'none'
    menuMainDiv.style.display = 'none'
    aboutUsMainDiv.style.display = 'none'
    contactUsMainDiv.style.display = 'flex'
    
})