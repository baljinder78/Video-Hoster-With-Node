var form = document.getElementById('register_form');

form.addEventListener('submit', submitthedata);


function submitthedata(event)
{
    event.preventDefault();

    const fdata= new FormData(form);

    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:3000/user/register', true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
      }
    };
    xhttp.send(fdata);


    console.log();
}