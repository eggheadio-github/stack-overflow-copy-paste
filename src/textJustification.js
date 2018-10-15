export default textJustification

/**
 *
 * Original Source: https://www.malikbrowne.com/blog/text-justification-coding-question
 *
 * Description: Given an array of words(input) and a length L, format the text such that each
 *              line has exactly L characters and is fully (left and right) justified.
 *
 * @param {Array} input - String array to be justified
 * @param {Integer} L - Length of characters per line
 * @return {Array} output - The string fully justified
 */

function textJustification(input, L) {
  let index = 0
  const output = []
    
  while (index < input.length) {
        
    let count = input[index].length
    let last = index + 1
        
    while (last < input.length) {
            
      if (input[last].length + count + 1 > L) {
        break
      }
      count += input[last].length + 1
      last++
    }
        
    let line = ''
    const diff = last - index - 1
        
    if (last === input.length || diff === 0) {
            
      for (let i = index; i < last; i++) {
        
        line += `${input[i]} `
      }
            
      line = line.substr(0, line.length - 1)
      
      for (let i = line.length; i < L; i++) {
        line += ' '
      }

    } else {

      const space = (L - count) / diff
      const remainder = (L - count) % diff
            
      for (let i = index; i < last; i++) {
        line += input[i]
                
        if (i < last - 1) {
                    
          const max = space + ((i - index) < remainder ? 1 : 0)
                    
          for (let j = 0; j <= max; j++) {
            line += ' '
          }
        }
      }
    }
    
    output.push(line)
    index = last
  }
  return output
}

/* eslint complexity: "off", max-depth: "off" */
