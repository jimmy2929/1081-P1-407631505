function change(index) {
    const p = document.getElementById('section');

    switch (index) {
        case 1:
            p.innerHTML = "<iframe width=100% height=100% src='./網頁設計/w06/w04_nav_demo/w01/intro.html' >";
            break;

        case 2:
            p.innerHTML = "<iframe width=100% height=100% src='./網頁設計/w06/w04_nav_demo/w01/pokemon.html' >";
            break;

        case 3:
            p.innerHTML =
                "<iframe width=100% height=100% src='./網頁設計/w06/w04_nav_demo/w02/imageGallery.html' >";
            break;

        case 4:
            p.innerHTML = "<iframe width=100% height=100% src='./網頁設計/w06/w04_nav_demo/w02/blog.html' >";
            break;

        case 5:
            p.innerHTML = "<iframe width=100% height=100% src='./網頁設計/w06/w04_nav_demo/w03/div.html' >";
            break;

        case 6:
            p.innerHTML = "<iframe width=100% height=100% src='./網頁設計/w06/w04_nav_demo/w04/tku60.html' >";
            break;
    }
}