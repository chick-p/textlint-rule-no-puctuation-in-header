# textlint-rule-no-puctuation-in-header

A textlint rule to check the header text is ends with period mark.

## Install

Install with [npm](https://www.npmjs.com/):

```shell
npm install chick-p/textlint-rule-no-puctuation-in-header
```

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "no-puctuation-in-header": true
  }
}
```

Via CLI

```shell
textlint --rule no-puctuation-in-header README.md
```

## Fixble

textlint-rule--no-puctuation-in-header supports `--fix` option.
The `--fix` options can remove an ends with period.

## Options

Please write your configurations in `.textlintrc`.

```json
{
  "rules": {
    "no-puctuation-in-header": {
      "periodMarks": ["。", "."]
    }
  }
}
```

| Options     | Type            | Default value | Description  |
| :---------- | :-------------- | :------------ | :----------- |
| periodMarks | Array\<String\> | `["。", "."]` | period mark. |

## License

MIT © chick-p
