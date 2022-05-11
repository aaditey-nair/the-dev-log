function isEmail(email) {
  const newEmail = String(email);
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (newEmail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

export default isEmail;
