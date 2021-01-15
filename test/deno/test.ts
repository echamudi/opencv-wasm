import { cv, cvTranslateError } from '../../mod.ts';
import { assertStrictEquals, assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";

Deno.test("Basic test", () => {
    let mat = cv.matFromArray(2, 3, cv.CV_8UC1, [1, 2, 3, 4, 5, 6]);

    assertStrictEquals(mat.cols, 3);
    assertStrictEquals(mat.rows, 2);
    assertEquals(mat.data8S, new Int8Array([1,2,3,4,5,6]));
});
