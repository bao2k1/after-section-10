/*eslint-disable*/

const deleteBtn = document.querySelector('.deleteBtn');
const id = document.getElementById('tourid').value;

const deleteTour = async () => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `/api/v1/tours/${id}`
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Delete Tour successfully');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

if (deleteBtn) {
  deleteBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(id);
    deleteTour();
    window.setTimeout(() => {
        location.assign('/');
      }, 1500);
  });
}
