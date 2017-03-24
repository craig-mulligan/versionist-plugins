<a name="versionist-plugins"></a>

## versionist-plugins ⇒ <code>Object</code>
Welcome to the versionist-plugins documentation.

This document aims to describe all the functions supported by the module, as well as showing examples of their expected usage.

**Kind**: global namespace  
**Example**  
```js
var plugins = require('versionist-plugins')
module.exports = {
  updateVerion: [ plugins.git.commit, plugins.git.tag, plugins.git.push ]
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

* [versionist-plugins](#versionist-plugins) ⇒ <code>Object</code>
    * [.git](#versionist-plugins.git) : <code>object</code>
    * [.docker](#versionist-plugins.docker) : <code>object</code>

<a name="versionist-plugins.git"></a>

### versionist-plugins.git : <code>object</code>
**Kind**: static namespace of <code>[versionist-plugins](#versionist-plugins)</code>  
<a name="versionist-plugins.docker"></a>

### versionist-plugins.docker : <code>object</code>
**Kind**: static namespace of <code>[versionist-plugins](#versionist-plugins)</code>  
