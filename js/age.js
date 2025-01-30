document.querySelector("#age").textContent = old("2005-11-29");
function old(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  const day = today.getDate() - birth.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }

  let result = age + " ans";

  if (age >= 100) {
    result += " (Je suis sûrement déjà mort)";
  }

  return result;
}
