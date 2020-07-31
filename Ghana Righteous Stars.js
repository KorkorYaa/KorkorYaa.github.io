let toggleMenuStatus = false;
let toggleNav = function () {
	let gettoggleMenu = document.querySelector(".toggle-menu");
	//let background  =document.querySelector("#toggle-img");

	if (toggleMenuStatus===false){
		gettoggleMenu.style.visibility="visible";

		toggleMenuStatus=true;
	}

		else if (toggleMenuStatus===true){
		gettoggleMenu.style.visibility="hidden";

		toggleMenuStatus=false;
}
}