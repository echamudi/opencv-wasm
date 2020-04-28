// code is modified from from https://docs.opencv.org/master/dc/de6/tutorial_js_nodejs.html

const Jimp = require('jimp');
const { cv } = require('../');

(async () => {
    let jimpSrc = await Jimp.read(__dirname + '/input/image-sample-1.jpg');

    var src = cv.matFromImageData(jimpSrc.bitmap);

    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

    new Jimp({
        width: dst.cols,
        height: dst.rows,
        data: Buffer.from(dst.data)
    })
        .write(__dirname + '/test-output/dilation.png');
})();
