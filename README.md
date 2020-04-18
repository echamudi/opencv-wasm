# OpenCV-WASM

Precompiled OpenCV 4.3.0 to JavaScript + WebAssembly for node.js environment.

In this WASM compiled OpenCV, there's no need to have OpenCV installed in the machine or using node-gyp.
The entire OpenCV is already inside this package (opencv.js and opencv.wasm).

This compiled OpenCV has been tested with the testing tool from OpenCV with the result as follows:

```
Test result with node v12.16.2 LTS

Global summary:
┌───────┬───────┬────────────┬────────┬────────┬─────────┐
│ Files │ Tests │ Assertions │ Failed │ Passed │ Runtime │
├───────┼───────┼────────────┼────────┼────────┼─────────┤
│ 1     │ 31    │ 547        │ 0      │ 547    │ 1070    │
└───────┴───────┴────────────┴────────┴────────┴─────────┘
0 failed, 547 passed
```

## Installation
```
npm install opencv-wasm
```

## Usage

Because this OpenCV is the same as the compiled version for OpenCV.js, you can use almost the same documentation at the web: https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html

There are some minor initialization changes, because this module will be loaded synchronously instead of the OpenCV's default (asynchronously). 

You can check the files inside [examples](https://github.com/ezhmd/opencv-wasm/tree/master/examples) folder for some use cases.

## Error Handling

By default, mistakes in code will produce error code. You can use the following snippet to translate the error code into meaningful statement from OpenCV.

```js
const cv = require('opencv-wasm');

try {
    // Your OpenCV
} catch (err) {
    console.log(cvErrorPrinter(cv, err));
}
```

## Authors

* **Ezzat Chamudi** - [ezhmd](https://github.com/ezhmd)

See also the list of [contributors](https://github.com/ezhmd/opencv-wasm/graphs/contributors) who participated in this project.

## License

Code and documentation copyright 2019 the [OpenCV-WASM Project Authors](https://github.com/ezhmd/opencv-wasm/graphs/contributors). 

OpenCV-WASM code is licensed under [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause). Images, logos, docs, and articles in this OpenCV-WASM project are released under [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode).

Libraries, dependencies, and tools used in this project are tied with their own licenses respectively.
