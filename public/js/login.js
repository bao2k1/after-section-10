/*eslint-disable*/
// type is 'success' or 'error'
const logOutBtn = document.querySelector('.nav__el--logout')
const loginForm = document.querySelector('.form--login');
const loginBtn =document.querySelector('.loginBtn');

 const hideAlert=()=>{
    const el=document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);
};

 const showAlert = (type, msg) => {
    hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin',markup);
  window.setTimeout(hideAlert,2000);
};
const login= async (email,password)=>{
   
    try{
        const res = await axios({
            method:'POST',
            url: '/api/v1/users/login',
            data:{
                email,password
            }
        });

        if(res.data.status==='success'){
            localStorage.setItem('user',JSON.stringify(res.data.data));
            showAlert('success','Logged successfully')
            window.setTimeout(()=>{
                location.assign('/')
            },1500)
        }
        
    }catch(err){
        showAlert('error',err.response.data.message);
    }
};

if(loginForm)
    loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email,password);
    });



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
//         console.log('nnnnnnnnnnn');
//         showAlert('error','Error logging out!Try again.')
//     }
// }
if(logOutBtn) logOutBtn.addEventListener('click',()=>{
    console.log('vvvv')
    const res =  axios({
        method:'GET',
        url: '/api/v1/users/logout',
    });
    localStorage.removeItem('user');
       setTimeout(()=>{
           location.reload(true);
       },1000)
    
})