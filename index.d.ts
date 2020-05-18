import { OpenCVWASM } from './types/opencv-wasm';

export const cv: OpenCVWASM;

/**
 * Translate error number from OpenCV into a meaningful message
 * @param cvObject OpenCV object
 * @param err OpenCV error number 
 */
export function cvTranslateError(cvObject: OpenCVWASM, err: any): string | Error;
