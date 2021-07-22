export const filterError = (list, firstSet, secSet, thirdSet) => {
  let info = 0;
  let warning = 0;
  let error = 0;

  list.map((item) => {
    if (item.level === "INFO") {
      info += 1;
      return firstSet(info);
    } else if (item.level === "ERROR") {
      error += 1;
      return secSet(error);
    } else {
      warning += 1;
      return thirdSet(warning);
    }
  });
};
