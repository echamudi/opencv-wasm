import * as OpenCV from './opencv';

/**
 * OpenCV Object
 */
export const cv: typeof OpenCV;

/**
 * Translate error number from OpenCV into a meaningful message
 * @param cvObject OpenCV object
 * @param err OpenCV error number 
 */
export function cvTranslateError(cvObject: typeof OpenCV, err: any): string | Error;
