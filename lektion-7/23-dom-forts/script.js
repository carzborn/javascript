/**
 * DOM - Document Object Model 102
 *
 */

 const listitemsEl = document.querySelector('ul');
 const listitems = document.querySelectorAll('li');
 const addButton = document.querySelector('#add');

 // for each list item add a event listener for click-events
listitems.forEach(listitem => {
    // add a event-listener for click-events
    listitem.addEventListener(`click`, (e) => {
    console.log(`do trycka på maj`, e);
    })
})

addButton.addEventListener(`click`, () => {
    listitemsEl.innerHTML += `<li>I am a new list item</li>`;
})