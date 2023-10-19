
fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        return data.json();
      })
      .then((Objectdata) =>{
             console.log(Objectdata)
             let tabledata ="";
             Objectdata.map((values)=>{
               tabledata+= `   <tr>
               <td>${values.id}</td>
               <td>${values.name}</td>
               <td>${values.username}</td>
               <td>${values.email}</td>
               <td>${values.phone}</td>
               <td>${values.website}</td>
               <td>${values.company.name}</td>
               <td><button onclick="seepost()" class="btn">SEE POST</button></td>
                </tr>`
             });
             document.getElementById("table-body").innerHTML = tabledata;
      })
     
    
    function seepost() {
        window.location.href = 'ass.html'
    }
    function seecomments()
    {

    }
    
    