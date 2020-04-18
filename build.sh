git clone https://github.com/opencv/opencv.git
cd opencv
git checkout 4.3.0
docker run --rm --workdir /code -v "$PWD":/code "trzeci/emscripten:sdk-tag-1.38.32-64bit" python ./platforms/js/build_js.py build_wasm --build_wasm --build_test

# test (use node carbon)
cd build_wasm/bin
npm install
node test.js

cd ../../..
cp ./opencv/build_wasm/bin/opencv.js .