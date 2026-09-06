import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Build static, high-DPI renditions rather than relying on the browser to
// repeatedly downsample a 4272px image inside a composited sticky sidebar.
const source = fileURLToPath(
  new URL('../public/images/udara-sandesha.jpg', import.meta.url),
);
const destination = new URL('../public/images/portrait/', import.meta.url);
await mkdir(destination, { recursive: true });
for (const width of [480, 960, 1440, 1920]) {
  await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true, kernel: 'lanczos3' })
    .webp({ lossless: true })
    .toFile(fileURLToPath(new URL(`udara-${width}.webp`, destination)));
}
