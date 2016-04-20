// chrome.history.onVisited.addListener(urlCheck);


// function urlCheck (result) {
//     console.log('url: ', result);

//     if (result.url.indexOf("facebook") !== -1) {
//         console.log('Facebook Detected!');
//         // $('#stream_pagelet').remove();

//         document.getElementById('globalContainer').style.BackgroundImage = chrome.extension.getURL("src/img/steve.gif");

//     }
// }
console.log('Background running');


chrome.webNavigation.onCompleted.addListener(function(details) {
    console.log('Comleted load', details);
    if (details.url.indexOf('facebook') !== false) {
        console.log('Facebook Found in URL');

        imgURL = chrome.extension.getURL("src/img/steve.gif");

        console.log('Steve URL: ', imgURL);

        chrome.tabs.executeScript(details.tabId, {
            code: 'document.getElementsByClassName("cardRightCol")[0].style.backgroundImage =  "url(' + imgURL +')";'
        });
    }
}, {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: '.facebook.'
    }],
});