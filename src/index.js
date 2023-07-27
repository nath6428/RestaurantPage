var bookTableButton;

export default function layout(){
    
    const header = document.createElement("div")
    const page = document.getElementById("page")
    const imageClickable = document.createElement("a")
    const logo = document.createElement("img")
    const headerContainer = document.createElement("div")
    bookTableButton = document.createElement("button")


    header.className =  "header"
    imageClickable.href = "index.html"
    logo.src = "logo.png"
    logo.className = "logo"
    headerContainer.className = "header-container"
    bookTableButton.className = "book-button"
    bookTableButton.innerText = "Book A Table"
    
    page.appendChild(header)
    header.appendChild(imageClickable)
    imageClickable.appendChild(logo)
    header.appendChild(headerContainer)
    header.appendChild(bookTableButton)
    
    for (let i = 0 ; i < 3; i++){
        
        const headerRedirectButton = document.createElement("button")
        const redirectList = ["Menu", "About Us", "Contact Us"]
        headerRedirectButton.innerText = redirectList[i]
        headerRedirectButton.id = redirectList[i]
        headerContainer.appendChild(headerRedirectButton)
    
    }

    const mainDiv = document.createElement("div")
    mainDiv.className = "mainDiv"
    mainDiv.id = "landingPageMainDiv"
    mainDiv.style.display = 'flex'
    page.appendChild(mainDiv)

    const landingPage = document.createElement("p")
    landingPage.className = "about-para"
    landingPage.innerText = `Welcome to SteakTown, a sizzling haven for meat lovers and culinary enthusiasts! Experience the joy of delightful flavors and tender bites as we serve up a mouthwatering selection of the finest cuts of beef.

    At SteakTown, we're passionate about delivering an unforgettable dining experience. With handpicked, marbled cuts of beef, each steak is a masterpiece crafted to perfection.
    
    Our menu offers a symphony of tastes, blending classic favorites with innovative culinary creations, ensuring there's something for every palate.
    
    Step into our warm and welcoming ambiance, adorned with timeless elegance, for a memorable gathering with friends and loved ones.
    
    Our attentive and friendly staff are here to cater to your every need, making sure your time at SteakTown is nothing short of perfection.
    
    Join us on this journey as we honor our heritage while embracing the future of culinary excellence.`
    
    mainDiv.appendChild(landingPage)
    
}

export function booking(){
    
    let toggle = 0;

    const bookingForm = document.createElement("form")
    bookingForm.className = "booking-form"
    bookingForm.addEventListener('submit', () => {alert("Booking complete.")})
    
    const bookingDiv = document.createElement("div")
    bookingDiv.className = 'booking-div'
    bookingDiv.appendChild(bookingForm)
    
    const inputBoxOne = document.createElement('input')
    inputBoxOne.className = 'booking-input'
    inputBoxOne.required = true
    inputBoxOne.placeholder = 'Name'

    const inputBoxTwo = document.createElement('input')
    inputBoxTwo.className = 'booking-input'
    inputBoxTwo.required = true
    inputBoxTwo.placeholder = 'Phone Number (02X XXX XXXX)'

    const bookingTimeSelection = document.createElement('select')
    bookingTimeSelection.className = "booking-time-selection"
    bookingTimeSelection.required = true

    const submitButton = document.createElement('button')
    submitButton.className = "submit-button"
    submitButton.innerText = "Book"
    
    
    
    bookTableButton.addEventListener('click', () => {
        
        bookingDiv.style.width = bookTableButton.offsetWidth + 'px'
        if (toggle == 0){
            
            page.appendChild(bookingDiv)
            toggle = 1
        }
        else{
            page.removeChild(bookingDiv)
            toggle = 0
        }
        
        
    })
    
    bookingForm.appendChild(inputBoxOne)
    bookingForm.appendChild(inputBoxTwo)
    bookingForm.appendChild(bookingTimeSelection)
    bookingForm.appendChild(submitButton)
    for (let time = 9; time < 23; time++){
        
        const timeOption = document.createElement('option')
        timeOption.innerText = time + ":00 - " + (time + 1) + ":00"
        bookingTimeSelection.appendChild(timeOption)
    }
    bookingTimeSelection.selectedIndex = -1
}