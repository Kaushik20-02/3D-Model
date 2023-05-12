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
   `CYBERFICTION-IMAGES/male0001.webp
    CYBERFICTION-IMAGES/male0002.webp
    CYBERFICTION-IMAGES/male0003.webp
    CYBERFICTION-IMAGES/male0004.webp
    CYBERFICTION-IMAGES/male0005.webp
    CYBERFICTION-IMAGES/male0006.webp
    CYBERFICTION-IMAGES/male0007.webp
    CYBERFICTION-IMAGES/male0008.webp
    CYBERFICTION-IMAGES/male0009.webp
    CYBERFICTION-IMAGES/male0010.webp
    CYBERFICTION-IMAGES/male0011.webp
    CYBERFICTION-IMAGES/male0012.webp
    CYBERFICTION-IMAGES/male0013.webp
    CYBERFICTION-IMAGES/male0014.webp
    CYBERFICTION-IMAGES/male0015.webp
    CYBERFICTION-IMAGES/male0016.webp
    CYBERFICTION-IMAGES/male0017.webp
    CYBERFICTION-IMAGES/male0018.webp
    CYBERFICTION-IMAGES/male0019.webp
    CYBERFICTION-IMAGES/male0020.webp
    CYBERFICTION-IMAGES/male0021.webp
    CYBERFICTION-IMAGES/male0022.webp
    CYBERFICTION-IMAGES/male0023.webp
    CYBERFICTION-IMAGES/male0024.webp
    CYBERFICTION-IMAGES/male0025.webp
    CYBERFICTION-IMAGES/male0026.webp
    CYBERFICTION-IMAGES/male0027.webp
    CYBERFICTION-IMAGES/male0028.webp
    CYBERFICTION-IMAGES/male0029.webp
    CYBERFICTION-IMAGES/male0030.webp
    CYBERFICTION-IMAGES/male0031.webp
    CYBERFICTION-IMAGES/male0032.webp
    CYBERFICTION-IMAGES/male0033.webp
    CYBERFICTION-IMAGES/male0034.webp
    CYBERFICTION-IMAGES/male0035.webp
    CYBERFICTION-IMAGES/male0036.webp
    CYBERFICTION-IMAGES/male0037.webp
    CYBERFICTION-IMAGES/male0038.webp
    CYBERFICTION-IMAGES/male0039.webp
    CYBERFICTION-IMAGES/male0040.webp
    CYBERFICTION-IMAGES/male0041.webp
    CYBERFICTION-IMAGES/male0042.webp
    CYBERFICTION-IMAGES/male0043.webp
    CYBERFICTION-IMAGES/male0044.webp
    CYBERFICTION-IMAGES/male0045.webp
    CYBERFICTION-IMAGES/male0046.webp
    CYBERFICTION-IMAGES/male0047.webp
    CYBERFICTION-IMAGES/male0048.webp
    CYBERFICTION-IMAGES/male0049.webp
    CYBERFICTION-IMAGES/male0050.webp
    CYBERFICTION-IMAGES/male0051.webp
    CYBERFICTION-IMAGES/male0052.webp
    CYBERFICTION-IMAGES/male0053.webp
    CYBERFICTION-IMAGES/male0054.webp
    CYBERFICTION-IMAGES/male0055.webp
    CYBERFICTION-IMAGES/male0056.webp
    CYBERFICTION-IMAGES/male0057.webp
    CYBERFICTION-IMAGES/male0058.webp
    CYBERFICTION-IMAGES/male0059.webp
    CYBERFICTION-IMAGES/male0060.webp
    CYBERFICTION-IMAGES/male0061.webp
    CYBERFICTION-IMAGES/male0062.webp
    CYBERFICTION-IMAGES/male0063.webp
    CYBERFICTION-IMAGES/male0064.webp
    CYBERFICTION-IMAGES/male0065.webp
    CYBERFICTION-IMAGES/male0066.webp
    CYBERFICTION-IMAGES/male0067.webp
    CYBERFICTION-IMAGES/male0068.webp
    CYBERFICTION-IMAGES/male0069.webp
    CYBERFICTION-IMAGES/male0070.webp
    CYBERFICTION-IMAGES/male0071.webp
    CYBERFICTION-IMAGES/male0072.webp
    CYBERFICTION-IMAGES/male0073.webp
    CYBERFICTION-IMAGES/male0074.webp
    CYBERFICTION-IMAGES/male0075.webp
    CYBERFICTION-IMAGES/male0076.webp
    CYBERFICTION-IMAGES/male0077.webp
    CYBERFICTION-IMAGES/male0078.webp
    CYBERFICTION-IMAGES/male0079.webp
    CYBERFICTION-IMAGES/male0080.webp
    CYBERFICTION-IMAGES/male0081.webp
    CYBERFICTION-IMAGES/male0082.webp
    CYBERFICTION-IMAGES/male0083.webp
    CYBERFICTION-IMAGES/male0084.webp
    CYBERFICTION-IMAGES/male0085.webp
    CYBERFICTION-IMAGES/male0086.webp
    CYBERFICTION-IMAGES/male0087.webp
    CYBERFICTION-IMAGES/male0088.webp
    CYBERFICTION-IMAGES/male0089.webp
    CYBERFICTION-IMAGES/male0090.webp
    CYBERFICTION-IMAGES/male0091.webp
    CYBERFICTION-IMAGES/male0092.webp
    CYBERFICTION-IMAGES/male0093.webp
    CYBERFICTION-IMAGES/male0094.webp
    CYBERFICTION-IMAGES/male0095.webp
    CYBERFICTION-IMAGES/male0096.webp
    CYBERFICTION-IMAGES/male0097.webp
    CYBERFICTION-IMAGES/male0098.webp
    CYBERFICTION-IMAGES/male0099.webp
    CYBERFICTION-IMAGES/male0100.webp
    CYBERFICTION-IMAGES/male0101.webp
    CYBERFICTION-IMAGES/male0102.webp
    CYBERFICTION-IMAGES/male0103.webp
    CYBERFICTION-IMAGES/male0104.webp
    CYBERFICTION-IMAGES/male0105.webp
    CYBERFICTION-IMAGES/male0106.webp
    CYBERFICTION-IMAGES/male0107.webp
    CYBERFICTION-IMAGES/male0108.webp
    CYBERFICTION-IMAGES/male0109.webp
    CYBERFICTION-IMAGES/male0110.webp
    CYBERFICTION-IMAGES/male0111.webp
    CYBERFICTION-IMAGES/male0112.webp
    CYBERFICTION-IMAGES/male0113.webp
    CYBERFICTION-IMAGES/male0114.webp
    CYBERFICTION-IMAGES/male0115.webp
    CYBERFICTION-IMAGES/male0116.webp
    CYBERFICTION-IMAGES/male0117.webp
    CYBERFICTION-IMAGES/male0118.webp
    CYBERFICTION-IMAGES/male0119.webp
    CYBERFICTION-IMAGES/male0120.webp
    CYBERFICTION-IMAGES/male0121.webp
    CYBERFICTION-IMAGES/male0122.webp
    CYBERFICTION-IMAGES/male0123.webp
    CYBERFICTION-IMAGES/male0124.webp
    CYBERFICTION-IMAGES/male0125.webp
    CYBERFICTION-IMAGES/male0126.webp
    CYBERFICTION-IMAGES/male0127.webp
    CYBERFICTION-IMAGES/male0128.webp
    CYBERFICTION-IMAGES/male0129.webp
    CYBERFICTION-IMAGES/male0130.webp
    CYBERFICTION-IMAGES/male0131.webp
    CYBERFICTION-IMAGES/male0132.webp
    CYBERFICTION-IMAGES/male0133.webp
    CYBERFICTION-IMAGES/male0134.webp
    CYBERFICTION-IMAGES/male0135.webp
    CYBERFICTION-IMAGES/male0136.webp
    CYBERFICTION-IMAGES/male0137.webp
    CYBERFICTION-IMAGES/male0138.webp
    CYBERFICTION-IMAGES/male0139.webp
    CYBERFICTION-IMAGES/male0140.webp
    CYBERFICTION-IMAGES/male0141.webp
    CYBERFICTION-IMAGES/male0142.webp
    CYBERFICTION-IMAGES/male0143.webp
    CYBERFICTION-IMAGES/male0144.webp
    CYBERFICTION-IMAGES/male0145.webp
    CYBERFICTION-IMAGES/male0146.webp
    CYBERFICTION-IMAGES/male0147.webp
    CYBERFICTION-IMAGES/male0148.webp
    CYBERFICTION-IMAGES/male0149.webp
    CYBERFICTION-IMAGES/male0150.webp
    CYBERFICTION-IMAGES/male0151.webp
    CYBERFICTION-IMAGES/male0152.webp
    CYBERFICTION-IMAGES/male0153.webp
    CYBERFICTION-IMAGES/male0154.webp
    CYBERFICTION-IMAGES/male0155.webp
    CYBERFICTION-IMAGES/male0156.webp
    CYBERFICTION-IMAGES/male0157.webp
    CYBERFICTION-IMAGES/male0158.webp
    CYBERFICTION-IMAGES/male0159.webp
    CYBERFICTION-IMAGES/male0160.webp
    CYBERFICTION-IMAGES/male0161.webp
    CYBERFICTION-IMAGES/male0162.webp
    CYBERFICTION-IMAGES/male0163.webp
    CYBERFICTION-IMAGES/male0164.webp
    CYBERFICTION-IMAGES/male0165.webp
    CYBERFICTION-IMAGES/male0166.webp
    CYBERFICTION-IMAGES/male0167.webp
    CYBERFICTION-IMAGES/male0168.webp
    CYBERFICTION-IMAGES/male0169.webp
    CYBERFICTION-IMAGES/male0170.webp
    CYBERFICTION-IMAGES/male0171.webp
    CYBERFICTION-IMAGES/male0172.webp
    CYBERFICTION-IMAGES/male0173.webp
    CYBERFICTION-IMAGES/male0174.webp
    CYBERFICTION-IMAGES/male0175.webp
    CYBERFICTION-IMAGES/male0176.webp
    CYBERFICTION-IMAGES/male0177.webp
    CYBERFICTION-IMAGES/male0178.webp
    CYBERFICTION-IMAGES/male0179.webp
    CYBERFICTION-IMAGES/male0180.webp
    CYBERFICTION-IMAGES/male0181.webp
    CYBERFICTION-IMAGES/male0182.webp
    CYBERFICTION-IMAGES/male0183.webp
    CYBERFICTION-IMAGES/male0184.webp
    CYBERFICTION-IMAGES/male0185.webp
    CYBERFICTION-IMAGES/male0186.webp
    CYBERFICTION-IMAGES/male0187.webp
    CYBERFICTION-IMAGES/male0188.webp
    CYBERFICTION-IMAGES/male0189.webp
    CYBERFICTION-IMAGES/male0190.webp
    CYBERFICTION-IMAGES/male0191.webp
    CYBERFICTION-IMAGES/male0192.webp
    CYBERFICTION-IMAGES/male0193.webp
    CYBERFICTION-IMAGES/male0194.webp
    CYBERFICTION-IMAGES/male0195.webp
    CYBERFICTION-IMAGES/male0196.webp
    CYBERFICTION-IMAGES/male0197.webp
    CYBERFICTION-IMAGES/male0198.webp
    CYBERFICTION-IMAGES/male0199.webp
    CYBERFICTION-IMAGES/male0200.webp
    CYBERFICTION-IMAGES/male0201.webp
    CYBERFICTION-IMAGES/male0202.webp
    CYBERFICTION-IMAGES/male0203.webp
    CYBERFICTION-IMAGES/male0204.webp
    CYBERFICTION-IMAGES/male0205.webp
    CYBERFICTION-IMAGES/male0206.webp
    CYBERFICTION-IMAGES/male0207.webp
    CYBERFICTION-IMAGES/male0208.webp
    CYBERFICTION-IMAGES/male0209.webp
    CYBERFICTION-IMAGES/male0210.webp
    CYBERFICTION-IMAGES/male0211.webp
    CYBERFICTION-IMAGES/male0212.webp
    CYBERFICTION-IMAGES/male0213.webp
    CYBERFICTION-IMAGES/male0214.webp
    CYBERFICTION-IMAGES/male0215.webp
    CYBERFICTION-IMAGES/male0216.webp
    CYBERFICTION-IMAGES/male0217.webp
    CYBERFICTION-IMAGES/male0218.webp
    CYBERFICTION-IMAGES/male0219.webp
    CYBERFICTION-IMAGES/male0220.webp
    CYBERFICTION-IMAGES/male0221.webp
    CYBERFICTION-IMAGES/male0222.webp
    CYBERFICTION-IMAGES/male0223.webp
    CYBERFICTION-IMAGES/male0224.webp
    CYBERFICTION-IMAGES/male0225.webp
    CYBERFICTION-IMAGES/male0226.webp
    CYBERFICTION-IMAGES/male0227.webp
    CYBERFICTION-IMAGES/male0228.webp
    CYBERFICTION-IMAGES/male0229.webp
    CYBERFICTION-IMAGES/male0230.webp
    CYBERFICTION-IMAGES/male0231.webp
    CYBERFICTION-IMAGES/male0232.webp
    CYBERFICTION-IMAGES/male0233.webp
    CYBERFICTION-IMAGES/male0234.webp
    CYBERFICTION-IMAGES/male0235.webp
    CYBERFICTION-IMAGES/male0236.webp
    CYBERFICTION-IMAGES/male0237.webp
    CYBERFICTION-IMAGES/male0238.webp
    CYBERFICTION-IMAGES/male0239.webp
    CYBERFICTION-IMAGES/male0240.webp
    CYBERFICTION-IMAGES/male0241.webp
    CYBERFICTION-IMAGES/male0242.webp
    CYBERFICTION-IMAGES/male0243.webp
    CYBERFICTION-IMAGES/male0244.webp
    CYBERFICTION-IMAGES/male0245.webp
    CYBERFICTION-IMAGES/male0246.webp
    CYBERFICTION-IMAGES/male0247.webp
    CYBERFICTION-IMAGES/male0248.webp
    CYBERFICTION-IMAGES/male0249.webp
    CYBERFICTION-IMAGES/male0250.webp
    CYBERFICTION-IMAGES/male0251.webp
    CYBERFICTION-IMAGES/male0252.webp
    CYBERFICTION-IMAGES/male0253.webp
    CYBERFICTION-IMAGES/male0254.webp
    CYBERFICTION-IMAGES/male0255.webp
    CYBERFICTION-IMAGES/male0256.webp
    CYBERFICTION-IMAGES/male0257.webp
    CYBERFICTION-IMAGES/male0258.webp
    CYBERFICTION-IMAGES/male0259.webp
    CYBERFICTION-IMAGES/male0260.webp
    CYBERFICTION-IMAGES/male0261.webp
    CYBERFICTION-IMAGES/male0262.webp
    CYBERFICTION-IMAGES/male0263.webp
    CYBERFICTION-IMAGES/male0264.webp
    CYBERFICTION-IMAGES/male0265.webp
    CYBERFICTION-IMAGES/male0266.webp
    CYBERFICTION-IMAGES/male0267.webp
    CYBERFICTION-IMAGES/male0268.webp
    CYBERFICTION-IMAGES/male0269.webp
    CYBERFICTION-IMAGES/male0270.webp
    CYBERFICTION-IMAGES/male0271.webp
    CYBERFICTION-IMAGES/male0272.webp
    CYBERFICTION-IMAGES/male0273.webp
    CYBERFICTION-IMAGES/male0274.webp
    CYBERFICTION-IMAGES/male0275.webp
    CYBERFICTION-IMAGES/male0276.webp
    CYBERFICTION-IMAGES/male0277.webp
    CYBERFICTION-IMAGES/male0278.webp
    CYBERFICTION-IMAGES/male0279.webp
    CYBERFICTION-IMAGES/male0280.webp
    CYBERFICTION-IMAGES/male0281.webp
    CYBERFICTION-IMAGES/male0282.webp
    CYBERFICTION-IMAGES/male0283.webp
    CYBERFICTION-IMAGES/male0284.webp
    CYBERFICTION-IMAGES/male0285.webp
    CYBERFICTION-IMAGES/male0286.webp
    CYBERFICTION-IMAGES/male0287.webp
    CYBERFICTION-IMAGES/male0288.webp
    CYBERFICTION-IMAGES/male0289.webp
    CYBERFICTION-IMAGES/male0290.webp
    CYBERFICTION-IMAGES/male0291.webp
    CYBERFICTION-IMAGES/male0292.webp
    CYBERFICTION-IMAGES/male0293.webp
    CYBERFICTION-IMAGES/male0294.webp
    CYBERFICTION-IMAGES/male0295.webp
    CYBERFICTION-IMAGES/male0296.webp
    CYBERFICTION-IMAGES/male0297.webp
    CYBERFICTION-IMAGES/male0298.webp
    CYBERFICTION-IMAGES/male0299.webp
    CYBERFICTION-IMAGES/male0300.webp`

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
