function generateQr(qrCodeMessage, element) {
  const verify = localStorage.getItem("token");
  qrCodeMessage = JSON.parse(qrCodeMessage);
  if (qrCodeMessage.type === "id-card") {
    fetch(
      `https://universa-api.onrender.com/auth/qr/id-card?identity_token=${qrCodeMessage.data.identity_token}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          token: verify,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        element.innerHTML = '<span class="result">' + data.message + "</span>";
      })
      .catch((error) => console.error(error));
  }
}
