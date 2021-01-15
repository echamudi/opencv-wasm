# OpenCV-Wasm

[![Build Status](https://travis-ci.org/echamudi/opencv-wasm.svg?branch=master)](https://travis-ci.org/echamudi/opencv-wasm)

Precompiled OpenCV 4.3.0 to JavaScript + WebAssembly for node.js environment.

In this Wasm-compiled OpenCV, there's no need to have OpenCV installed in the machine. The entire OpenCV library is already inside this package (`opencv.js` and `opencv.wasm`). This module has zero dependencies.

## Examples

| Code | Input | Output |
|---|---|---|
| [dilation.js](https://github.com/echamudi/opencv-wasm/blob/master/examples/dilation.js) | ![image sample 1](https://github.com/echamudi/opencv-wasm/blob/master/examples/input/image-sample-1.jpg?raw=true) | ![dilation](https://github.com/echamudi/opencv-wasm/blob/master/examples/expected-output/dilation.png?raw=true) |
| [templateMatching.js](https://github.com/echamudi/opencv-wasm/blob/master/examples/templateMatching.js) | source:<br>![image sample 2](https://github.com/echamudi/opencv-wasm/blob/master/examples/input/image-sample-2.png?raw=true) <br>template:<br> ![image sample 2 template](https://github.com/echamudi/opencv-wasm/blob/master/examples/input/image-sample-2-template.png?raw=true) | ![template matching](https://github.com/echamudi/opencv-wasm/blob/master/examples/expected-output/template-matching.png?raw=true) |

## Installation
```
npm install opencv-wasm
```

## Usage

Because this module is using the same code as the official OpenCV.js for the web, you can use the same documentation at the web: https://docs.opencv.org/4.3.0/d5/d10/tutorial_js_root.html

There are some minor initialization changes, because this module will be loaded synchronously instead of the OpenCV's default (asynchronously). 

You can check the files inside [examples](https://github.com/echamudi/opencv-wasm/tree/master/examples) folder as reference on how to initialize, loading images, and saving images.

## Error Handling

By default, mistakes in code will produce error code. You can use the following snippet to translate the error code into meaningful statement from OpenCV.

```js
const { cv, cvTranslateError } = require('opencv-wasm');

try {
    // Your OpenCV code
} catch (err) {
    console.log(cvTranslateError(cv, err));
}
```

## Versioning

This npm module uses the following versioning number:
```
<opencv version>-<this module version>
```
For Example
```
4.3.0-1
OpenCV version 4.3.0
OpenCV-Wasm Module version 1
```

## Development

### Building

Run the following script on macOS or Linux (tested on Ubuntu). You need docker on the system.

```
npm install
(cd ./utils && sh ./build.sh)
(cd utils && node generateCvProps.js)
```

### Testing

After completing the build script, you can run the test provided by OpenCV, and the test from this repo.

```sh
# OpenCV's test
(cd ./build_wasm_test/bin && npm install)
(cd ./build_wasm_test/bin && node tests.js)

# This repo's test
npm test
```

## Authors

* **Ezzat Chamudi** - [echamudi](https://github.com/echamudi)

See also the list of [contributors](https://github.com/echamudi/opencv-wasm/graphs/contributors) who participated in this project.

## License

Copyright © 2020 [Ezzat Chamudi](https://github.com/echamudi) and [OpenCV-Wasm Project Authors](https://github.com/echamudi/opencv-wasm/graphs/contributors)

OpenCV-Wasm code is licensed under [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause). Images, logos, docs, and articles in this project are released under [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode).

Libraries, dependencies, and tools used in this project are tied with their licenses.
