import { ui } from './ui';
import { http } from './requests'
import * as cheker from './cheker';

// GET All Applications on DOM load
document.addEventListener('DOMContentLoaded', getApplications);

// Listen for add Application
document.querySelector('.post-submit').addEventListener('click', submitApplication);

// Listen for Delete App
document.querySelector('.applications').addEventListener('click', deleteApplication);

// Enable state edit
document.querySelector('.applications').addEventListener('click', eneableEdit);


// GET data from api
function getApplications () {
  http.get('http://localhost:3000/application')
    .then(data => {
      ui.showApplication(data);
    })
    .catch(err => console.log(err));
}


// Submit App
function submitApplication() {

  // Get values from radio buttons, dropdown and checkbox    
  let wayOfCommunication = cheker.WayOfCommunication();
  let remoteWork = cheker.remoteWork();
  let lvlOfEnglish = cheker.lvlOfEnglish();
  let name = cheker.validateName();
  name = name.toLowerCase();

  // Store data and store student inputs 
  const data = {
    name,
    email: cheker.applicationData.email,
    age: cheker.applicationData.age,
    phone_num: cheker.applicationData.phone_num,
    wayOfCommunication,
    available_to_start: cheker.applicationData.available_to_start,
    lvlOfEnglish,
    techical_skills: cheker.applicationData.techical_skills,
    personal_present: cheker.applicationData.personal_present,
    remoteWork
  }



  // Create POST reqest
  http.post('http://localhost:3000/application', data)
    .then(data => {
      ui.showAlert('Success added', 'alert alert-success');
      getApplications();
    })
    .catch(err => console.log(err))
}


// Delete app
function deleteApplication(e){
  if(e.target.parentElement.classList.contains('delete')){
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure')){
      http.delete(`http://localhost:3000/application/${id}`)
        .then(data => {
          ui.showAlert('Application deleted', 'alert alert-success')
          getApplications();
        })
        .catch(err => console.log(err));
    }

    console.log(id);
  }
  e.preventDefault();
}


// Edit App - put request
function eneableEdit (e) {
  
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    let arr = [];

    let name = e.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling
    .previousElementSibling.textContent;

    console.log(name);

    console.log(e.target.parentElement.parentElement.parentElement.previousElementSibling.textContent);

    // let email = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling
    // .textContent;

    // console.log(email);
    // console.log(e.target.parentElement.parentElement.textContent);
    
  }

  e.preventDefault();
}