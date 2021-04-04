# textlint-rule-ja-no-puctuation-in-header

## Install

Install with [npm](https://www.npmjs.com/):

```shell
npm install textlint-rule-ja-no-puctuation-in-header
```

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "ja-no-puctuation-in-header": true
  }
}
```

Via CLI

```shell
textlint --rule ja-no-puctuation-in-header README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```shell
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```shell
npm test
```

## License

MIT © chick-p
