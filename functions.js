function openNav(e){
  e.preventDefault()
  $(".hiddenNav").toggleClass("hiddenNavShow")
  $("header").toggleClass("headerOpen")
  $("nav").toggleClass("navOpen")
  $(".title").toggleClass("titleOpen")
  e.stopPropagation()
}
