import {createElement, customAppendChild} from "./utils";

let users = []
const $items =document.querySelector('.items')

export function updateUsers() {
    let $userName = document.querySelector('.user'),
        $password = document.querySelector('.password'),
        $email = document.querySelector('.email')
    $userName.value = $userName.value.trim()
    const user = {name: $userName.value, password: $password.value, email: $email.value}
    users.push(user)
    update()
}
function update() {
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        let elem = users[i]
        console.log(`${elem.name}`)
        elem = createElement('div', 'item')
        elem.insertAdjacentHTML('afterbegin', `
                <div class="id">${elem.id}</div>
                <div class="userEl">${elem.name}</div>
                <div class="passwordEl">${elem.password}</div>
                <div class="emailEl">${elem.email}</div>
                <a href='#' class="view__profile">viewProfile</a>
                <button class="btn">&times;</button>
        
        `)
        console.log(elem)
        $items.appendChild(elem)
    }

}