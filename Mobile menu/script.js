let $area = document.querySelector('.area');
let $panel = document.querySelector('.panel');
let action = false;
let x0 = 0;
let x1 = 0;
let x = 0;
let save = -300;

$area.addEventListener('mousedown', function (e) {
    x0 = e.clientX;
    action = true;
});

window.addEventListener('mouseup', function (e) {
    action = false;
    save = x;
    console.log(x);
    if (x >= -150 || x == 0) {
        $panel.style.cssText = 'transform: translateX(' + 0 + 'px)';

    } else {
        $panel.style.cssText = 'transform: translateX(' + -300 + 'px)';
        save = -300;
    }
});

window.addEventListener('mousemove', function (e) {
    if (action) {
        x1 = e.clientX;
        x = save + x1 - x0;
        x = (x >= 0) ? 0 : x;

        $panel.style.cssText = 'transform: translateX(' + x + 'px)';
    }
});

// function menuOpen() {
//     $menu.classList.add('active');
//     $menu.style.cssText = 'transition: transform .2s linear';
//     $overlay.classList.add('active');
//     $overlay.style.cssText = 'transition: opacity .2s linear';
//     moveDistance = 0;
//     last_position = moveDistance;
//   }

//   function menuClose() {
//     $menu.classList.remove('active');
//     $menu.style.cssText = 'transition: transform 0.2s linear';
//     $overlay.classList.remove('active');
//     $overlay.style.cssText = 'transition: opacity .2s linear, visibility .3s linear';
//     moveDistance = -menu_width;
//     last_position = moveDistance;
//   }