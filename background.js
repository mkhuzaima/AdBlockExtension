

// block extension
listOfBlockedUrls = [
    "*://partner.googleadservices.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googletagservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googleadservices.com/*",
    "*://*.zedo.com/*",
    "*://*.adbrite.com/*",
    "*://*.adbureau.net/*",
    "*://*.carbonads.net/*",
    "*://*.cdn.carbonads.com/*",
    "*://*.cdn.carbonads.net/*",
    "*://*.cdn.doubleclick.net/*",
    "*://*.cdn.googletagservices.com/*",
    "*://*.cdn.googleadservices.com/*",
    "*://*.cdn.zedo.com/*",
    "https://www.youtube.com/get_midroll_info*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log("Blocking: " + details.url);
        return { cancel: true };
    },
    { urls: listOfBlockedUrls },
    ["blocking"]
);
