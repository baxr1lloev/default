let url = "https://jsonplaceholder.typicode.com/photos"
let cont = document.querySelector('.container')



for (let i = 0; i <= 10; i++) {
  axios.get(url + '/' + i)

  .then(res => {
    if(res.status === 200 || res.status === 201) {
      reload(res.data)
    }
  })
    .catch(err => console.log(err))
}



function reload(item) {
  // cont.innerHTML = ''

  // for (let item of arr) {
    cont.innerHTML += `
        <div class = "item">
            <h3>${item.title}</h3>
            <img src = "${item.url}"/>
        </div>
        `


  }
