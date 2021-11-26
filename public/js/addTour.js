/*eslint-disable*/
const AddTourForm = document.querySelector('.form--create');

const addTour = async (name, duration, maxGroupSize, difficulty,ratingsAverage,price,summary) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/tours',
      data: {
        name,
        duration,
        maxGroupSize,
        difficulty,
        ratingsAverage,
        price,
        summary
      }
    });

    if (res.data.status === 'success') {
        
      showAlert('success', 'Create Tour successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

if (AddTourForm){
  AddTourForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const duration = document.getElementById('duration').value;
    const maxGroupSize = document.getElementById('maxGroupSize').value;
    const difficulty = document.getElementById('difficulty').value;
    const ratingsAverage = document.getElementById('ratingsAverage').value;
    const price = document.getElementById('price').value;
    const summary = document.getElementById('summary').value;
    
    addTour(name, duration, maxGroupSize, difficulty,ratingsAverage,price,summary);
});
}   