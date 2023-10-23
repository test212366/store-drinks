import {item} from "./modal";

export const createElement =  (tag, elClass = '', text = '') => {
    const element = document.createElement(tag)
    element.classList.add(elClass)
    element.textContent = text
    return element
}
export const customAppendChild = (array, item) => {
    array.forEach(element => {
        item.appendChild(element)
    })
}
export const showModal = () => {
    item.classList.add('open')
}
export const closeModal = () => {
    item.classList.remove('open')
}
