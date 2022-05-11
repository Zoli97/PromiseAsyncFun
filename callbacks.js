const posts = [
  {
    title: "My first post ",
    body: "This is a simple post",
  },
  {
    title: "My second post ",
    body: "This is a simple post",
  },
];

// to fetch from a server and then take some seconds. The ideea is to get the posts from backend and then put them on the page frontend
//foreach post i want to add to the output variable
function getPosts() {
  setTimeout(() => {
    let post_output = "";
    posts.forEach((post, index) => {
      post_output += `<h2>${post.title}</h2>`;
      post_output += `<p>${post.body}</p>`;
    });
    document.body.innerHTML = post_output;
  }, 1000);
}

//de aia nu vedem postul creat deoarece functia createpost va dura mai mult decat functia getpost, serverul va returna prima functie dupa o secunda.
//pana cand rulam a doua functie deja prima functie a afisat domul, aici vine callback or functia async

function createPost(post, callback) {
  setTimeout(() => {
    //want to take posts and i want to push on the post array the new post
    posts.push(post);
    callback();
  }, 3000);
}

// getPosts();

createPost(
  {
    title: "First post created",
    body: "This is a post that i created",
  },
  getPosts
);
