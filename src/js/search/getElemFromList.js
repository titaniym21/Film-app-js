'use strict';

const searchById = require('./searchById');

/** @module getElemFromList */

/** 
 * The getElemFromList function checks on which tag the listener is on, <br/>
 * if DIV then considers the attribute (id) of the parent element <br/>
 * and calls the function passing the id argument. <br/>
 * The getElemFromList function uses various functions of the searchById module: <br/>
 * [searchById]{@link module:searchById~searchById}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {object} event - the object where the listener fired
 * @returns {undefined}
 */

function getElemFromList(event) {
    if (event.target.parentNode.tagName === 'DIV') {
        let id = event.target.parentNode.lastChild.getAttribute('alt');
        searchById(id)
    }
}

module.exports = getElemFromList;