// main.js
var update = document.getElementById('update');

update.addEventListener('click', function () {
  // Send PUT Request here
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })

});
//---------------------------------------------------------------
 let fadd = document.getElementById('add');

fadd.addEventListener('click', function () {
 
  let fname = document.getElementById('fname').value;
  let fquote = document.getElementById('fquote').value;
  //console.log("fname:" + fname);
  // Send PUT Request here
  fetch('quotes', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': fname,
      'quote': fquote
    })
  })
  .then(res => {
    if (res.ok) return res.json();
  })
  .then(data => {
    console.log(data);
    window.location.reload(true);
  })

});
//---------------------------------------------------------------
var del = document.getElementById('delete');

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})
