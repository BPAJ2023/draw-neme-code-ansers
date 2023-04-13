const options = [];
const input = document.querySelector('input');

const addOptions = (e)=>{
    e.preventDefault();
    options.push(input.value);
    alert(`DODAŁEŚ-> "${input.value}"`);
    input.value = '';
}
const showAdvice = ()=>{
    const newOptions = input.value;
    const h1 = document.querySelector('h1');
    h1.textContent = options[Math.floor(Math.random()*options.length)];
}

document.querySelector('button.add').addEventListener('click', addOptions);
document.querySelector('button.clean').addEventListener('click', e => {
    e.preventDefault();
    options.length = 0;
});
document.querySelector('button.showAdvice').addEventListener('click', showAdvice);
document.querySelector('button.showOptions').addEventListener('click', () => {
    alert(options.join(`---`));
});