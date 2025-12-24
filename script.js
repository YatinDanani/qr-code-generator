let imgDisplay = document.getElementById("imgDisplay");
let QRimage = document.getElementById("QRimage");
let qrtext = document.getElementById("qrtext");

function generateQR(){
    if(qrtext.value.length>0){
        QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
        imgDisplay.classList.add("show-img");
    }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },999);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (!entry.isIntersecting) return;

        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
});

const hiddenHiddenElements = document.querySelectorAll(".covered");
hiddenHiddenElements.forEach((el) => observer.observe(el));

const observerWrapper = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)

      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
          entry.target.classList.add('appear2');
      }
  });
});

const hiddenHiddenElementsWrapper = document.querySelectorAll(".covered2");
hiddenHiddenElementsWrapper.forEach((el) => observerWrapper.observe(el));