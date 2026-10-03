// Menjaga path aset tetap benar di subpath GitHub Pages (mis. /Thanks-Irfan/)
export function assetUrl(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}