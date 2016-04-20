chrome.history.onVisited.addListener(urlCheck);


function urlCheck (result) {
    console.log('url: ', result);

    if (result.url.indexOf("facebook") !== -1) {
        console.log('Facebook Detected!');
        // $('#stream_pagelet').remove();
    }
}