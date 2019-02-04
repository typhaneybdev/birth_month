window.onload = function() {
  //using timeline max from greesock library for animations; allowing animation stacking to be played sequentially
  let tl = new TimelineMax({ repeat: 6, repeatDelay: 1 });

  //timeline var(html element, duration, {object type of transition, property : new value} delay of animation)
  //tl.to("#title-container", 0.2, {
  //  ease: Power1.easerIn,
  //  opacity: 1,
  //scale: 1,
  // top: 166
  // });

  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#f1c40f" }, ease: Linear.easeOut },
    0.25
  );
  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#2ecc71" }, ease: Linear.easeOut },
    0.75
  );
  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#3498db" }, ease: Linear.easeOut },
    1.25
  );
};
