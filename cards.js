// Get what the user typed in when save button is clicked
document.querySelector("#createButton").addEventListener(
    "click",
    () => {
        const whatTheUserTypedIn = document.querySelector("#userInput").value
        const cardHTML = createCard(whatTheUserTypedIn)
        appendToDom(cardHTML)
    }
)

let cardNumber = 0

// Turn user input into HTML
const createCard = userText => {
    // HTML needs a section
    // HTML needs a button
    cardNumber++
    return `
        <section id="card--${cardNumber}">
            <div>${userText}</div>
            <button id="button--${cardNumber}">Delete Me</button>
        </section>
    `
}

const cardContainer = document.querySelector("#cards")

// Section get appended to DOM
const appendToDom = newCard => cardContainer.innerHTML += newCard

// User clicks delete, somehow remove card for the same button
document.querySelector("#cards").addEventListener(
    "click",
    () => {
        if (event.target.nodeName.toLowerCase() === "button") {
            const uniqueId = event.target.id.split("--")[1]
            const cardToDelete = document.querySelector(`#card--${uniqueId}`)
            cardContainer.removeChild(cardToDelete)
        }
    }
)

