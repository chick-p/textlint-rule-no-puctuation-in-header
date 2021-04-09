import { TextlintRuleModule } from "@textlint/types";
import checkEndsWithPeriod from "check-ends-with-period";
import Source from "structured-source";

export interface Options {
  periodMarks?: string[];
}

const defaultOptions: Options = {
  periodMarks: ["。", "."],
};

const report: TextlintRuleModule<Options> = (context, options) => {
  const { Syntax, RuleError, report, getSource, fixer } = context;
  return {
    [Syntax.Header](node) {
      const raw = getSource(node);
      const source = new Source(raw);
      const resultForPeriod = checkEndsWithPeriod(
        raw,
        options || defaultOptions
      );
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
    },
  };
};

export default {
  linter: report,
  fixer: report,
};
