


function addImageLisener(element) {
    element.addEventListener('click', function(event) {
            console.log('click');
            const target = event.target;
            console.log(target);
        }
    )
}

module.exports = addImageLisener;
