declare module "check-ends-with-period" {
  function checkEndsWithPeriod(
    lineText: string,
    options: {
      periodMarks?: string[];
    }
  ): { valid: boolean; periodMark: string; index: number };
  export = checkEndsWithPeriod;
}
