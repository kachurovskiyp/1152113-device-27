var writeUsLink = document.querySelector(".write-us-link");
var modalWriteUs = document.querySelector(".modal-write-us");
var modalClose = modalWriteUs.querySelector(".close-modal");
var formWriteUs =  modalWriteUs.querySelector("form");
var inputName = document.querySelector("[name=user-name]");
var inputEmail = document.querySelector("[name=user-email]");
var inputText = document.querySelector("[name=user-content]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";


try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt){
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");

  if (inputName.classList.contains("invalid")){
    inputName.classList.remove("invalid");
  }

  if (inputEmail.classList.contains("invalid")){
    inputEmail.classList.remove("invalid");
  }

  if (inputText.classList.contains("invalid")){
    inputText.classList.remove("invalid");
  }

  if (storageName && storageEmail) {
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    inputText.focus();
  } else {
    inputName.focus();
  }
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
});

formWriteUs.addEventListener("submit", function(evt){
  if (!inputName.value || !inputEmail.value || !inputText.value) {

    evt.preventDefault();

    modalWriteUs.classList.remove("modal-error");
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add("modal-error");

    if(!inputName.value){
      inputName.classList.add("invalid");
    }

    if(!inputEmail.value){
      inputEmail.classList.add("invalid");
    }

    if(!inputText.value){
      inputText.classList.add("invalid");
    }

  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", inputName.value);
      localStorage.setItem("userEmail", inputEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWriteUs.classList.contains("modal-show")) {
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }
  }
});
