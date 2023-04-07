const token1 = localStorage.getItem("token");
if (token1 === null) {
  window.location.href = "/index.html";
}
// const setIdCard = () => {
//   const qrCode = document.getElementById("id-card__qr-code");
//   const qrCodeBack = document.getElementById("id-card__qr-code--back");
//   setTimeout(() => {
//     console.log("object");
//     document.getElementById("id-card__back").style.display = "flex";
//   }, 500);
// let identity_token = JSON.parse(localStorage.getItem("userData"));
// const qrCodeData = {
//   type: "id-card",
//   data: {
//     identity_token: identity_token.identity_token,
//   },
// };
// document.getElementById("id-card-body-image").style.backgroundImage =
//   "url('" + localStorage.getItem("imgurl") + "')";
// qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${JSON.stringify(
//   qrCodeData
// )}&color=0-102-255`;
// qrCodeBack.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${JSON.stringify(
//   qrCodeData
// )}&color=0-102-255`;
// };

const setIdCard = () => {
  const qrCode = document.getElementById("id-card__qr-code");
  const qrCodeBack = document.getElementById("id-card__qr-code--back");
  console.log("dddddd");
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

const showBackSide = () => {
  const frontSide = document.getElementById("id-card__front");
  const backSide = document.getElementById("id-card__back");
  console.log("back");
  frontSide.style.transform = "rotateY(-180deg)";
  frontSide.style.zIndex = "0";
  backSide.style.transform = "rotateY(-360deg)";
  backSide.style.zIndex = "1";
};

const showFrontSide = () => {
  const frontSide = document.getElementById("id-card__front");
  const backSide = document.getElementById("id-card__back");
  console.log("front");
  frontSide.style.transform = "rotateY(0deg)";
  frontSide.style.zIndex = "1";
  backSide.style.transform = "rotateY(-180deg)";
  backSide.style.zIndex = "0";
};
const qrCode = document.getElementById("id-card__qr-code");
const qrCodeBack = document.getElementById("id-card__qr-code--back");
console.log(qrCode);
console.log(qrCodeBack);
qrCode.addEventListener("click", showBackSide);
qrCodeBack.addEventListener("click", showFrontSide);
