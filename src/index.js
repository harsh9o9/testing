let pagination = document.querySelector(".pagination");
let list = $("ul");
let firstBtn = $("ul li:first-child button");

function setQueryParams() {
  let links = document.querySelectorAll("a");

  links.forEach((link) => {
    let qString = $(link).attr("href") + `?page=${$(link).text()}`;
    $(link).attr("href", qString);
  });
}
function setPaginationFocus() {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("page")) {
    let count = searchParams.get("page");

    let toFocus = $(`.pagination a:eq(${count - 1})`);
    toFocus.focus();
  }
  // $(firstBtn).focus();
}
$(window).on("load", () => {
  setQueryParams();
  setPaginationFocus();
});
