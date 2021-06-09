document.addEventListener('DOMContentLoaded',function(){
   fetch('http://localhost:5000/getAll')
   .then(response => response.json())
   .then(data => console.log(data));
   loadHTMLTable([]);
});


function SignUP() {
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value = "";

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}

function loadHTMLTable(data){
   const table=document.querySelector("");
    

}