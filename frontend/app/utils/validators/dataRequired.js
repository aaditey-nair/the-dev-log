function dataRequired(string) {
  if (
    String(string) === "" ||
    typeof string === undefined ||
    typeof string === null
  ) {
    return false;
  } else {
    return true;
  }
}

export default dataRequired;
