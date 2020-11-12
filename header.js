var hd__menuLinks, hd__btnMenu, hd__menu, hd__main;

const OPEN_SUBMENU = 	"openSubMenu";
const OPEN_MENU = 	"openMenu";
const HD_MENU_LINK_SELECT = "hd__menu-link-select";
const HD_BTN_MENU_ICON_CLOSE = "https://www.cricketwireless.com/uiassets/mobile_menu_close.png";
const HD_BTN_MENU_ICON_OPEN = "https://www.cricketwireless.com/uiassets/mobile_menu.png";


//-----------------
//Event of Window
//-----------------
window.addEventListener("mousemove", handleMove_mouse);
window.addEventListener("load", (event) => {
	hd__menuLinks = document.getElementsByClassName("hd__menu-link");
	hd__btnMenu = document.getElementById("hd__btnMenu");
	hd__menu = document.getElementById("hd__menu");
  hd__main = document.getElementById("hd__main");
	
	hd__btnMenu.addEventListener("click", () => handleClick_openMenu());

	Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
  	element.addEventListener("mouseover", () => handleHover__openSubmenu(element, key));
  	element.addEventListener("click", (event) => handleClick_openSubMenu(element, event));

    changeClassIcons($(element));
  })
})

window.addEventListener("resize", () => {
  Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
    element.classList.remove(OPEN_SUBMENU);
    element.classList.remove(HD_MENU_LINK_SELECT);

    let subMenu = $(element)[0].nextElementSibling;
    let icon = $(element)[0].firstElementChild;

    if(subMenu){
      subMenu.classList.remove(OPEN_SUBMENU);
      subMenu.style.height = "45px";

      changeClassIcons($(element));
    }
  })

  hd__menu.style.width = "auto";
  hd__menu.classList.remove(OPEN_MENU);
  hd__main.classList.remove("mask");
  hd__btnMenu.src = HD_BTN_MENU_ICON_OPEN;

  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementsByTagName("body")[0].style.position = "initial";
})

//-----------------
//Tools
//-----------------
function validationWidth(){
  let { outerWidth } = window;
  if(outerWidth > 860){ return true }else{ return false };
}

function handleMove_mouse(event) { 
  let { clientY } = event;

  if(clientY > 185 && validationWidth()){
    Array.prototype.forEach.call(hd__menuLinks, (element) => {
      element.classList.remove(OPEN_SUBMENU);
      element.classList.remove("openSubmenu-cricket");
    })
  }
}

function changeClassIcons(element){
  let items = $(element)[0].children

  Array.prototype.forEach.call(items, (value, key) => {
    if(value.nodeName === "I"){
      if(validationWidth()){
        value.className = "fa fa-angle-down";
      }else {
        value.className = "fas fa-chevron-circle-down";
      }
    }
  })
}

//------------------------------
//Event of Open SubMenu Desktop
//-----------------------------
function handleHover__openSubmenu(elementHover, keyHover) {
	if(validationWidth()){
		Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
	  	if(keyHover === key){
        element.classList.add(OPEN_SUBMENU);

        let cricket = $(element)[0].firstElementChild

        if(cricket.nodeName === "SPAN"){
          element.classList.add("openSubmenu-cricket")
        }
      }else{
        element.classList.remove(OPEN_SUBMENU)
          element.classList.remove("openSubmenu-cricket")

      }
	  })
	}
}
//------------------------------
//Event of Open SubMenu Mobile
//-----------------------------
function handleClick_openSubMenu(elementClick, event){
  if(!validationWidth()){
    let validation;
   Array.prototype.forEach.call(elementClick.parentElement.childNodes, (element) => {
      if(element.localName === 'ul'){ 
        validation = true;
      }
    })
    if(validation){
      event.preventDefault()
    }
    elementClick.classList.toggle(OPEN_SUBMENU)
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


