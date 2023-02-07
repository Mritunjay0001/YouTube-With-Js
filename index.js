

// import navbar from './components/navbar.js'
// // console.log(navbar)

// let navbar_nav=document.getElementById('navbar');

// navbar_nav.innerHTML = navbar();





const API_KEY='AIzaSyC20SvYF9K3IcAGNOB8qZEVbpELbPpoEeo' ;
const container_div=document.getElementById('container');

const searchVidios= async ()=>{
    try{
        const query=document.getElementById('query').value;

      const res=await  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${API_KEY}`);
  
        const data= await res.json();
        const actual_data=data.items;
        appendVideos(actual_data);
        console.log("data:",data);

    }
    catch(error){
        console.log("error:",error); 
    }

} ;

const appendVideos= (data)=>{
    // search_results_div.innerHTML=null;

data.forEach((el) =>{

    const title=el.snippet.title;
    const videoId=el.id.videoId;
    const thumbnail=el.snippet.thumbnails.high.url;
    const chanel_name=el.snippet.channelTitle;
// console.log('el:',el);

const div=document.createElement('div');
const img=document.createElement('img');
img.src=thumbnail;
const title_html=document.createElement('h4');
title_html.innerText=title;
const chanel_html=document.createElement('h5');
chanel_html.innerText=chanel_name;

// div.addEventListener('click',function(e) {

// })
let data={
    // videoId,
    // snippet,
    el
}
div.onclick=()=>{
    console.log('clicked')
    storeClickedvideo(data);
}
div.append(img,title_html,chanel_html)

container_div.append(div);

});
};

// const showVideos=(x)=>{
//     window.location.href ="videos.html";

//     x=JSON.stringify(x);
function storeClickedvideo(data){
    localStorage.setItem("clicked_video",JSON.stringify(data));
window.location.href = "videos.html";

};

// function