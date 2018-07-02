const signup = document.querySelector(`#signup`);

signup.addEventListener(`submit`, (e) => {

  e.preventDefault();

  const data = new FormData(signup);
  fetch(signup.action, {
    method: `POST`,
    body: data
  }).then((evt) => console.log(evt));

  signup.contact.value = `Неверный логин или пароль`;
  signup.pass.value = ``;
  signup.contact.style.color = `#f00`;
});
