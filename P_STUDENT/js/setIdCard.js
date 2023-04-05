const token1 = localStorage.getItem("token");
if (token1 === null) {
  window.location.href = "/index.html";
}
const setIdCard = () => {
  const qrCode = document.getElementById("id-card__qr-code");
  const qrCodeBack = document.getElementById("id-card__qr-code--back");
  setTimeout(() => {
    console.log("object");
    document.getElementById("id-card__back").style.display = "flex";
  }, 500);
  let identity_token = JSON.parse(localStorage.getItem("userData"));
  const qrCodeData = {
    type: "id-card",
    data: {
      identity_token: identity_token.identity_token,
    },
  };
  document.getElementById("id-card-body-image").style.backgroundImage =
    "url('" + localStorage.getItem("imgurl") + "')";
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${JSON.stringify(
    qrCodeData
  )}&color=0-102-255`;
  qrCodeBack.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${JSON.stringify(
    qrCodeData
  )}&color=0-102-255`;
};
