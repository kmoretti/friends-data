const fs = require('fs')
const YAML = require('js-yaml')

const data = YAML.load(fs.readFileSync('link.yml', 'utf8'))

const friends = []
for (const entry of data) {
  if (entry.link_list) {
    for (const item of entry.link_list) {
      friends.push([item.name, item.link, item.avatar])
    }
  }
}

const result = { friends }

fs.writeFileSync('fcircle.json', JSON.stringify(result, null, 2))
console.log('fcircle.json 已生成')
