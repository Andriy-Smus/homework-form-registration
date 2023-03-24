let f1 = document.forms.f1;
let f2 = document.forms.f2;

let firstNameRegExp = /^[A-Za-z]{2,20}$/;
let lastNameRegExp = /^[A-Za-z]{2,20}$/;
let emailRegExp1 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.com$/;
let emailRegExp2 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.net$/;
let emailRegExp3 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.ua$/;
let emailRegExp4 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.mail$/;
let passwordRegExp = /^\w{8,15}$/;


f1.first_name.oninput = function(){
  if(this.value.length !== 0) {
    document.querySelector('.first-name p').style.display = 'block';
    this.style.paddingTop = '18px'
  }
}
f1.last_name.oninput = function(){
  if(this.value.length !== 0) {
    document.querySelector('.last-name p').style.display = 'block';
    this.style.paddingTop = '18px'
  }
}
f1.email.addEventListener('input', function(){
  if(this.value.length !== 0) {
    document.querySelector('.email p').style.display = 'block';
    this.style.paddingTop = '18px'
  }
})
f1.password.oninput = function(){
  if(this.value.length !== 0) {
    document.querySelector('.password p').style.display = 'block';
    this.style.paddingTop = '18px'
  }
}
f2.email.oninput = function(){
  if(this.value.length !== 0) {
    document.querySelector('.container-1 .email p').style.display = 'block';
    this.style.paddingTop = '18px'
  }
}
f2.password.oninput = function(){
  if(this.value.length !== 0) {
    document.querySelector('.container-1 .password p').style.display = 'block';
    this.style.paddingTop = '18px'
  }
}

f1.first_name.onblur = function(){
  document.querySelector('.first-name p').style.display = 'none';
  this.style.paddingTop = '0'
}
f1.last_name.onblur = function(){
  document.querySelector('.last-name p').style.display = 'none';
  this.style.paddingTop = '0'
}
f1.email.onblur = function(){
  document.querySelector('.email p').style.display = 'none';
  this.style.paddingTop = '0'
  this.style.boxShadow = 'none';
}
f1.password.onblur = function(){
  document.querySelector('.password p').style.display = 'none';
  this.style.paddingTop = '0'
}
f2.email.onblur = function(){
  document.querySelector('.container-1 .email p').style.display = 'none';
  this.style.paddingTop = '0'
}
f2.password.onblur = function(){
  document.querySelector('.container-1 .password p').style.display = 'none';
  this.style.paddingTop = '0'
}

let allFirstNames = [];
let allLastNames = [];
let allEmail = [];
let allPassword = [];

