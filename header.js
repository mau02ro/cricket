var hd__menuLinks, hd__btnMenu, hd__menu;
const OPEN_SUBMENU = 	"open_submenu"
const OPEN_MENU = 	"open_menu"

//-----------------
//Event of Window
//-----------------
window.addEventListener("mousemove", handleMove_mouse);
window.addEventListener("load", (event) => {
	hd__menuLinks = document.getElementsByClassName("hd__menu-link");
	hd__btnMenu = document.getElementById("hd__btnMenu");
	hd__menu = document.getElementById("hd__menu");
	console.log(hd__btnMenu)
	hd__btnMenu.addEventListener("click", () => handleClick_openMenu());
	Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
  	element.addEventListener("mouseover", () => handleHover__openSubmenu(element, key));
  	element.addEventListener("click", (event) => handleClick_openSubMenu(element, event));
  })
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
    Array.prototype.forEach.call(hd__menuLinks, (element) => element.classList.remove(OPEN_SUBMENU))
  }
}

//------------------------------
//Event of Open SubMenu Desktop
//-----------------------------
function handleHover__openSubmenu(elementHover, keyHover) {
	if(validationWidth()){
		Array.prototype.forEach.call(hd__menuLinks, (element, key) => {
	  	(keyHover === key) ? element.classList.add(OPEN_SUBMENU) : element.classList.remove(OPEN_SUBMENU);
	  })
	}
}
//------------------------------
//Event of Open SubMenu Movile
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
//------------------------------
//Event of Open Menu Movile
//-----------------------------
function handleClick_openMenu(){
	console.log('ok')
	hd__menu.classList.toggle(OPEN_MENU)
}