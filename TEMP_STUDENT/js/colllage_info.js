const collegedata = () => {
  const college_id = "304";

  fetch(`https://universa-api.onrender.com/college?college_id=${college_id}`, {
    method: "GET",
    headres: {
      
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("college_data", JSON.stringify(data.data));
    });
};
