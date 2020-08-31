const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var username
const user_id = makeid(100)
console.log(user_id)

const text_area = document.getElementById("main-text-area")

const send = () => {
    if (username == undefined || username == "") {
        username = "User-"+makeid(5)
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