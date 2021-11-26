/*eslint-disable*/
const reviewForm = document.querySelector('.review-form');

const myReview = async (review, rating, tour, user) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '../api/v1/reviews',
      data: {
        review,
        rating,
        tour,
        user
      }
    });

    if (res.data.status === 'success') {
        
      showAlert('success', 'Create review successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

if (reviewForm){
  reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user')).user._id;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
    const tour = document.getElementById('tourid').value;
    myReview(review, rating, tour, user);
});
}   