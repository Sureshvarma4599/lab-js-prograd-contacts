//Enter your code here..
function myFunction(){
    var data= new Promise((resolve,reject)=>{
        var request= new XMLHttpRequest()
        request.open('GET','https://jsonplaceholder.typicode.com/users')
        request.onload=()=>{
            if(request.status===200){
                resolve(request.response)
            }
            else{
                reject(Error(request.statusText))
            }
        }
        request.send();
    }).then(
        (value)=>{
            console.log(JSON.parse(value))
            var newdata=JSON.parse(value)
            var values = '<h2>Lists of Users</h2>';
            newdata.forEach(user => {
                document.getElementById('data').innerHTML=values; 
                     values+=
                    `<div class="player">
                      <div class="d">Name : ${user.name}</div>
                      <div class="d">Email   : ${user.email}</div>
                      <div class="d">Phone   : ${user.phone}</div>
                      <div class="d">Website : ${user.website}</div>
                      <div class="d">Company : ${user.company.name}</div>
                      <div class="d">City    : ${user.address.city}</div>
                      <div class="d">Zipcode : ${user.address.zipcode}</div>
                     </div>`
                    
          /*  var values =newdata.forEach(element => {
               var h1=document.createElement('h1');
               var p1=document.createElement('p');
               var p2=document.createElement('p');
               var p3=document.createElement('p');
               var p4=document.createElement('p');
               var p5=document.createElement('p');
               var p6=document.createElement('p');
               var p7=document.createElement('p');
              
                h1.innerHTML=element.id;
                p1.innerHTML=element.name;
                p2.innerHTML=element.address;
                p3.innerHTML=element.email;
                p4.innerHTML=element.phone;
                p5.innerHTML=element.username;
                p6.innerHTML=element.company;
                p4.innerHTML=element.website;


                document.getElementById('data').appendChild(h1)
                document.getElementById('data').appendChild(p1)
                document.getElementById('data').appendChild(p2)
                document.getElementById('data').appendChild(p3)
                document.getElementById('data').appendChild(p4)
                document.getElementById('data').appendChild(p5)
                document.getElementById('data').appendChild(p6)
                document.getElementById('data').appendChild(p7)*/
            })
           
        }
    )
}