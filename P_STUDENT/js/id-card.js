const setIdCard = () => {
  const qrCode = document.getElementById("id-card__qr-code");
  const qrCodeBack = document.getElementById("id-card__qr-code--back");
  console.log("dddddd");
  setTimeout(() => {
    console.log("object");
    document.getElementById("id-card__back").style.display = "flex";
  }, 500);

  const qrCodeData = {
    type: "id-card",
    data: {
      identity_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzc5NzQ4OTAzNDkwMTg0OSIsImlhdCI6MTY4MDE5NjIyM30.9J-I2IPMenf4cezXFbiZz6hKS457UIHBux25WzFogxk",
    },
  };

  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${JSON.stringify(
    qrCodeData
  )}&color=0-102-255`;
  qrCodeBack.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${JSON.stringify(
    qrCodeData
  )}&color=0-102-255`;
};
