function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width= window.innerWidth
canvas.height= window.innerHeight

window.addEventListener('resize', function(){
    canvas.width= window.innerWidth //when we resize it ll 
    canvas.height= window.innerHeight// adjust pic to new width & height
    render()
})

function files(index){
    var data = 
   `3d/male0001.webp
    3d/male0002.webp
    3d/male0003.webp
    3d/male0004.webp
    3d/male0005.webp
    3d/male0006.webp
    3d/male0007.webp
    3d/male0008.webp
    3d/male0009.webp
    3d/male0010.webp
    3d/male0011.webp
    3d/male0012.webp
    3d/male0013.webp
    3d/male0014.webp
    3d/male0015.webp
    3d/male0016.webp
    3d/male0017.webp
    3d/male0018.webp
    3d/male0019.webp
    3d/male0020.webp
    3d/male0021.webp
    3d/male0022.webp
    3d/male0023.webp
    3d/male0024.webp
    3d/male0025.webp
    3d/male0026.webp
    3d/male0027.webp
    3d/male0028.webp
    3d/male0029.webp
    3d/male0030.webp
    3d/male0031.webp
    3d/male0032.webp
    3d/male0033.webp
    3d/male0034.webp
    3d/male0035.webp
    3d/male0036.webp
    3d/male0037.webp
    3d/male0038.webp
    3d/male0039.webp
    3d/male0040.webp
    3d/male0041.webp
    3d/male0042.webp
    3d/male0043.webp
    3d/male0044.webp
    3d/male0045.webp
    3d/male0046.webp
    3d/male0047.webp
    3d/male0048.webp
    3d/male0049.webp
    3d/male0050.webp
    3d/male0051.webp
    3d/male0052.webp
    3d/male0053.webp
    3d/male0054.webp
    3d/male0055.webp
    3d/male0056.webp
    3d/male0057.webp
    3d/male0058.webp
    3d/male0059.webp
    3d/male0060.webp
    3d/male0061.webp
    3d/male0062.webp
    3d/male0063.webp
    3d/male0064.webp
    3d/male0065.webp
    3d/male0066.webp
    3d/male0067.webp
    3d/male0068.webp
    3d/male0069.webp
    3d/male0070.webp
    3d/male0071.webp
    3d/male0072.webp
    3d/male0073.webp
    3d/male0074.webp
    3d/male0075.webp
    3d/male0076.webp
    3d/male0077.webp
    3d/male0078.webp
    3d/male0079.webp
    3d/male0080.webp
    3d/male0081.webp
    3d/male0082.webp
    3d/male0083.webp
    3d/male0084.webp
    3d/male0085.webp
    3d/male0086.webp
    3d/male0087.webp
    3d/male0088.webp
    3d/male0089.webp
    3d/male0090.webp
    3d/male0091.webp
    3d/male0092.webp
    3d/male0093.webp
    3d/male0094.webp
    3d/male0095.webp
    3d/male0096.webp
    3d/male0097.webp
    3d/male0098.webp
    3d/male0099.webp
    3d/male0100.webp
    3d/male0101.webp
    3d/male0102.webp
    3d/male0103.webp
    3d/male0104.webp
    3d/male0105.webp
    3d/male0106.webp
    3d/male0107.webp
    3d/male0108.webp
    3d/male0109.webp
    3d/male0110.webp
    3d/male0111.webp
    3d/male0112.webp
    3d/male0113.webp
    3d/male0114.webp
    3d/male0115.webp
    3d/male0116.webp
    3d/male0117.webp
    3d/male0118.webp
    3d/male0119.webp
    3d/male0120.webp
    3d/male0121.webp
    3d/male0122.webp
    3d/male0123.webp
    3d/male0124.webp
    3d/male0125.webp
    3d/male0126.webp
    3d/male0127.webp
    3d/male0128.webp
    3d/male0129.webp
    3d/male0130.webp
    3d/male0131.webp
    3d/male0132.webp
    3d/male0133.webp
    3d/male0134.webp
    3d/male0135.webp
    3d/male0136.webp
    3d/male0137.webp
    3d/male0138.webp
    3d/male0139.webp
    3d/male0140.webp
    3d/male0141.webp
    3d/male0142.webp
    3d/male0143.webp
    3d/male0144.webp
    3d/male0145.webp
    3d/male0146.webp
    3d/male0147.webp
    3d/male0148.webp
    3d/male0149.webp
    3d/male0150.webp
    3d/male0151.webp
    3d/male0152.webp
    3d/male0153.webp
    3d/male0154.webp
    3d/male0155.webp
    3d/male0156.webp
    3d/male0157.webp
    3d/male0158.webp
    3d/male0159.webp
    3d/male0160.webp
    3d/male0161.webp
    3d/male0162.webp
    3d/male0163.webp
    3d/male0164.webp
    3d/male0165.webp
    3d/male0166.webp
    3d/male0167.webp
    3d/male0168.webp
    3d/male0169.webp
    3d/male0170.webp
    3d/male0171.webp
    3d/male0172.webp
    3d/male0173.webp
    3d/male0174.webp
    3d/male0175.webp
    3d/male0176.webp
    3d/male0177.webp
    3d/male0178.webp
    3d/male0179.webp
    3d/male0180.webp
    3d/male0181.webp
    3d/male0182.webp
    3d/male0183.webp
    3d/male0184.webp
    3d/male0185.webp
    3d/male0186.webp
    3d/male0187.webp
    3d/male0188.webp
    3d/male0189.webp
    3d/male0190.webp
    3d/male0191.webp
    3d/male0192.webp
    3d/male0193.webp
    3d/male0194.webp
    3d/male0195.webp
    3d/male0196.webp
    3d/male0197.webp
    3d/male0198.webp
    3d/male0199.webp
    3d/male0200.webp
    3d/male0201.webp
    3d/male0202.webp
    3d/male0203.webp
    3d/male0204.webp
    3d/male0205.webp
    3d/male0206.webp
    3d/male0207.webp
    3d/male0208.webp
    3d/male0209.webp
    3d/male0210.webp
    3d/male0211.webp
    3d/male0212.webp
    3d/male0213.webp
    3d/male0214.webp
    3d/male0215.webp
    3d/male0216.webp
    3d/male0217.webp
    3d/male0218.webp
    3d/male0219.webp
    3d/male0220.webp
    3d/male0221.webp
    3d/male0222.webp
    3d/male0223.webp
    3d/male0224.webp
    3d/male0225.webp
    3d/male0226.webp
    3d/male0227.webp
    3d/male0228.webp
    3d/male0229.webp
    3d/male0230.webp
    3d/male0231.webp
    3d/male0232.webp
    3d/male0233.webp
    3d/male0234.webp
    3d/male0235.webp
    3d/male0236.webp
    3d/male0237.webp
    3d/male0238.webp
    3d/male0239.webp
    3d/male0240.webp
    3d/male0241.webp
    3d/male0242.webp
    3d/male0243.webp
    3d/male0244.webp
    3d/male0245.webp
    3d/male0246.webp
    3d/male0247.webp
    3d/male0248.webp
    3d/male0249.webp
    3d/male0250.webp
    3d/male0251.webp
    3d/male0252.webp
    3d/male0253.webp
    3d/male0254.webp
    3d/male0255.webp
    3d/male0256.webp
    3d/male0257.webp
    3d/male0258.webp
    3d/male0259.webp
    3d/male0260.webp
    3d/male0261.webp
    3d/male0262.webp
    3d/male0263.webp
    3d/male0264.webp
    3d/male0265.webp
    3d/male0266.webp
    3d/male0267.webp
    3d/male0268.webp
    3d/male0269.webp
    3d/male0270.webp
    3d/male0271.webp
    3d/male0272.webp
    3d/male0273.webp
    3d/male0274.webp
    3d/male0275.webp
    3d/male0276.webp
    3d/male0277.webp
    3d/male0278.webp
    3d/male0279.webp
    3d/male0280.webp
    3d/male0281.webp
    3d/male0282.webp
    3d/male0283.webp
    3d/male0284.webp
    3d/male0285.webp
    3d/male0286.webp
    3d/male0287.webp
    3d/male0288.webp
    3d/male0289.webp
    3d/male0290.webp
    3d/male0291.webp
    3d/male0292.webp
    3d/male0293.webp
    3d/male0294.webp
    3d/male0295.webp
    3d/male0296.webp
    3d/male0297.webp
    3d/male0298.webp
    3d/male0299.webp
    3d/male0300.webp`

    return data.split('\n')[index]//this ll change images into an array form
}

