

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log("Blocking: " + details.url);
        return { cancel: true };
    },
    { urls: listOfBlockedUrls_v2 },
    ["blocking"]
);