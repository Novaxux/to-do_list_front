// resize-icons.js
import sharp from "sharp";
const sizes = [48, 72, 96, 128, 144, 152, 192, 512];

sizes.forEach((size) => {
  sharp("public/icons/submit/submit.svg")
    .resize(size, size)
    .toFile(`public/icons/submit/${size}x${size}.png`);
});
