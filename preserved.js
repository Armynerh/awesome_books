const titleInfo = document.getElementById('titleInput');
const authorInfo = document.getElementById('authorInput');

function savedFormData() {
  const formData = {
    titleInput: titleInfo.value,
    authorInput: authorInfo.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

titleInfo.addEventListener('input', savedFormData);
authorInfo.addEventListener('input', savedFormData);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    titleInfo.value = formData.titleInput;
    authorInfo.value = formData.authorInput;
  }
});