


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var cursor = document.querySelector(".cursor")

var body =document.querySelector("body")

main.addEventListener("mousemove",function(dets){

    gsap.to(cursor,{
        x:dets.x-30,
        y:dets.y,
        delay:.01,
        ease:"power1.out"
    })
})







var loadingPage= document.querySelector(".loading-page")
var loadingAnimeTimeLine = gsap.timeline();

 loadingAnimeTimeLine.to(".loading-page span",{

    color:"#FE330A",
    duration:.2,
    stagger:.5,
    delay:.2
 })

loadingAnimeTimeLine.to(".loading-page",{
    transform:"translateY(-100vh)",
    delay:.4
})






 var navAtag = document.querySelectorAll(".nav-right a")


 navAtag.forEach(function(elem){


  elem.addEventListener("mouseenter",function(x){
        gsap.to(elem,{
            backgroundColor:"black",
            color:"white",
            duration:.2,
            borderRadius:0,
            scale:1.2
        })

        gsap.to(cursor,{
            backgroundColor:"white"
        })
  })
  elem.addEventListener("mouseleave",function(x){
        gsap.to(elem,{
            backgroundColor:"#f3dab8",
            color:"black",
            duration:.2,
            scale:1,
            borderRadius:'100px'
        })
        gsap.to(cursor,{
            backgroundColor:"black"
        })
  })

 })


 var pg1_timeLine = gsap.timeline()


 pg1_timeLine.from('.nav-right a',{
     y:-50,
     opacity:0,
     duration:.3,
     delay:.1,
     ease:"power1.out",
     stagger:.1
 })



gsap.to(".hero-right span", {
    x: 250,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-right",
        start: "top 30%",
        end: "bottom 10%",
        scrub: 1,
        
    }
});
gsap.to(".hero-left", {
    x: -150,
    opacity: 0,
    duration: .5,
    
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-right",
        start: "top 60%",
        end: "bottom 10%",
        scrub: 1,
       
    }
});


/*Using forEach with GSAP can be useful in certain situations, but when it comes to creating animations that need to be staggered or triggered together (like on scroll), it's generally more efficient and easier to manage if you animate all the elements in a single GSAP tween. Here’s why:*/


var heroH1= document.querySelectorAll(".hero-right-content span")
heroH1.forEach(function(dets){

  dets.addEventListener("mouseenter",function(){


     gsap.to(dets,{
     
      
        textShadow: '2px 2px 16px rgba(0, 0, 0, 0.23)',
        onUpdate: function() {
            // Manually set the webkitTextStroke during animation
            dets.style.color="transparent"
            dets.style.webkitTextStroke="2px solid black"
          }
     })

    
  })
  dets.addEventListener("mouseleave",function(){


     gsap.to(dets,{
       color: 'black',
        textShadow: 'none',
    //    scale:1,
    //     margin:"0vw 0vw",
      
     })
   
  })

})




/* -----------string-------------------*/

var StringInitial =`M 20 200 Q 750 200 1380 200`
var StringFinal =`M 20 200 Q 750 200 1380 200`


var string= document.querySelectorAll(".string")

string.forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){


        var movedPath =`M 20 200 Q ${dets.x} ${dets.y} 1380 200`;
    
        gsap.to(".string svg path",{
            attr:{d:movedPath},
            duration:.3,
            ease:"elastic.out"
        })
    })
    elem.addEventListener("mouseleave", function(dets){
    
    
       
    
        gsap.to(".string svg path",{
            attr:{d:StringFinal},
            duration:.3,
            ease:"elastic.out"
        })
    })
    
})




var heroVideo = document.querySelector(".hero-video video");

