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
  }, 2000);
}

//de aia nu vedem postul creat deoarece functia createpost va dura mai mult decat functia getpost, serverul va returna prima functie dupa o secunda.
//pana cand rulam a doua functie deja prima functie a afisat domul, aici vine callback or functia async

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong with this code");
      }
    }, 3500);
  });
}

// getPosts();

/*createPost({
  title: "First post created",
  body: "This is a post that i created",
})
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  });
*/

//create a bunch of promises

const promise1 = Promise.resolve("Hello peoples");
const promise2 = 15;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Goodbye");
});

const promise4 = fetch("https://www.boredapi.com/api/activity/")
  .then((response) => {
    response.json();
  })
  .then((json) => console.log(json));
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

//async await

// async function init() {
//await just wait for an async function, process to complete
//awaiting for this function to be done until i move on and call getpost method
//   await createPost({
//     title: "First post created",
//     body: "This is a post that i created",
//   });

//   getPosts();
// }

// init();
