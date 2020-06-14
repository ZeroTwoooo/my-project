var username
const text_area = document.getElementById("main-text-area")
const send = () => {
    if (username == undefined) {
        username = "User1"
    }
    const user_text = document.getElementById("user_input_text")
    const text = document.createElement("p")
    text.id = "unique-text-cfaf"
    text.className = "unique-user-text"
    text_area.appendChild(text)
    text.innerHTML = username + ": " + user_text.value
    setTimeout(() => {
        text.parentNode.removeChild(text)
    }, 10000)
}
const set_username = () => {
    username = document.getElementById("user_input_username").value
}