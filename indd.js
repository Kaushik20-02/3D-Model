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
   `https://raw.githubusercontent.com/Kaushik20-02/images/main/male0001.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0002.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0003.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0004.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0005.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0006.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0007.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0008.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0009.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0010.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0011.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0012.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0013.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0014.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0015.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0016.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0017.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0018.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0019.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0020.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0021.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0022.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0023.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0024.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0025.webp
   https://raw.githubusercontent.com/Kaushik20-02/images/main/male0026.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0027.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0028.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0029.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0030.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0031.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0032.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0033.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0034.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0035.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0036.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0037.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0038.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0039.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0040.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0041.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0042.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0043.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0044.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0045.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0046.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0047.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0048.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0049.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0050.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0051.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0052.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0053.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0054.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0055.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0056.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0057.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0058.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0059.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0060.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0061.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0062.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0063.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0064.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0065.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0066.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0067.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0068.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0069.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0070.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0071.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0072.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0073.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0074.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0075.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0076.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0077.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0078.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0079.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0080.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0081.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0082.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0083.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0084.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0085.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0086.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0087.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0088.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0089.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0090.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0091.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0092.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0093.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0094.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0095.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0096.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0097.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0098.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0099.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0100.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0101.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0102.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0103.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0104.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0105.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0106.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0107.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0108.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0109.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0110.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0111.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0112.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0113.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0114.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0115.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0116.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0117.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0118.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0119.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0120.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0121.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0122.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0123.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0124.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0125.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0126.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0127.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0128.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0129.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0130.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0131.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0132.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0133.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0134.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0135.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0136.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0137.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0138.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0139.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0140.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0141.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0142.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0143.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0144.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0145.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0146.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0147.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0148.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0149.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0150.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0151.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0152.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0153.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0154.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0155.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0156.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0157.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0158.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0159.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0160.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0161.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0162.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0163.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0164.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0165.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0166.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0167.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0168.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0169.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0170.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0171.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0172.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0173.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0174.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0175.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0176.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0177.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0178.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0179.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0180.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0181.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0182.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0183.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0184.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0185.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0186.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0187.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0188.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0189.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0190.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0191.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0192.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0193.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0194.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0195.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0196.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0197.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0198.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0199.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0200.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0201.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0202.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0203.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0204.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0205.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0206.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0207.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0208.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0209.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0210.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0211.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0212.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0213.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0214.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0215.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0216.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0217.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0218.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0219.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0220.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0221.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0222.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0223.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0224.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0225.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0226.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0227.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0228.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0229.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0230.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0231.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0232.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0233.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0234.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0235.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0236.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0237.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0238.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0239.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0240.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0241.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0242.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0243.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0244.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0245.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0246.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0247.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0248.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0249.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0250.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0251.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0252.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0253.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0254.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0255.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0256.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0257.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0258.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0259.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0260.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0261.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0262.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0263.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0264.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0265.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0266.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0267.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0268.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0269.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0270.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0271.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0272.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0273.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0274.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0275.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0276.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0277.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0278.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0279.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0280.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0281.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0282.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0283.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0284.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0285.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0286.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0287.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0288.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0289.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0290.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0291.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0292.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0293.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0294.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0295.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0296.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0297.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0298.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0299.webp
    https://raw.githubusercontent.com/Kaushik20-02/images/main/male0300.webp`

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

const hiddenElements= document.querySelectorAll('page4,.left')
hiddenElements.forEach((el)=>observer.observe(el))
