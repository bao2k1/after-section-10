// import axios from 'axios';
/*eslint-disable*/
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password')
//type is either 'password' or data
const updateSettings = async (data,type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `updated successfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
if (userDataForm)
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    updateSettings( {name, email},'data' );
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit',async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent='Updating...'
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings({passwordCurrent,password,passwordConfirm},'password');

    document.querySelector('.btn--save-password').textContent='SAVE PASSWORD'
    document.getElementById('password-current').value='';
    document.getElementById('password').value='';
    document.getElementById('password-confirm').value='';
    
  });
