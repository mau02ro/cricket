var hd__modalLinks, hd__btnMenu, hd__menu, hd__main, hd__modal, hd__controllerModal, hd__closeModal, hd__modalContainer;

const OPEN_SUBMENU = 	"openSubMenu";
const OPEN_MENU = 	"openMenu";
const HD_MENU_LINK_SELECT = "hd__menu-link-select";
const HD_BTN_MENU_ICON_CLOSE = "https://www.cricketwireless.com/uiassets/mobile_menu_close.png";
const HD_BTN_MENU_ICON_OPEN = "https://www.cricketwireless.com/uiassets/mobile_menu.png";

const HD_ITEM_IMAGE_ACTIVE = "hd__menu-itemImage-active";


//-----------------
//Event of Window
//-----------------


window.addEventListener("load", (event) => {
  hd__menuLinks = document.getElementsByClassName("hd__menu-link");
  hd__btnMenu = document.getElementById("hd__btnMenu");
  hd__menu = document.getElementById("hd__menu");
  hd__main = document.getElementById("hd__main");
 
  hd__controllerModal = document.getElementById("hd__controllerModal");
  hd__modal = document.getElementById("hd__modal");
  hd__closeModal = document.getElementById("hd__closeModal");

  hd__modalContainer = document.getElementById("hd__modal-container");

  hd__controllerModal.addEventListener("click", openAndCloseModal);
  hd__closeModal.addEventListener("click", openAndCloseModal);

  window.addEventListener("mousemove", handleMove_mouse);

  hd__btnMenu.addEventListener("click", () => handleClick_openMenu());

  Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
    setIconsMenu(element)

    element.addEventListener("mouseover", () => handleHover__openSubmenu(element, key));
    element.addEventListener("click", (event) => handleClick_openSubMenu(element, event));
  })
})
window.addEventListener("resize", () => {
  Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
    setIconsMenu(element)

    let subMenu = $(element)[0].nextElementSibling;

    if(subMenu){
      subMenu.classList.remove(OPEN_SUBMENU);
      /*Cambios*/
      /*Cambios*/
      /*Cambios*/
      subMenu.style.height = "41.5px";
      /*Cambios*/
      /*Cambios*/
      /*Cambios*/
    }

    element.classList.remove(HD_MENU_LINK_SELECT);
    element.classList.remove(HD_ITEM_IMAGE_ACTIVE);  
  })

  hd__menu.style.width = "auto";
  hd__menu.classList.remove(OPEN_MENU);
  hd__main.classList.remove("mask");
  hd__btnMenu.src = HD_BTN_MENU_ICON_OPEN;

  hd__modalContainer.style.width = "100%";

  hd__modal.classList.remove("open_modal");
  /*Cambios*/
  /*Cambios*/
  /*Cambios*/
  hd__modal.classList.remove("close_modal");
  /*Cambios*/
  /*Cambios*/
  /*Cambios*/
  hd__modal.style.width = "100%";
  document.removeEventListener("click", handleClick_document);

  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementsByTagName("body")[0].style.position = "initial";
})

function validationWidth(value = 860){
  if($(document).width() > value){ 
    return true;
  }else{ 
    return false;
  };
}

function setIconsMenu(element){
  let childrens = $(element)[0].children;
  let icon = childrens[childrens.length - 1];

  if(validationWidth() && icon){
    childrens[childrens.length - 1].className = "fa fa-angle-down";
  }else if(icon){
    childrens[childrens.length - 1].className = "fas fa-chevron-circle-down";
  }
}

//------------------------------
//Event of Open SubMenu Desktop
//-----------------------------
function handleHover__openSubmenu(elementHover, keyHover) {
  if(validationWidth()){

    Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
      if(keyHover === key){
        element.classList.add(OPEN_SUBMENU);

        let item_image = $(element)[0].firstElementChild;

        if(item_image){
          if(item_image.nodeName === "SPAN"){
            element.classList.add(HD_ITEM_IMAGE_ACTIVE);
          }
        }
      }else{
        element.classList.remove(OPEN_SUBMENU);
        element.classList.remove(HD_ITEM_IMAGE_ACTIVE);
      }
    })

  }
}

function handleMove_mouse(event) { 
  let { clientY } = event;

  if(clientY > 185 && validationWidth()){
    Array.prototype.forEach.call(hd__menuLinks, (element) => {
      element.classList.remove(OPEN_SUBMENU);
      element.classList.remove(HD_ITEM_IMAGE_ACTIVE);
    })
  }
}

