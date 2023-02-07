function navbar(){
       
    return `<div class="toggle-btn">
    <span></span>
    <span></span>
    <span></span>
</div>
<img src="https://www.freepnglogos.com/uploads/youtube-logo-png/new-youtube-logo-icon-update-youtube-issue-fortawesome-font-3.png" class="logo" alt="">
<div class="search-box">
    <input type="text" id="query" placeholder="search">
    <button onclick="searchVidios()"><i id="search" class="fa-solid fa-magnifying-glass"></i></button>
</div>
<div class="user-options">
    <img src="https://raw.githubusercontent.com/kunaal438/youtube-clone/6f8ed562b19c1c4c2a30eaa9cd05ebcf1c5eac8f/img/video.PNG" class="icon" alt="">
    <img src="https://raw.githubusercontent.com/kunaal438/youtube-clone/6f8ed562b19c1c4c2a30eaa9cd05ebcf1c5eac8f/img/grid.PNG" class="icon" alt="">
    <img src="https://raw.githubusercontent.com/kunaal438/youtube-clone/6f8ed562b19c1c4c2a30eaa9cd05ebcf1c5eac8f/img/bell.PNG" class="icon" alt="">
    <div class="user-dp">
        <img class="img2" src="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/88138484_778034006017692_3013273991730167808_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PaYY7ZNyLQkAX-qeu5h&_nc_ht=scontent.fixr3-2.fna&oh=00_AT9g9uYeziiZLY0nloNwjmD0RyW1DoGck5FOdGp2TrlpWw&oe=634A3F18" alt="">
    </div>
</div>`



}

export default navbar;