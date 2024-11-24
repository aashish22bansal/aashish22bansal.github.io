// import filedata from "foo.json" assert { type: 'json' };

// data = filedata[2]['data'];

// console.log(data);

// /* I put your JSON into an external file, loaded from github */
// var url = "foo.json";

// /* this tells the page to wait until jQuery has loaded, so you can use the Ajax call */


// $(document).ready(function(){
//     $.ajax({
//       url: url,
//       dataType: 'json',
//         error: function(){
//           console.log('JSON FAILED for data');
//         },
//       success:function(results){
//     /* the results is your json, you can reference the elements directly by using it here, without creating any additional variables */
    
//         var cartItemsList = document.getElementById("cartItemsList");
  
//         results.basket.productList.forEach(function(element) {
//         cartItemsList.insertAdjacentHTML( 'beforeend',"<li>" +              element.product.name + " : " + element.price+ " </li>");
//         }); // end of forEach
//       }  // end of success fn
//      }) // end of Ajax call
//    }) // end of $(document).ready() function



// Fetch the JSON data and display it
// fetch('foo.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => {
//     const container = document.getElementById('data-container');
//     data.forEach(item => {
//       const div = document.createElement('div');
//       console.log(data);
//       div.innerHTML = `
//         <p><strong>Name:</strong> ${item.C.dta.id}</p>  
//         <p><strong>Age:</strong> ${item[2]}</p>
//         <hr>
//       `;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });



// Fetch JSON data and display it on the page
fetch('foo copy.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // console.log("Console Output 1: ", data);
    // console.log("Console Output 2: ", data.Parent[2].imgs);
    displayData(data.Parent[2].imgs);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Function to display user data
function displayData(users) {

  // console.log("display Data Console Output 1: ", users);
  const container = document.getElementById('data-container');
  
  users.forEach(user => {
    // console.log("display Data Console Output Nested: ", user);
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    // Construct HTML for user data
    userDiv.innerHTML = `
      <br><br><br><img id="${user.val}" width="80%" src="../../../../../assets/Sections/Learning/Technology/Deep_Learning/Deep_Learning_Stanford_University_Fei_Fei_Li_and_Justin_Johnson_and_Serena_Yeung_lectures_2019/${user.val}" alt="PPT Image">
    `;

    // <p><strong>ID:</strong> ${user.id}</p>
    // <p><strong>Name:</strong> ${user.val}</p>
      

    container.appendChild(userDiv);
  });
}

//http://127.0.0.1:5503/src/assets/Sections/Learning/Technology/Deep_Learning/Deep_Learning_Stanford_University_Fei_Fei_Li_and_Justin_Johnson_and_Serena_Yeung_lectures_2019/Deep_Learning_Stanford_University_Fei_Fei_Li_AND_Justin_Johnson_and_Serena_Yeung_lectures_2019_page_60.jpg