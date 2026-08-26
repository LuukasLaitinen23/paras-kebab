const registerDialog = document.getElementById('register-dialog');
const openRegisterDialog = document.getElementById('open-register-dialog');
const closeRegisterDialog = document.getElementById('close-register-dialog');
const registerForm = document.getElementById('register-form');

openRegisterDialog.addEventListener('click', () => {
  registerDialog.showModal();
});

closeRegisterDialog.addEventListener('click', () => {
  registerDialog.close();
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Account registered');

  registerForm.reset();
  registerDialog.close();
});
