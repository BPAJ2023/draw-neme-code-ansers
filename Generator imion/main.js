const input = document.querySelector('input');
const btnAddName = document.querySelector('button.addName');
const section = document.querySelector('section');

const draw = document.querySelector('button.losowanie');
const div = document.querySelector('div');
let names = [];

const addNewName = ()=> {
        if (input.value) {
            if (names.includes(input.value)) {
                alert(`ALE TO JUŻ BYŁO!!!!!!!!!!!!!!`);
                input.value = '';
            } else {
                names.push(input.value);
                section.textContent += `${input.value}, `;
                input.value = "";
        } }
    }
btnAddName.addEventListener('click', addNewName);

const drawName = ()=> {
    let index = Math.floor(Math.random()*names.length);
    div.textContent = names[index];
    console.log(names)
}
draw.addEventListener('click', drawName);