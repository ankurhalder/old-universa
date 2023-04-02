let section = 'a'
let stream = 'cst'
let year = '2'
const verify = localStorage.getItem("token");
function fetchWeeklyRoutine() {
  console.log("hello world")
    fetch(`https://universa-api.onrender.com/routine/weekly?year=${year}&stream=${stream}&section=${section}`, {
      // include user_id in the URL
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": verify
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // counting total period's
      const total_periods = data.data.length;
      console.log(total_periods)
      //  Counting total day's 
      let count_monday = 0;
      for(i=0; i < total_periods; i++){
        if(data.data[i].day === 'monday'){
           count_monday = count_monday +1 ;
        }        
      }
      console.log(count_monday) 
     
        
    })
      .catch((error) => console.error(error));
  } 