console.log('loaded');
//setting our controller and timeline//
var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

//element being reference/duration of the scroll/axis/opacity were element is coming from//
tl.from('#card_div', 5, { x: 500, opacity: 0 });


//moment were our element will begin animation//
const scene = new ScrollMagic.Scene({
    triggerElement: "#spot_div",
    triggerHook: "onEnter",
    duration: "95%"
});

scene.setPin("card")
scene.setTween(tl)
scene.addTo(controller);

function updatePercentage() {
    tl.progress();
    console.log(tl.progress());

}








