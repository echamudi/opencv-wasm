let cv;

Module = {
    onRuntimeInitialized() {
        console.log(cv.getBuildInformation())
    }
}

cv = require('../');