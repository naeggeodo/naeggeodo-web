export interface Options {
  maxSizeMB?: number; // (default: Number.POSITIVE_INFINITY)
  maxWidthOrHeight?: number; // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
  // but, automatically reduce the size to smaller than the maximum Canvas size supported by each browser.
  // Please check the Caveat part for details.
  onProgress?: () => void; // optional, a function takes one progress argument (percentage from 0 to 100)
  useWebWorker?: boolean; // optional, use multi-thread web worker, fallback to run in main-thread (default: true)

  signal?: AbortSignal; // options, to abort / cancel the compression

  // following options are for advanced users
  maxIteration?: number; // optional, max number of iteration to compress the image (default: 10)
  exifOrientation?: number; // optional, see https://stackoverflow.com/a/32490603/10395024
  fileType?: string; // optional, fileType override e.g., 'image/jpeg', 'image/png' (default: file.type)
  initialQuality?: number; // optional, initial quality value between 0 and 1 (default: 1)
  alwaysKeepResolution?: boolean; // optional, only reduce quality, always keep width and height (default: false)
}
