'use strict;'
console.log('Entering the js file');

var lookups
$(function () {
    // Do stuff to the DOM
    $('body').append('<p>Hello World!</p>');
    let requestURL = 'lookups.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const r = request.response;
        lookups = r
    }
});
