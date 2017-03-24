<a name="versionist-plugins"></a>

## versionist-plugins ⇒ <code>Object</code>
Welcome to the boileroom documentation.

This document aims to describe all the functions supported by the module, as well as showing examples of their expected usage.

**Kind**: global namespace  

| Type | Description |
| --- | --- |
| <code>object</code> | anything |

**Example**  
```js
var plugins = require('versionist-plugins')
module.exports = {
  updateVerion: [ plugins.commit, plugins.tag, plugins.push ]
  template: [
    '## v{{version}} - {{moment date "Y-MM-DD"}}',
    '',
    '{{#each commits}}',
    '- {{capitalize this.subject}}',
    '{{/each}}'
  ].join('\n')
}
};
```
