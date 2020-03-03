import amphtmlValidator from "amphtml-validator";

export function validateAmpHtml(str) {
  // returns promise, which resolves to either boolean true or error object with remarks
  return amphtmlValidator.getInstance().then((validator) => {
    const result = validator.validateString(str);
    return result.status === "PASS" ? true : collectError(result);
  });

  function collectError(result) {
    let output = `AmpValidator status => ${result.status}\n`;
    // tslint:disable-next-line:prefer-for-of
    for (let ii = 0; ii < result.errors.length; ii++) {
      const error = result.errors[ii];
      let msg = "line " + error.line + ", col " + error.col + ": " + error.message;
      if (error.specUrl !== null) {
        msg += " (see " + error.specUrl + ")";
      }
      output += `${msg}\n`;
    }
    return output;
  }
}
