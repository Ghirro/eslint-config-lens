#Lens' ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use Lens shareable config, first run this:

```bash
npm i eslint-config-airbnb@0.1.0 eslint-config-lens babel-eslint eslint-plugin-react eslint-plugin-import
```

Then, add this to your .eslintrc file:

```
{
  "extends": "eslint-config-lens"
}
```
