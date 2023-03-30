let section = 'a'
let stream = 'cst'
let year = '2'
function fetchRoutine() {
    const userId = localStorage.getItem("userId");
    if(userId === null){
    //   window.location.href = "/index.html"
    }
    // retrieve user_id from local storage
    console.log(7563975692387)
    fetch(`https://universa-api.onrender.com/routine?year=${year}&stream=${stream}&section=${section}&day=monday`, {
      // include user_id in the URL
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
    })
      .catch((error) => console.error(error));
  } 