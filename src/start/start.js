
const {checkLogFile} = require('../js/loadInfo');
const requests = require('../js/requests');

const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
    console.log('startBtn');
    checkLogFile(requests);
});
