// Set content position based on header
var contentTopMargin = 10;

var headerHeight = getComputedStyle(document.getElementById("header")).height.replace('px', '')
var contentHeight = getComputedStyle(document.getElementById("content")).height.replace('px', '')
document.getElementById("content").style.top = parseFloat(headerHeight) + contentTopMargin + "px"
document.getElementById("content").style.height = parseFloat(contentHeight) - parseFloat(headerHeight) - contentTopMargin + "px"