function hidePartOfTable(elemId) {
  var elem = document.getElementById(elemId);
  var table = elem.getElementsByTagName('table');
  var buttonForHide = elem.getElementsByTagName('button')[0];

  if(buttonForHide.innerText === "hide") {
    table[0].tHead.style.display = "none";
    table[0].tBodies[0].style.display = "none";
    buttonForHide.innerText = "show";
  } else {
    table[0].tHead.style.display = "table-header-group";
    table[0].tBodies[0].style.display = "table-row-group";
    buttonForHide.innerText = "hide";
  }
}