const frameCount= 300
const images=[] //storing img from tht for loop
const imageSeq={
    frame: 1, //img count ll start from 1
}

for(let i=0;i< frameCount; i++){
    const img= new Image();
    img.src= files(i); //above file func
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
images[1].onload= render; // img1 ll be shown after every refresh

function render(){
    scaleImage(images[imageSeq.frame],context)
}
function scaleImage(img, con){
    var canvas= con.canvas
    var hRatio= canvas.width/ img.width
    var vRatio= canvas.height/ img.height
    var ratio= Math.max(hRatio, vRatio)
    var center_x= (canvas.width- img.width*ratio)/2
    var center_y= (canvas.height- img.height*ratio)/2
    con.clearRect(0,0, canvas.width, canvas.height)
    con.drawImage(
        img, 0,0, img.width, img.height, center_x, 
        center_y, img.width* ratio, img.height* ratio
    )
}

ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  

gsap.to('#page1',{
    scrollTriger:{
        trigger:`#page1`,
        start: `top top`,//element Top, screen Top
        end: `bottom top`,
        markers: true,
        pin: true,
        scroller: `#main`
    }
})
gsap.to('#page2',{
    scrollTriger:{
        trigger:`#page2`,
        start: `top top`,
        end: `bottom top`,
        markers: true,
        pin: true,
        scroller: `#main`
    }
})
gsap.to('#page3',{
    scrollTriger:{
        trigger:`#page3`,
        start: `top top`,
        end: `bottom top`,
        markers: true,
        pin: true,
        scroller: `#main`
    }
})

/* for ContactPage Animation */
const observer= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements= document.querySelectorAll('.page4')
hiddenElements.forEach((el)=>observer.observe(el))
