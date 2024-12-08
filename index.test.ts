import { add } from "./index";
// Import a private package here


// import { SJ } from "@parentlink/sj";
import { expect, test } from "vitest";

test(() => expect(add(5, 3)).toBe(8));

// test(() => expect(SJ.stringify({ hi: 5 })).toBeTypeOf("string"));