f1.signUp.onclick = function(){
  if(firstNameRegExp.test(f1.first_name.value) && lastNameRegExp.test(f1.last_name.value) && passwordRegExp.test(f1.password.value)){
    if(emailRegExp1.test(f1.email.value) || emailRegExp2.test(f1.email.value) || emailRegExp3.test(f1.email.value) || emailRegExp4.test(f1.email.value)){
      if(localStorage.length > 0 && localStorage.getItem('allFirstNames') && localStorage.getItem('allLastNames') && localStorage.getItem('allEmail') && localStorage.getItem('allPassword') ){
        allFirstNames = JSON.parse(localStorage.getItem('allFirstNames'));
        allLastNames = JSON.parse(localStorage.getItem('allLastNames'));
        allEmail = JSON.parse(localStorage.getItem('allEmail'));
        allPassword = JSON.parse(localStorage.getItem('allPassword'));
      }
      if(!allEmail.some(email => email.toLowerCase() === f1.email.value.toLowerCase())){
        document.querySelector('.email-exist').style.display = 'none';
        allFirstNames.push(f1.first_name.value);
        allLastNames.push(f1.last_name.value);
        allEmail.push(f1.email.value);
        allPassword.push(f1.password.value);
        f1.first_name.focus();
        f1.reset(); 
        document.querySelector('.email-exist').style.display = 'none';
        document.querySelector('.uil-check-fn').style.display = 'none';
        document.querySelector('.uil-check-ln').style.display = 'none';
        document.querySelector('.uil-times-em').style.display = 'none';
        document.querySelector('.uil-check-em').style.display = 'none';
        document.querySelector('.uil-check-pw').style.display = 'none';
        f1.first_name.style.border = '1px solid rgb(236, 236, 236)';
        f1.last_name.style.border = '1px solid rgb(236, 236, 236)';
        f1.email.style.border = '1px solid rgb(236, 236, 236)';
        f1.email.style.boxShadow = 'none';
        f1.password.style.border = '1px solid rgb(236, 236, 236)';
        f1.email.addEventListener('input', function(){
          document.querySelector('.uil-check-em').style.display = 'none';
          document.querySelector('.uil-times-em').style.display = 'none';
          this.style.border = '1px solid rgb(236, 236, 236)';
          this.style.boxShadow = 'none';
        })
      } 
      if(allEmail.some(email => email.toLowerCase() === f1.email.value.toLowerCase())) {
        f1.email.focus();
        f1.last_name.style.border = '1px solid rgb(0, 150, 45)';
        f1.first_name.style.border = '1px solid rgb(0, 150, 45)';
        f1.email.style.border = '1px solid rgba(248, 62, 62, 0.884)';
        f1.email.style.boxShadow = '0px 0px 1px 3px rgba(236, 176, 176, 0.68)';
        f1.password.style.border = '1px solid rgb(0, 150, 45)';
        document.querySelector('.email-exist').style.display = 'block';
        document.querySelector('.uil-check-fn').style.display = 'block';
        document.querySelector('.uil-check-ln').style.display = 'block';
        document.querySelector('.uil-check-em').style.display = 'none';
        document.querySelector('.uil-times-em').style.display = 'block';
        document.querySelector('.uil-check-pw').style.display = 'block';
        f1.email.value = '';
        f1.email.addEventListener('input', function(){
          let testEmail1 = emailRegExp1.test(f1.email.value);
          let testEmail2 = emailRegExp2.test(f1.email.value);
          let testEmail3 = emailRegExp3.test(f1.email.value);
          let testEmail4 = emailRegExp4.test(f1.email.value);
          if(testEmail1 || testEmail2 || testEmail3 || testEmail4){
            document.querySelector('.uil-check-em').style.display = 'block';
            document.querySelector('.uil-times-em').style.display = 'none';
            this.style.border = '1px solid rgb(0, 150, 45)';
            this.style.boxShadow = '0px 0px 1px 3px rgba(176, 236, 181, 0.68)';
          }
          else{
            document.querySelector('.uil-times-em').style.display = 'block';
            document.querySelector('.uil-check-em').style.display = 'none';
            this.style.border = '1px solid rgba(248, 62, 62, 0.884)'
            this.style.boxShadow = '0px 0px 1px 3px rgba(236, 176, 176, 0.68)';
          }
        })
      }
      localStorage.setItem('allFirstNames', JSON.stringify(allFirstNames));
      localStorage.setItem('allLastNames', JSON.stringify(allLastNames));
      localStorage.setItem('allEmail', JSON.stringify(allEmail));
      localStorage.setItem('allPassword', JSON.stringify(allPassword));
    }
  }
}
f1.email.onfocus = function(){
  this.style.boxShadow = '0px 0px 1px 3px rgb(176 217 236 / 68%)';
}

document.querySelector('.link-sign-in').onclick = function(){
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.container-1').style.display = 'block';
}

document.querySelector('.link-sign-up').onclick = function(){
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.container-1').style.display = 'none';
}

f2.signIn.onclick = function(){
  if(localStorage.length > 0 && localStorage.getItem('allFirstNames') && localStorage.getItem('allLastNames') && localStorage.getItem('allEmail') && localStorage.getItem('allPassword') ){
    allFirstNames = JSON.parse(localStorage.getItem('allFirstNames'));
    allLastNames = JSON.parse(localStorage.getItem('allLastNames'));
    allEmail = JSON.parse(localStorage.getItem('allEmail'));
    allPassword = JSON.parse(localStorage.getItem('allPassword'));
    for(i = 0; i < localStorage.length; i++){
      if(f2.logEmail.value == allEmail[i] && f2.logPassword.value === allPassword[i]){
        console.log('true')
        document.querySelector('.container-2').style.display = 'flex';
        document.querySelector('.container-1').style.display = 'none'
        document.querySelector('.false').style.display = 'none';
        document.querySelector('.container-2 h2').textContent = `${allFirstNames[i]} ${allLastNames[i]}`;
        document.querySelector('.container-2 h3').textContent = `${allEmail[i]}`;
        f2.reset();
        return
      } else document.querySelector('.false').style.display = 'block';
    }
  }
}

document.querySelector('.bt-sign-up').onclick = function(){
  document.querySelector('.container-1').style.display = 'block';
  document.querySelector('.container-2').style.display = 'none';
  f1.reset();
}





