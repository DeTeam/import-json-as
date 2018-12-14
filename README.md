# import * as a from './config.json'

This repo shows various cases around webpack processing `import * as` for json-modules.

```bash
$ yarn
$ rm -rf dist && webpack
```

Once built, `node dist/entry2/index.js` would print `undefined`, even though I'd expect `"testid"`.

------

Under some circumstances (with larger modules and more dependencies) webpack kick `ModuleConcatenationPlugin` in, which considers json imports as `"external"` and then instead of `undefined` one'd actually get the right thing (I'll try to make another example, haven't succeeded in making an isolated example outside of my project yet).
