export default padLeft

function padLeft(str, size, padwith) {
  if (size <= str.length) {
    return str
  } else {
    return Array(size - str.length + 1).join(padwith || '0') + str
  }
}
