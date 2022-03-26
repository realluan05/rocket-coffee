function openMenu(event)
{
    event.className = "btn-menu act";
    document.body.className = "act";
    document.querySelector("header nav").className = "act";
    document.querySelector("header .container").className = "container act";
}

function closeMenu()
{
    document.body.className = "";
    document.querySelector(".btn-menu").className = "btn-menu";
    document.querySelector("header nav").className = "";
    document.querySelector("header .container").className = "container";
}