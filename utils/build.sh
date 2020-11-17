git clone --branch 4.3.0 --depth 1 https://github.com/opencv/opencv.git
cd opencv
git checkout 4.3.0

# Add non async flag before compiling in the python build_js.py script
docker run --rm --workdir /code -v "$PWD":/code "trzeci/emscripten:sdk-tag-1.38.32-64bit" python ./platforms/js/build_js.py build_wasm --build_wasm --build_test --build_flags "-s WASM=1 -s WASM_ASYNC_COMPILATION=0 -s SINGLE_FILE=0 "

# Backup the default build_wasm resukt
cp -a ./build_wasm/ ./build_wasm_backup
find ./build_wasm/ -type d -exec chmod 755 {} \;
find ./build_wasm/ -type f -exec chmod 644 {} \;

# separate wasm
cd ../
node seperateBinaryFile.js
cd opencv/build_wasm/bin

# beautify opencv.js using js-beautify
npx js-beautify opencv.js -r

# Test using built in test
npm install
node tests.js # make sure 0 failed

# copy results to root
cd ../../..
cp ./opencv/build_wasm/bin/opencv.wasm ../opencv.wasm
cp ./opencv/build_wasm/bin/opencv.js ../opencv.js

# cp ./opencv/build_wasm/bin/haarcascade_frontalface_default.xml .
# cp ./opencv/build_wasm/bin/test_calib3d.js .
# cp ./opencv/build_wasm/bin/test_features2d.js .
# cp ./opencv/build_wasm/bin/test_imgproc.js .
# cp ./opencv/build_wasm/bin/test_mat.js .
# cp ./opencv/build_wasm/bin/test_objdetect.js .
# cp ./opencv/build_wasm/bin/test_photo.js .
# cp ./opencv/build_wasm/bin/test_utils.js .
# cp ./opencv/build_wasm/bin/test_video.js .
# cp ./opencv/build_wasm/bin/tests.js .
