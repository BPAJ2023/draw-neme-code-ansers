const btn = document.querySelector('button');  
const section = document.querySelector('section');  
const code = 'ABCDEFGHIJ0123456789';
const lengthCode = 10;
const quantityCode = 10;
let newCode =''

const codeGeneretor = () => {
for (let i=0; i<quantityCode; i++) {
    for (let i=0; i<lengthCode; i++) {
        ;
        newCode += code[Math.floor(Math.random()*20)];
        
    }
        const div = document.createElement('div');
        div.textContent = newCode;
        section.appendChild(div);
        newCode = '';
}

}
btn.addEventListener('click', codeGeneretor);
