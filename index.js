module.exports = {
    cv: require('./opencv.js'),
    cvTranslateError: function (cv, err) {
        // Code modified from OpenCV TryIt playground
        // https://docs.opencv.org/3.4/d0/d84/tutorial_js_usage.html

        let errorStatement = undefined;

        if (typeof err === 'undefined') {
            errorStatement = '';
        } else if (typeof err === 'number') {
            if (!isNaN(err)) {
                if (typeof cv !== 'undefined') {
                    errorStatement = 'Exception: ' + cv.exceptionFromPtr(err).msg;
                }
            }
        } else if (typeof err === 'string') {
            let ptr = Number(err.split(' ')[0]);
            if (!isNaN(ptr)) {
                if (typeof cv !== 'undefined') {
                    errorStatement = 'Exception: ' + cv.exceptionFromPtr(ptr).msg;
                }
            }
        } else if (err instanceof Error) {
            errorStatement = err;
        }

        return errorStatement;
    }
};
