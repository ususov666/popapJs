const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popupContainer = document.getElementById('popupContainer');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');



openBtn.addEventListener('click', () => {
  popupContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

popupContainer.addEventListener('click', (e) => {
  if (e.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});

submitBtn.addEventListener('click', () => {
  const formData = {
    name: document.getElementById('name').value,
    lastName: document.getElementById('lastName').value,
    email:  document.getElementById('email').value,
    phone:  document.getElementById('phone').value,
    message:  document.getElementById('message').value,
  }

  const jsonData = JSON.stringify(formData);
  output.textContent = jsonData;

  popupContainer.style.display = 'none';
});