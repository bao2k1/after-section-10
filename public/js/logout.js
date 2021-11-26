/*eslint-disable*/
// const hideAlert=()=>{
//     const el=document.querySelector('.alert');
//     if(el) el.parentElement.removeChild(el);
// };

//  const showAlert = (type, msg) => {
//     hideAlert();
//   const markup = `<div class="alert alert--${type}">${msg}</div>`;
//   document.querySelector('body').insertAdjacentHTML('afterbegin',markup);
//   window.setTimeout(hideAlert,2000);
// };
// const logOutBtn = document.querySelector('.nav__el--logout')

//  const logout = async ()=>{
//     try{
//         console('nnnnnnnnnnn');
//         const res = await axios({
//             method:'GET',
//             url: 'http://127.0.0.1:3000/api/v1/users/logout',
//         });
//         if(res.data.status==='success') {
//             location.reload(true);
//         };
//     }catch(err){
//         showAlert('error','Error logging out!Try again.')
//     }
// }
// if(logOutBtn) logOutBtn.addEventListener('click',logout)