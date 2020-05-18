import * as VanillaMiradaCV from './mirada/opencv/_types';
import { FS } from './mirada/emscripten';

// Import definitions from Mirada, except the definitions that are going to be overidden
type OmitMiradaCV = "MatVector";

type MiradaCV = Omit<typeof VanillaMiradaCV, OmitMiradaCV>;

// Add fixes from the Mirada definitions
interface OpenCVWASM extends MiradaCV {
    // Set any to clear the wrongly assumptions in _hacks.ts

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    // InputArray: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    InputArrayOfArrays: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    InputOutputArray: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    InputOutputArrayOfArrays: any;

    /**
     * MatVector {
     *   push_back: [Function: MatVector$push_back] { argCount: 1 },
     *   resize: [Function: MatVector$resize] { argCount: 2 },
     *   size: [Function: MatVector$size] { argCount: 0 },
     *   get: [Function: MatVector$get] { argCount: 1 },
     *   set: [Function: MatVector$set] { argCount: 2 }
     * }
     */
    MatVector: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    OutputArray: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    OutputArrayOfArrays: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    GScalar: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Point2f: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    KeyPoint: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Point2l: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Point2d: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Size2d: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Size2f: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Size2l: any;

    /** Undocumented, please refer to OpenCV.js Docs https://docs.opencv.org/4.3.0/ */
    Rect_: any;

    /** Emscripten FS */
    FS: FS;
}

export { OpenCVWASM };