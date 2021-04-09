import { TextlintRuleModule } from "@textlint/types";
import checkEndsWithPeriod from "check-ends-with-period";
import Source from "structured-source";

export interface Options {
  periodMarks?: string[];
  commaMarks?: string[];
}

const defaultOptions: Options = {
  periodMarks: ["。", "."],
  commaMarks: ["、", ","],
};

const report: TextlintRuleModule<Options> = (context, options) => {
  const { Syntax, RuleError, report, getSource, fixer } = context;
  const periodMarks = options?.periodMarks || defaultOptions.periodMarks;
  const commaMarks = options?.commaMarks || defaultOptions.commaMarks;
  const commaMarkRegExp = new RegExp(`[` + commaMarks!.join("") + `]`);
  return {
    [Syntax.Header](node) {
      const raw = getSource(node);
      const source = new Source(raw);
      const resultForPeriod = checkEndsWithPeriod(raw, { periodMarks });
      if (resultForPeriod.valid) {
        const index = source.positionToIndex({
          line: node.loc.start.line,
          column: resultForPeriod.index,
        });
        const ruleError = new RuleError("Ends with period", {
          index,
          fix: fixer.removeRange([
            resultForPeriod.index,
            resultForPeriod.index + 1,
          ]),
        });
        report(node, ruleError);
      }
      const resultForComma = commaMarkRegExp.exec(raw);
      if (resultForComma && resultForComma.length > 0) {
        const index = source.positionToIndex({
          line: node.loc.start.line,
          column: resultForComma.index,
        });
        const ruleError = new RuleError("Find comma", {
          index,
        });
        report(node, ruleError);
      }
      // if (commaMarkRegExp.test(raw)) {
      //   const index = source.positionToIndex({
      //     line: node.loc.start.line,
      //     column: resultForPeriod.index,
      //   });
      //   const ruleError = new RuleError("Ends with period", {
      //     index,
      //   });
      //   report(node, ruleError);
      // }
    },
  };
};

export default {
  linter: report,
  fixer: report,
};
