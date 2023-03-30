var hidingShadow = false;

window.onscroll = function () {
    if (window.scrollY < 100) {
        addShadow(document.getElementsByClassName("navbar").item(0));
    } else {
        removeShadow(document.getElementsByClassName("navbar").item(0));
    }
}

function addShadow(element) {
    if (hidingShadow) { return }
    hidingShadow = true;
    element.classList.remove('nav-shadow');
}

function removeShadow(element) {
    if (!hidingShadow) { return }
    hidingShadow = false;
    element.classList.add('nav-shadow');
}

function onNavlinkClicked(e) {
    var elms = document.getElementsByClassName("nav-link");
    for (i = 0; i < elms.length; i++) {
        var elm = elms.item(i);
        if (elm == e) {
            elm.classList.add('active');
            elm.setAttribute('aria-current', 'page');
        } else {
            elm.classList.remove('active');
            elm.removeAttribute('aria-current');
        }
    }
}