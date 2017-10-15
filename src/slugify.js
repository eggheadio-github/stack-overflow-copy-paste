export default slugify

/**
 * Original Source: https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
 *
 * This function will slugify text given to it.
 *
 * @param {string} text - The text to slugify
 * @return {string} - The slugified string
 */
function slugify(text) {
  return text.toString()
    .toLowerCase()
    .trim() // Trim whitespaces at start and end of text
    .replace(/\s+/g, '-') // Replace whitespaces with dash (-)
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple dashes/hyphens with single dash (-)
    .replace(/^-+/, '') // Remove dash (-) from start of text
    .replace(/-+$/, '') // Remove dash (-) from end of text
}
