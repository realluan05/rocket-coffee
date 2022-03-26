function openMenu(event)
{
    event.classList.add("act");
    document.body.classList.add("act");
    document.querySelector("header nav").classList.add("act");
    document.querySelector("header .container").classList.add("act");
}

function closeMenu()
{
    document.body.classList.remove("act");
    document.querySelector(".btn-menu").classList.remove("act");
    document.querySelector("header nav").classList.remove("act");
    document.querySelector("header .container").classList.remove("act");
}