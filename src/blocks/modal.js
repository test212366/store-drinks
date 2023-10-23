import {createElement, customAppendChild} from "./utils";
export let item,
    overlay
export const createModal = () => {
    let modalC
    item = createElement('div', 'modalW')
    customAppendChild([overlay = createElement('div', 'overlay'),modalC = createElement('div', 'modalC')], item)
    modalC.insertAdjacentHTML('afterbegin', `
             <form class="form">
                <small>UserName</small>
                <input class="user" type="text" required>
                <small>password</small>
                <input class="password" type="password" required>
                <small>email</small>
                <input class="email" type="email" required>
                <button class="btn modalB" type="submit">Create</button>
            </form>
    `)
    item.appendChild(modalC)
    document.body.appendChild(item)
}
