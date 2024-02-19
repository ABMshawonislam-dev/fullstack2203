let secretValidator = (secret) => {
  if (secret.length < 6) {
    return true;
  } else {
    return false;
  }
};

module.exports = secretValidator;
