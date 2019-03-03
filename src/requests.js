class easyHttp {

  // Make a GET Http request - GET All Student Application
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(name => name.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make a GET HTTP request - GET specif Player
  // getSpecPlayer(id){
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   const url = `http://internships-mobile.htec.co.rs/api/players/${id.id}`;

  //   console.log(url);
  //   return new Promise((resolve, reject) => {
  //     fetch(proxyurl + url + id, {
  //       method: 'GET',
  //       headers: {
  //         "accept": "application/json", 
  //         "x-tournament-id": "22852"
  //       },
  //     })
  //     .then(name => name.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err));
  //   });
  // }

  // Make a POST HTTP Request - Add Application
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(name => name.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make a DELETE HTTP Request - Delete Aplication
  delete(id){

    return new Promise((resolve, reject) => {
      fetch(id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        }
      })
      .then(name => name.json())
      .then(data => resolve('Resource Deleted..'))
      .catch(err => reject(err));
    });
  }

  // Make a PUT HTTP Request - Update player
  // updatePlayer(id, data){
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   const url = `http://internships-mobile.htec.co.rs/api/players/${id}`;

  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json',
  //         'x-tournament-id': '22852'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(name => name.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err));
  //   });
  // }
}

export const http = new easyHttp();