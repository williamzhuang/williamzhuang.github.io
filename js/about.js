// The elements that are the to be used for the asset
var assetElems = document.querySelectorAll(".ale"), 
    urlCreator = window.URL || window.webkitURL; // For URL creator usage later
    
// Add the asset loading effect for each element
[].forEach.call(assetElems, loadAsset); 

// Load the asset in the way specified by the data attribute
function loadAsset(elem) {
    // Determine which loader to create
    var progressBarElem = getProgressBarElem(),
        isVid = elem.getAttribute("data-ale-isVid") != undefined ? elem.getAttribute("data-ale-isVid") : false,
        assetLoc = elem.getAttribute("data-ale-src");

    // Load the asset via XHR so that we can track the progress    
    var req = new XMLHttpRequest();
    // Attach the finished load listener
    req.onload = loadFinished;
    // Attach the progress listener
    req.onprogress = loading; 
    // Actually make the request
    req.open('GET', assetLoc, true);
    req.responseType = 'blob'; // This must be after the open - FF can't handle do it before https://bugzilla.mozilla.org/show_bug.cgi?id=1110761
    req.send();

    // Determine which progress bar to use given the data attribute and return it
    function getProgressBarElem() {
        var type = elem.getAttribute("data-ale-type");
        
        // Choose the progress bar type based on the lil-type
        if(type !== "diagonal") {
            console.log("A diagonal type was not given! Creating one anyway");
        } else { 
            var line = new ProgressBar.Line(elem);
            
            // Fix an IE issue
            line.svg.setAttribute("preserveAspectRatio", "xMinYMid");
            
            return line;
        } 
    }

    // Update the progress bar with the current value
    function loading(evt) {
        if (evt.lengthComputable) {
            // ProgressBar.js animates using 0.0-1.0 as a range, so we need the progress in terms of that
            progressBarElem.animate(evt.loaded / evt.total);
        }
    }

    // Remove the loader when it's done and show the image
    function loadFinished() {
        // Currently, if it's not a video it's an image
        if(!isVid) {
            // Create a URL for the given response
            var imgUrl = urlCreator.createObjectURL(req.response);
            // Set that URL as the background of the element given
            elem.style.backgroundImage = 'url(' + imgUrl + ')';
        } else {
            var video = document.createElement('video');
            video.controls = true;
            video.src = urlCreator.createObjectURL(req.response);
            elem.appendChild(video); // Append the video since we can't do a background-video
        }
        
        // Finish the animation
        progressBarElem.animate(1, function () {            
            // Add the "complete" class to show it's done 
            elem.classList.add("complete");
        });
    }
}