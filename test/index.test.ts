import TextLintTester from "textlint-tester";
import rule from "../src/index";
const tester = new TextLintTester();
tester.run("rule", rule, {
  valid: [
    {
      text: `## 見出し`,
    },
    {
      text: `# 見出し1\n内容\n\n## 見出し2`,
    },
    { text: `# 見出しの途中。に句点` },
    {
      text: `# 見出し.`,
      options: {
        periodMarks: ["。"],
      },
    },
  ],
  invalid: [
    {
      text: `## 見出し。`,
      errors: [
        {
          message: "Ends with period",
          line: 1,
          column: 7,
        },
      ],
    },
    {
      text: `## 見出し。`,
      output: `## 見出し`,
      errors: [
        {
          message: "Ends with period",
          line: 1,
          column: 7,
        },
      ],
    },
  ],
});
