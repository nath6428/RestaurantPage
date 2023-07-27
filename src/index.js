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
    const bookingDiv = document.createElement("div")
    const inputBoxOne = document.createElement('input')
    const inputBoxTwo = document.createElement('input')

    bookingDiv.className = 'booking-div'
    inputBoxOne.className = 'booking-input'
    inputBoxTwo.className = 'booking-input'
    inputBoxOne.placeholder = 'Name'
    inputBoxTwo.placeholder = 'Phone Number (02X XXX XXXX)'

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
    
    bookingDiv.appendChild(inputBoxOne)
    bookingDiv.appendChild(inputBoxTwo)
}