






// async function geteemployee(){
//     try{
//           const res = await fetch('http://localhost:5000/geteemployee')
//    const data = await res.json()
//    console.log(data);


//    let str = '';

//    data.map(dt =>{
//     str+= `
//     <tr>
//     <td><input type="text" value="${dt.name}" id="name-${dt._id}"disabled="true">
//     </td>
//     <td><input type="text" value="${dt.designation}" id="designation-${dt._id}"disabled="true">
//     </td>
//     <td><input type="text" value="${dt.salary}" id="salary-${dt._id}"disabled="true">
//     </td>
//     <td><input type="text" value="${dt.experience}" id="experience-${dt._id}"132disabled="true">
//     </td>
    
//     <td>
//      <button onclick="handleClick('${dt._id}')">edit</button>
//         <button onclick="handleSave('${dt._id}')">save</button>
//         <button onclick="handleDelete('${dt._id}')">delete</button>
//     </td>
// </tr>
//     `
//    });
//    document.getElementById('TableBody').innerHTML = str;
//     }catch (error){
//         console.log(error);
        
//     }
// }
// geteemployee();

// const handleClick = (id)=>{
//     document.getElementById(`name-${id}`).disabled = false
//       document.getElementById(`designation-${id}`).disabled = false
//         document.getElementById(`salary-${id}`).disabled = false
//           document.getElementById(`experience-${id}`).disabled = false
// }



// async function handleSave(id){
//     let name = document.getElementById(`name-${id}`).value
//      let designation = document.getElementById(`designation-${id}`).value
//       let salary = document.getElementById(`salary-${id}`).value
//        let experience = document.getElementById(`experince-${id}`).value

// const data = {id,name,designation,salary,experience}
// console.log(data);
//    const jsondata = JASON.stringify(data)
//    const res = await fetch ('http://localhost:5000/update',{
//     'method':"PUT",
//     'content-Type':"text/json",
//     "body":jsondata
//    })
// const result =  await res.text()
// if (result=='success') {
//     alert("data updated")
// }

// else{
//     alert("updation failed")
// }

// }

// async function handleDelete(id){
//     const res = await fetch('http://localhost:5000/delete'{
//        method:'DELETE',
//        headers:{
//         'content-type':'text/plain'
//        },
//        'body':id
//     })

//     const data = await res.text()
//     console.log(data);

//     if (data=='success') {
//         alert("deleted")
//         geteemployee()
//     }
//     else{
//         alert("deletion failed")
//     }
// }


async function getemployee() {
  try {
    const res = await fetch('http://localhost:5000/getemployee')
    const data = await res.json()
    console.log(data)

    let str = ''

    data.forEach(dt => {
      str += `
        <tr>
          <td>
            <input type="text" value="${dt.name}" id="name-${dt._id}" disabled>
          </td>
          <td>
            <input type="text" value="${dt.designation}" id="designation-${dt._id}" disabled>
          </td>
          <td>
            <input type="text" value="${dt.salary}" id="salary-${dt._id}" disabled>
          </td>
          <td>
            <input type="text" value="${dt.experience}" id="experience-${dt._id}" disabled>
          </td>
          <td>
            <button onclick="handleClick('${dt._id}')">Edit</button>
            <button onclick="handleSave('${dt._id}')">Save</button>
            <button onclick="handleDelete('${dt._id}')">Delete</button>
          </td>
        </tr>
      `
    })

    document.getElementById('TableBody').innerHTML = str
  } catch (error) {
    console.log(error)
  }
}

getemployee()



function handleClick(id) {
  document.getElementById(`name-${id}`).disabled = false
  document.getElementById(`designation-${id}`).disabled = false
  document.getElementById(`salary-${id}`).disabled = false
  document.getElementById(`experience-${id}`).disabled = false
}



async function handleSave(id) {
  const name = document.getElementById(`name-${id}`).value
  const designation = document.getElementById(`designation-${id}`).value
  const salary = document.getElementById(`salary-${id}`).value
  const experience = document.getElementById(`experience-${id}`).value

  const data = { id, name, designation, salary, experience }
  console.log(data)

  const res = await fetch('http://localhost:5000/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const result = await res.text()

  if (result === 'success') {
    alert('Data updated successfully')
    getemployee()
  } else {
    alert('Updation failed')
  }
}


async function handleDelete(id) {
  const res = await fetch('http://localhost:5000/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: id
  })

  const data = await res.text()
  console.log(data)

  if (data === 'success') {
    alert('Deleted successfully')
    getemployee()
  } else {
    alert('Deletion failed')
  }
}