heroVideo.addEventListener("mouseenter", function(dets) {
    cursor.innerHTML="Play",
    gsap.to(cursor, {
        
        x: dets.x-15,
        y: dets.y,
        height:"5.5vw",
        width:"5.5vw",
        duration:.2,
        delay:0,
        onComplete: function() {
              
            cursor.style.color="black";
            cursor.style.backgroundColor="white";
            cursor.style.display="flex";
            cursor.style.justifyContent="center";
            cursor.style.alignItems="center";
            cursor.style.padding=".5vw .5vw";
            cursor.style.fontSize="1.2vw";
            cursor.style.fontWeight="600";
            cursor.style.textTransform="uppercase";
        }
    });
});

heroVideo.addEventListener("mouseleave", function(dets) {
    cursor.innerHTML="",
    gsap.to(cursor, {
        
        x: dets.x,
        y: dets.y,
        height:"1vw",
        width:"1vw",
        duration:.2,
        delay:0,
        onComplete: function() {
              
            cursor.style.backgroundColor="black";
            cursor.style.display="flex";
            cursor.style.justifyContent="center";
            cursor.style.alignItems="center";
            cursor.style.padding="0 0 ";
            cursor.style.fontSize="0";
            cursor.style.textTransform="uppercase";
        }
     
    });
});




window.addEventListener("wheel",function(dets){

if(dets.deltaY>0){
    gsap.to(".move",{
        transform:"translateX(-200%)",
        duration:50,
        delay:.2,
        repeat:-1

    })
}
 
else if(dets.deltaY<0){
    gsap.to(".move",{
        transform:"translateX(200%)",
        duration:50,
        delay:.2
    })
}
 
 

})




function breakText(){
    
    var heroSpan=document.querySelector('.hero-left span')

    var h1Text= heroSpan.textContent
    
    var splittedText= h1Text.split("");
    var clutter=""
    


//The forEach method specifically provides the index as an integer to the callback function's second parameter because that is how the method is designed.
    splittedText.forEach(function(e){
    
    
       clutter= clutter+`<span class="hero-span">${e}</span>`
    
    

})
heroSpan.innerHTML=clutter;

}

breakText();


// i could have use breaText() three times and passed three different tags ,like this given below....but iam(SATYAM) an IDIOT.

/*
function breakText(selector) {
    var element = document.querySelector(selector);

    if (element) {
        var elementText = element.textContent;
        var splittedText = elementText.split("");
        var clutter = "";

        splittedText.forEach(function(e) {
            clutter += `<span class="hero-span">${e}</span>`;
        });

        element.innerHTML = clutter;
    }
}

breakText('.hero-left span');
breakText('.pg3-left h1');
breakText('.pg3-right span');
*/


var heroSPANSS =document.querySelectorAll(".hero-span")

heroSPANSS.forEach(function(dets){
    
    dets.addEventListener('mouseenter',function(x){

     gsap.to(dets,{
       
        duration:.1,
        color:"red",
        
        
     })


    })  
    dets.addEventListener('mouseleave',function(x){

     gsap.to(dets,{
       
        duration:.1,
        color:"",
        delay:.3,
       
        
     })


    })  
})






function breakTextPg3Left(){
    
    var pg3Text=document.querySelector('.pg3-left h1')

    var pg3TextCont= pg3Text.textContent
    
    var splittedText= pg3TextCont.split("");
    var clutter=""
    


//The forEach method specifically provides the index as an integer to the callback function's second parameter because that is how the method is designed.
    splittedText.forEach(function(e){
    
    
       clutter= clutter+`<span class="pg3Text">${e}</span>`
    
    

})
pg3Text.innerHTML=clutter;

}

breakTextPg3Left();


var pg3Textss =document.querySelectorAll(".pg3Text")

pg3Textss.forEach(function(dets){
    
    dets.addEventListener('mouseenter',function(x){

     gsap.to(dets,{
       
        duration:.1,
        color:"red",
        
     })


    })  
    dets.addEventListener('mouseleave',function(x){

     gsap.to(dets,{
       
        duration:.1,
        color:"",
        delay:.1,
        
     })


    })  
})





