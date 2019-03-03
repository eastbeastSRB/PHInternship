// Get values from input
let email = document.querySelector('#inputEmail').value,
  age = document.querySelector('#inputAge').value,
  phone_num = parseInt(document.querySelector('#inputPhoneNum').value),
  available_to_start = document.querySelector('#dateInput').value,
  techical_skills = document.querySelector('#inputTecSkills').value,
  personal_present = document.querySelector('#inputPersPresent').value;

// Load Event listeners

// Reg expression for Name
document.getElementById('inputName').addEventListener('blur', validateName);
// Reg expression for Email
document.getElementById('inputEmail').addEventListener('blur', validateEmail);
// Reg exoression for Phone Num
document.getElementById('inputPhoneNum').addEventListener('blur', validatePhone);
// Reg expression for start Date
document.getElementById('dateInput').addEventListener('blur', validateDate);


// Validate Name
export function validateName() {
  const name = document.getElementById('inputName');
  const re = /^[a-zA-Z]{2,10}$/;

  // Add and remove class for Data Validation
  if (name.value === '' || !re.test(name.value)) {
    name.classList.remove('is-valid');
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
    name.classList.add('is-valid');
  }

  return name.value;
}


// Validate Email
export function validateEmail() {
  const email = document.getElementById('inputEmail');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  // Add and remove class for Data Validation 
  if (!re.test(email.value)) {
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
  }

  return email.value;
}


// Validate phone
export function validatePhone() {
  const phone = document.getElementById('inputPhoneNum');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{3,4}$/;

  // Add and remove class for Data Validation 
  if (!re.test(phone.value)) {
    phone.classList.remove('is-valid');
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
  }

  return phone.value;
}


// Validate Date
export function validateDate() {
  const elem = document.getElementById('dateInput');
  const re = /^([0-9]{2})\-([0-9]{2})\-([0-9]{4})$/;

  if (re.test(elem.value)) {
    elem.classList.remove('is-valid');
    elem.classList.add('is-invalid');
    console.log('false');
  } else {
    elem.classList.remove('is-invalid');
    elem.classList.add('is-valid');
    console.log('true');
  }
}


// Check what RADIO button selected a user
export function WayOfCommunication() {
  // Get element
  let radios = document.getElementsByName('optionsRadios');
  let checkValue;
  // Loop through radios options and chek if
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checkValue = radios[i].value;
      // Check values of radio buttons and store in checkValue
      if (checkValue === 'option1') {
        checkValue = 'email';
      }
    } else {
      checkValue = 'phone';
    }
    return checkValue;
  }
}


// Check what CHECKBOX selected by user
export function remoteWork() {
  // Get element
  let remoteWork = document.getElementsByName('remoteWork');
  let remoteOption;
  // Loop through checkbox values and check if
  for (let i = 0; i < remoteWork.length; i++) {
    if (remoteWork[i].checked) {
      remoteOption = remoteWork[i].value;
      if (remoteOption === 'yes') {
        remoteOption = 'yes';
      }
    } else {
      remoteOption = 'no';
    }
    return remoteOption;
  }
}


// Check level of English langauge
export function lvlOfEnglish() {
  let element = document.getElementById('customSelect');
  let lvl = element.options[element.selectedIndex].text;

  if (lvl === 'Open this select menu') {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
  } else {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
  }

  console.log(lvl);
  return lvl;
}


// Check students Age
document.getElementById('inputAge').addEventListener('blur', validateAge);

export function validateAge() {
  const ageElem = document.getElementById('inputAge');
  const age = document.getElementById('inputAge').value;

  // Add and remove class for Data Validation 
  if (age < 15 || age > 50) {
    ageElem.classList.remove('is-valid');
    ageElem.classList.add('is-invalid');
  } else {
    ageElem.classList.remove('is-invalid');
    ageElem.classList.add('is-valid');
  }

  return age.value;
}



// Export Data
export const applicationData = {
  email,
  age,
  phone_num,
  available_to_start,
  techical_skills,
  personal_present
}