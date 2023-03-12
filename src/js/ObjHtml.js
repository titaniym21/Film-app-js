// замена HTML елементов, которые необходимо создать при определенных условиях

function createFistMain (){
    console.log('createFistMain');
    const mainText = document.createElement('div');
    mainText.classList.add('main-text');
    mainText.innerHTML = `
    <h2>Watch your favorite movies</h2>
    <p>Watch your favorite movies and series online for free</p>
    `;
    const start = document.createElement('div');
    start.classList.add('start');
    start.innerHTML = `
    <input type="text" placeholder="Enter email adress">
    <button class="btn" id="startBtn">Get Started</button>
    `;
    const main = document.querySelector('.main');
    main.append(mainText);
    main.append(start);
}

// запустить функцию при первой загрузке страницы
module.exports = createFistMain;