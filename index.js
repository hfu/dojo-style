const config = require('config')
const fs = require('fs')

let style = JSON.parse(fs.readFileSync(config.get('style')))
let rgb = require(config.get('rgb'))

for (const a of rgb) {
  const [r, g, b, code] = a
  style.layers.push({
    id: `dojo-${code}`,
    type: 'fill',
    source: 'dojo',
    'source-layer': 'dojo',
    filter: ['all', ['==', 'code', code]],
    paint: {
      'fill-color': `rgba(${r}, ${g}, ${b}, 0.5)`
    }
  })
}

console.log(JSON.stringify(style, null, 2))

