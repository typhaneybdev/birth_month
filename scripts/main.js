window.onload = function() {
  //using timeline max from greesock library for animations; allowing animation stacking to be played sequentially
  let tl = new TimelineMax({ repeat: 20, repeatDelay: 1 });

  tl.from("#crystal_2", 1, { y: -100, opacity: 0, ease: Elastic.easeOut }).to(
    "#crystal_2",
    1,
    { y: 200, opacity: 0, ease: Elastic.easeIn },
    "+=1"
  );

  tl.to(
    ".cls-2",
    0.5,
    { css: { stroke: "#f1c40f" }, ease: Linear.easeOut },
    0.25
  );
  tl.to(
    ".cls-2",
    0.5,
    { css: { stroke: "#2ecc71" }, ease: Linear.easeOut },
    0.75
  );
  tl.to(
    ".cls-2",
    0.5,
    { css: { stroke: "#3498db" }, ease: Linear.easeOut },
    1.25
  );

  tl.to("#middle-section", 1, {
    x: 100,
    y: 100,
    scale: 1.2,
    rotation: 180
  });

  //animate crystal stroke color
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
  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#1fcc65" }, ease: Linear.easeOut },
    1.5
  );

  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#f9b132" }, ease: Linear.easeOut },
    1.75
  );

  tl.to(".cls-1", 0.5, { css: { stroke: "#f4530c" }, ease: Linear.easeOut }, 2);

  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#f4530c" }, ease: Linear.easeOut },
    2.25
  );

  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#f4220c" }, ease: Linear.easeOut },
    2.5
  );

  tl.to(
    ".cls-1",
    0.5,
    { css: { stroke: "#7b1fcc" }, ease: Linear.easeOut },
    2.75
  );
};
