# To Install:

set:

```json
"eslintConfig": {
	"extends": [
		"ugoromi"
	]
},
```

in your package.json
then run
`npx install-peerdeps --dev eslint-config-ugoromi`

## Sub configs:

There are specific configs for many types of projects, and more will be added in the future
To use a specific config you just to extend `ugoromi/configName` instead of `ugoromi`
ex. for React set

```json
"eslintConfig": {
	"extends": [
		"ugoromi/react"
	]
},
```

### At the moment the following configs are available:

- node
- react
- typescript

## Prettier

You can also add a `.prettierrc` file with whatever rules you want in the root of your project and eslint will incorporate it in the linting process
[This is my .prettierrc file](https://gist.github.com/UgoRomi/281365d187e45716cacfcbe90411d54c)

## Credits:

[eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos) for the idea and reference
[This freecodecamp article by Leonardo Faria](https://www.freecodecamp.org/news/creating-your-own-eslint-config-package/)
and [The official docs](https://eslint.org/docs/developer-guide/shareable-configs) for instructions on how to make this
