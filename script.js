const url = 'https://jsonplaceholder.typicode.com/posts';

// const main_container = document.getElementById('content_lists');


// Creating the ordered list (ol) element
let unorderedList = document.createElement('ol');
// Appending i.e. adding the creataed element to the body of the document
document.body.appendChild(unorderedList);

//These are the process of fetching data from the url as GET Request

//Step-1, Fetch the url and got response from the server
fetch(url)
// Step-2, then pass the responce as parameter and return JSON data by converting it (result.json())
.then(response => response.json())
// Step-3, then pass the jsom as parameter and perform the function you want
.then(json => {
    json.forEach(element => inflateLayout(element));
})
.catch(e => console.error('Unable to load data due to this:' + e));    // Catch error if any



// This is the method to inflate the layout and add the post
const inflateLayout  = (post) => {
    let title = post.title;
    let content = post.body;
    // console.log(content)

    // Creating individual post container div
    const post_container = document.createElement('div');
    const post_title = document.createElement('div');
    const post_image = document.createElement('div');
    const image = document.createElement('img');
    const image_layer = document.createElement('div');
    const post_content = document.createElement('div');

    // Adding class to each created element
    post_container.classList.add('post');
    post_title.classList.add('post_title');
    post_image.classList.add('post_image');
    image_layer.classList.add('image_layer');
    post_content.classList.add('post_content');

    // Appending each created element to the respected div
    document.body.appendChild(post_container);
    post_container.appendChild(post_title);
    post_container.appendChild(post_image);
    post_container.appendChild(post_content);
    

    post_image.appendChild(image);
    post_image.appendChild(image_layer);


    // Assigning value
    post_title.innerText = title;
    post_content.innerText = content;
    image.src = "image/post_image.jpg";
}

