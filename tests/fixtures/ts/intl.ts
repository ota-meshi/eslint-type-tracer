import { target } from "./target";

target(new Intl.Segmenter());

function fn<X extends Intl.Segmenter>(a: Intl.Segmenter, b: X): void {
  target(a, b);
}
