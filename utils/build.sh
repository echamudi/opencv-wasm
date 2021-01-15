git clone --branch 4.3.0 --depth 1 https://github.com/opencv/opencv.git

# Build
(
    cd opencv &&
    git checkout 4.3.0 &&

    # Add non async flag before compiling in the python build_js.py script
    docker run --rm --workdir /code -v "$PWD":/code "trzeci/emscripten:sdk-tag-1.39.4-64bit" python ./platforms/js/build_js.py build_wasm --build_wasm --build_test --build_flags "-s WASM=1 -s WASM_ASYNC_COMPILATION=0 -s SINGLE_FILE=0 "
)

# Copy compilatio result
cp -a ./opencv/build_wasm/ ./build_wasm

# Create Wasm file
node seperateBinaryFile.js

# Beautify JS
(
    cd ./build_wasm/bin &&
    npx js-beautify opencv.js -r
)

# Modify opencv.js
node opencvJsMod.js

# Copy bins to root
(
    cp ./build_wasm/bin/opencv.wasm ../opencv.wasm &&
    cp ./build_wasm/bin/opencv.js ../opencv.js &&
    cp -r ./build_wasm/ ../build_wasm_test
)