//------------------------------
//Event of Open Menu Mobile
//-----------------------------

function handleClick_openMenu(){
  if(!validationWidth()){    
    if(!hd__menu.classList.contains(OPEN_MENU)) {
     
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.getElementsByTagName("body")[0].style.position = "fixed";
      


      hd__main.classList.add("mask");
      hd__menu.classList.add(OPEN_MENU);

      hd__menu.style.width = "auto";

      hd__btnMenu.src = HD_BTN_MENU_ICON_CLOSE;

      let width = "250px";

      hd__menu.style.width = "0px";

      setTimeout(() => {
        hd__menu.style.width = width;
      }, 0) 

    } else {
      hd__menu.style.width = "0px"
         
      hd__menu.addEventListener("transitionend", () => {

        Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
          element.classList.remove(OPEN_SUBMENU);
          element.classList.remove(HD_MENU_LINK_SELECT);

          let subMenu = $(element)[0].nextElementSibling;

          if(subMenu){
            subMenu.classList.remove(OPEN_SUBMENU);
          }
        })

        hd__menu.classList.remove(OPEN_MENU)
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementsByTagName("body")[0].style.position = "initial";
        hd__main.classList.remove("mask");

        hd__btnMenu.src = HD_BTN_MENU_ICON_OPEN;

      }, {once: true});
    }
  }
}

function handleClick_openSubMenu(elementClick, event){
  if(!validationWidth()){
    let subMenu = $(elementClick)[0].nextElementSibling;
    if(subMenu){
      event.preventDefault()

      if(!subMenu.classList.contains(OPEN_SUBMENU)) {
        subMenu.classList.add(OPEN_SUBMENU)
        elementClick.classList.add(HD_MENU_LINK_SELECT)

        subMenu.style.height = "auto"

        let altura = `${subMenu.clientHeight}px`;

        subMenu.style.height = "0px"

        setTimeout(() => {
          subMenu.style.height = altura
        }, 0) 

      } else {
        subMenu.style.height = "0px";
        elementClick.classList.remove(HD_MENU_LINK_SELECT);
          
        subMenu.addEventListener("transitionend", () => {
          subMenu.classList.remove(OPEN_SUBMENU);
        }, {once: true})
      }
    }
  }
}

function handleClick_document(event){
  if(hd__modal.classList.contains("open_modal")){
    let {clientY, clientX} = event;
    let {left, top, bottom, right} = hd__modal.firstElementChild.getBoundingClientRect();
    console.log(hd__modal.firstElementChild.getBoundingClientRect())
    if((clientY < top || clientY > bottom) || (clientX < left || clientX > right)){
      openAndCloseModal()
    }
  }
}


function openAndCloseModal(){
  if(validationWidth(600)){
  /*Cambios*/
  /*Cambios*/
  /*Cambios*/
    if(!hd__modal.classList.contains("open_modal")) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";


      hd__modal.classList.add("open_modal");
      setTimeout(() => {
        document.addEventListener("click", handleClick_document);
      }, 0);
    }else{
      hd__modal.classList.remove("open_modal");
      hd__modal.classList.add("close_modal");
      
      setTimeout(() => {
        hd__modal.classList.remove("close_modal");
        document.removeEventListener("click", handleClick_document);

        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }, 290);
    }
  /*Cambios*/
  /*Cambios*/
  /*Cambios*/
  }else{
    if(!hd__modal.classList.contains("open_modal")) {
     
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.getElementsByTagName("body")[0].style.position = "fixed";

      let width__app = document.getElementById("body").getBoundingClientRect().width;
      
      hd__modal.classList.add("open_modal");

      hd__modal.style.width = "auto";

      let width = "95%";

      hd__modal.style.width = "0px";      

      let width__modalContainer = width__app - ((width__app*5)/100);

      hd__modalContainer.style.width = `${width__modalContainer}px`;

      setTimeout(() => {
        hd__modal.style.width = width;

        document.addEventListener("click", handleClick_document);
      }, 0)     

    } else {
      hd__modal.style.width = "0px";
         
      hd__modal.addEventListener("transitionend", () => {
        hd__modal.classList.remove("open_modal");
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementsByTagName("body")[0].style.position = "initial";
        document.removeEventListener("click", handleClick_document);

        hd__modalContainer.style.width = "100%";

      }, {once: true});
    }
  
  }
}