function change(index) {
    const p = document.getElementById('section');

    switch (index) {
        case 1:
            p.innerHTML = "<iframe  width=100% height=100%  src='./個人資料/基本資料.html' >";
            break;

        case 2:
            p.innerHTML = "<iframe width=100% height=100% src='./個人資料/工作經歷.html' >";
            break;

        case 3:
            p.innerHTML = "<iframe width=100% height=100% src='./個人資料/未來志向.html' >";
            break;

        case 4:
            p.innerHTML = "<iframe width=100% height=100% src='./個人資料/我的寶貝.html' >";
            break;
    }
}