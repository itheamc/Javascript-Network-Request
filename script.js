let url = 'https://jsonplaceholder.typicode.com/posts';

// Creating the ordered list (ol) element
let unorderedList = document.createElement('ol');
// Appending i.e. adding the creataed element to the body of the document
document.body.appendChild(unorderedList);

/*
These are the process of fetching data from the url
*/
//Step-1, Fetch the url and got response from the server
fetch(url)
// Step-2, then pass the responce as parameter and return JSON data by converting it (result.json())
.then(response => response.json())
// Step-3, then pass the jsom as parameter and perform the function you want
.then(json => {
    json.forEach(element => {
        console.log(element.title);
        let listItem = document.createElement('li');
        listItem.innerHTML = element.title;
        unorderedList.appendChild(listItem);    // Appending list item to the unordered list
    });
})
.catch(e => console.error('Unable to load data due to this:' + e));    // Catch error if any
