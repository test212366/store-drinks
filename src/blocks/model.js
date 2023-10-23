import {createModal, item, overlay} from "./modal";
import {closeModal, createElement, customAppendChild, showModal} from "./utils";
import {updateUsers} from "./users";
createModal()
const $buttonCreate = document.querySelector('.create'),
    $form = document.querySelector('.form')

document.body.addEventListener('click', e => {
    if (e.target == $buttonCreate) showModal()
    else if(e.target == overlay) closeModal()
})
$form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(1)
    updateUsers()
} )
