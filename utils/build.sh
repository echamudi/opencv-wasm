git clone https://github.com/opencv/opencv.git
cd opencv
git checkout 4.3.0

# Add non async flag before compiling in the python build_js.py script
#         flags += "-s WASM_ASYNC_COMPILATION=0 "
#         flags += "-s SINGLE_FILE=0 "
docker run --rm --workdir /code -v "$PWD":/code "trzeci/emscripten:sdk-tag-1.38.32-64bit" python ./platforms/js/build_js.py build_wasm --build_wasm --build_test

# before continuing, beautify opencv.js using js-beautify and separate the wasm file using seperateBinaryFile.js
# update the variable in as ==> var wasmBinaryFile = "./opencv.wasm";

# test (use node LTS)
cd build_wasm/bin
npm install
node test.js

cd ../../..
cp ./opencv/build_wasm/bin/opencv.js .