function breakTextPg3Right(){
    
    var pg3Textright=document.querySelector('.pg3-right span')

    var pg3TextContright= pg3Textright.textContent
    
    var splittedText= pg3TextContright.split("");
    var clutter=""
    


//The forEach method specifically provides the index as an integer to the callback function's second parameter because that is how the method is designed.
    splittedText.forEach(function(e){
    
    
       clutter= clutter+`<span class="pg3Textright">${e}</span>`
    
    

})
pg3Textright.innerHTML=clutter;

}

breakTextPg3Right();


var pg3Textrightsss =document.querySelectorAll(".pg3Textright")

pg3Textrightsss.forEach(function(dets){
    
    dets.addEventListener('mouseenter',function(x){

     gsap.to(dets,{
       
        duration:.1,
        color:"red",
         fontSize:"30px"
        
     })


    })  
    dets.addEventListener('mouseleave',function(x){

     gsap.to(dets,{
       
        duration:.1,
        color:"",
        delay:.1,
        fontSize:"22px"
        
     })


    })  
})


 var pg4atag = document.querySelectorAll(".page4 a ")

 pg4atag.forEach(function(dets){


    dets.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            backgroundColor:" transparent",
            height:"2.6vw",
            width:"2.6vw",
            border:"2.5px dashed white",
            duration:.1,
            delay:.1,
            
        })

       
    })

    dets.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            backgroundColor:"black",
            height:"1vw",
            width:"1vw",
            border:"none",
            duration:.1,
            delay:.1
        })

        
    
    })
 })




 var pg4Container = document.querySelector(".pg4-container")

var pg4VideoCont = document.querySelector(".pg4-video-cont")

 pg4Container.addEventListener("mouseenter",function(dets){
  
pg4VideoCont.style.display="block"
 })
 pg4Container.addEventListener("mouseleave",function(dets){
  
pg4VideoCont.style.display="none"
 })



// very very very important

/*
1. Search Scope: Unlike document.querySelector, which searches the entire document, row.querySelector limits its search to the descendants (children, grandchildren, etc.) of the specific element row.

2. Selector Matching: It takes a CSS selector as an argument (e.g., .overlay, #id, div, a[href='#']) and returns the first matching element found within the row.

3. Single Element: It only returns the first element that matches the selector. If multiple elements match, only the first one is returned.

4. Return Value: If an element matching the selector is found, it returns that element as an Element object. If no match is found, it returns null.
*/

 var pg4Rows = document.querySelectorAll(".pg4-row");

 pg4Rows.forEach(function(Currentrow) {

     var overlay = Currentrow.querySelector(".overlay");
 
     Currentrow.addEventListener("mouseenter", function() {
         gsap.to(overlay, {
             top: "0%",
             duration: 0.3
         });
     });
 

     Currentrow.addEventListener("mouseleave", function() {
         gsap.to(overlay, {
             top: "-100%",
             duration: 0.3
         });
     });


 });
 















 var pg4Rows = document.querySelectorAll(".pg4-row")


pg4Rows.forEach(function(e){
   
    e.addEventListener("mousemove",function(){

        var image = e.getAttribute("data-imageLikho")
        pg4VideoCont.style.backgroundImage=`url(${image})`

      

    })
  
})
 




pg4VideoCont.addEventListener("mouseenter", function() {
    pg4VideoCont.style.display = "block";
    pg4VideoCont.style.cursor = "pointer";
});

pg4VideoCont.addEventListener("mouseleave", function() {
    pg4VideoCont.style.display = "none";
    pg4VideoCont.style.cursor = "none";
});

    

var pg4Button =document.querySelector(".pg4-button a")


pg4Button.addEventListener("mouseenter",function(){


    gsap.to(cursor,{
        backgroundColor:"transparent",
        border:"2px dashed #FE330A",

        
    })
  
})
pg4Button.addEventListener("mouseleave",function(){


    gsap.to(cursor,{
        backgroundColor:"black",
        border:'none'

    })
   
})


