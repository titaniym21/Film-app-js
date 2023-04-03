function removeImageListener(element) {
    element.removeEventListener('click', function(event) {
        console.log('click');
        const target = event.target;
        console.log(target);
    });
}


module.exports = removeImageListener;