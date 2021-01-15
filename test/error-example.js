const Jimp = require('jimp');
const { cv, cvTranslateError } = require('../'); // replace with require('opencv-wasm') in prod

const errorExample = async () => {
    try {
        const imageSource = await Jimp.read(__dirname + '/../examples/input/image-sample-2.png');
        const imageTemplate = await Jimp.read(__dirname + '/../examples/input/image-sample-2-template.png');
    
        let src = cv.matFromImageData(imageSource.bitmap);
        let templ = cv.matFromImageData(imageTemplate.bitmap);
        let processedImage = new cv.Mat();
        let mask = new cv.Mat();
    
        cv.matchTemplate(src, templ, processedImage, cv.TM_CCOEFF_NORMED, mask);
        cv.threshold(processedImage, processedImage, 0.999, 1, cv.THRESH_BINARY);
        processedImage.convertTo(processedImage, cv.CV_16S); // This line causes findContours produce error

        let contours = new cv.MatVector();
        let hierarchy = new cv.Mat();
    
        cv.findContours(processedImage, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    } catch (err) {
        return cvTranslateError(cv, err);
    }

    return '';
};

module.exports = { errorExample };
