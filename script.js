
function page1Animation(){
var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{      // means nav k ander ka h1 etc
   y: -30,
   duration:0.8,
   delay:0.5,
   opacity:0, 
   stagger: 0.15
})  

tl.from(".center-part1 h1",{
   x:-200,
   opacity:0,
   duration:0.5 
})

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
 })

 
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
 })

 tl.from(".center-part2 img",{
    opacity:0,
    duration:0.4

 },"-=0.5")    // iska mtlb ye ha k element timeline k ander hi chalayga lekin 0.5 second pehle start hojayega

 tl.from(".section1bottom img",{
     y:30,
     opacity:0, 
     duration:1,
     stagger: 1, 


    scrollTrigger:{
                trigger:".section1bottom img",
                scroller:"body",
                // markers:true,
                start:"top 90%",
                end:"top 100%",
                // scrub:"true",
                scrub:2,           
                pin:true ,    
            
            }
 })
}

page1Animation()

/********************************************************************* */

// is trha hm hr cheez k liye alag alag scrollTrigger lga rhe thay but ab hum isse bachne k liye timeline se kam kr lain ge scrolltrigger wala
// gsap.from(".services h3",{
//     x: 100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller:"body",
//         // markers:true,
//         start:"top 5 0%",
//         end:"top 100%",
//         // scrub:"true",
//         scrub:2,           
//         pin:true ,    
//     }
//  })
 


function page2Animation(){
var tl2 = gsap.timeline({

scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 35%",
            end:"top -50%",
            scrub:2
        }
})

tl2.from(".services",{
    y:30,
    duration:0.5,
    opacity:0
})


// line1
tl2.from(".elem.line1.left",{        //.line1.elem  --> without space means line1 naam ki class jis k sath elem class bhi ha bus usko target kro
    x:-300,
    duration:1,
    opacity:0,
},"ding")

tl2.from(".elem.black.line1.right",{       
    x:300,
    duration:1,
    opacity:0,
},"ding")                           //anim --> same name anim ki wajah se ab in dono ki timeline akathi hogaiye aur ab ye aik sath hi chalainge


// line2
tl2.from(".elem.black.line2.left",{        
    x:-300,
    duration:1,
    opacity:0,
},"dong")


tl2.from(".elem.line2.right",{       
    x:300,
    duration:1,
    opacity:0,
},"dong")
}

page2Animation()


