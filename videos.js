
// import navbar from './components/navbar.js'
// // console.log(navbar)

// let navbar_div=document.getElementById('navbar');

// navbar_div.innerHTML = navbar();




const video_details_div = document.getElementById('video_details');

const playVideo=()=>{
    let data=JSON.parse( localStorage.getItem("clicked_video"));
console.log("data: " , data);

let iframe=document.createElement("iframe");
iframe.src=`http://www.youtube.com/embed/${data.el.id.videoId}?autoplay=1`;
iframe.width="100%";
iframe.height="100%";
iframe.setAttribute("allowfullscreen", true)
iframe.allow='autoplay';

video_details_div.append(iframe);
}