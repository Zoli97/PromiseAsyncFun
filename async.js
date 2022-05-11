// first promise its return i need to call res.json

async function fetchBoredActivities() {
  const response = await fetch(
    "https://www.boredapi.com/api/activity/?key=3136036"
  );
  const data = await response.json();
  console.log(data);
}

fetchBoredActivities();
