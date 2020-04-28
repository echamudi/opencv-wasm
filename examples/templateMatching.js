const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');
const { JSDOM } = require('jsdom');
const { writeFileSync } = require('fs');
const { cv, cvTranslateError } = require('../');

function installDOM() {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.Image = Image;
    global.HTMLCanvasElement = Canvas;
    global.ImageData = ImageData;
    global.HTMLImageElement = Image;
}

(async () => {
    installDOM();

    try {
        const imageSource = await loadImage(__dirname + '/input/image-sample-2.png');
        const imageTemplate = await loadImage(__dirname + '/input/image-sample-2-template.png');
    
        let src = cv.imread(imageSource);
        let templ = cv.imread(imageTemplate);
        let processedImage = new cv.Mat();
        let mask = new cv.Mat();
    
        cv.matchTemplate(src, templ, processedImage, cv.TM_CCOEFF_NORMED, mask);
        cv.threshold(processedImage, processedImage, 0.999, 1, cv.THRESH_BINARY);
        processedImage.convertTo(processedImage, cv.CV_8UC1);

        let contours = new cv.MatVector();
        let hierarchy = new cv.Mat();
    
        cv.findContours(processedImage, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
        for (let i = 0; i < contours.size(); ++i) {
            let countour = contours.get(i).data32S; // Contains the points
            let x = countour[0];
            let y = countour[1];
            
            let color = new cv.Scalar(0, 255, 0, 255);
            let pointA = new cv.Point(x, y);
            let pointB = new cv.Point(x + templ.cols, y + templ.rows);
            cv.rectangle(src, pointA, pointB, color, 2, cv.LINE_8, 0);
        }
    
        const canvas = createCanvas(src.cols, src.rows);
        cv.imshow(canvas, src);
        writeFileSync(__dirname + '/test-output/template-matching-output.png', canvas.toBuffer('image/png'));

    } catch (err) {
        console.log(cvTranslateError(cv, err));
    }
})();
