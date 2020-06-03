function passwordValidation(pass, user) {
  if (pass.length < 8 || pass === user) {
    return false;
  } else {
    for (let p of pass) {
      if (p === ' ') {
        return false;
      }
    }
  }
  return true;
}

const valid = passwordValidation('123456', 'Epinder');
console.log(valid);
