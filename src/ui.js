class UI {
  constructor() {
    this.id = document.querySelector('#id');
    this.name = document.querySelector('#inputName');
    this.email = document.querySelector('#inputEmail');
    this.age = document.querySelector('#inputAge');
    this.phone_num = document.querySelector('#inputPhoneNum');
    this.available_to_start = document.querySelector('#dateInput');
    this.techical_skills = document.querySelector('#inputTecSkills');
    this.personal_present = document.querySelector('#inputPersPresent');
    this.lvlOfEnglish = document.getElementById('customSelect');
    this.wayOfCommunication = document.getElementsByName('optionsRadios');
    this.remoteWork = document.getElementsByName('remoteWork');
    this.applications = document.querySelector('.applications');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add'
  }


  // Show All appplication
  showApplication(data) {
    let output;

    data.forEach(app => {
      output += `
      <div class="card mb-3" style="width:80%; margin-left:9%;">
        <h3 class="card-header">${app.name}</h3>
        <div class="card-body">
          <h5 class="card-title">Email: ${app.email}</h5>
          <h6 class="card-subtitle text-muted mt-2">Age: ${app.age}</h6>
        </div>
        <div class="card-body">
          <p class="card-text"><b>Personal Present: </b>${app.personal_present}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Phone number: </b>${app.phone_num} </li>
          <li class="list-group-item"><b>Available to start: </b>${app.available_to_start}</li>
          <li class="list-group-item"><b>Level Of English: </b>${app.lvlOfEnglish}</li>
          <li class="list-group-item"><b>Way Of Communication: </b>${app.wayOfCommunication}</li>
          <li class="list-group-item"><b>Remote Work: </b>${app.remoteWork}</li>
          <li class="list-group-item"><b>Tech skills: </b>${app.techical_skills}</li>
        </ul>
        <div class="row">
          <div class="col-6 editDeleteButt">
            <a href="#" class="edit card-link d-inline" data-id="${app.id}"> <i class="fa fa-pencil"> </i> </a>
            <a href="#" class="delete card-link d-inline" data-id="${app.id}"> <i class="fa fa-remove"> </i> </a>
          </div>
        </div>
      </div>
        `;

      this.applications.innerHTML = output;
    })
  }

  // Show Alert after submit
  showAlert(message, className){
    this.clearAlert();

    // Create a div
    const div = document.createElement('div');
    // Add class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.studentForm');
    // Get Applications
    const applications = document.querySelector('.applications');
    // Insert alert div
    container.insertBefore(div, applications);

    console.log(container, applications, div);


    // Set Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove()
    }

  }

}


export const ui = new UI();