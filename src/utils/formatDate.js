function formatDate(input) {
  let date = new Date(input).toUTCString();
  date = date.split(" ");
  date = date.filter((item) => item != date[4]).join(" ");
  return date;
}

export default formatDate;
