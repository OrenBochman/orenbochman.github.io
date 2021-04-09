---

---
<script src></script>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script>
// for images
COMIC.magic([ document.getElementById('img1'),
              document.getElementById('img2') ]);
// for drawings
shapes.magic(); // where "shapes" is a drawing group created on "paper"
                // via the lib of your choice (see examples below)
<script>

Drawing depending on the lib you use:

// Raphael.js
paper = Raphael("paper", width, height);
stuff = paper.set();
or

// D3.js
paper = d3.select("#paper").append('svg');
stuff = paper.append("g");
or

// SVG.js
paper = SVG('paper').size(width, height);
stuff = paper.group();
or

// canvas
paper = document.getElementById("paper");
ctx = paper.getContext("2d");
// IMPORTANT: here we bind comic.js to the canvas context
COMIC.ctx(ctx);
and then for the SVG libs (SVG.js, D3.js, Raphael.js):

// these are the default values if you do not call "init"
// NOTE: values have changed with beta5
COMIC.init({
    ff: 8,      // fuzz factor for line drawing: bigger -> fuzzier
    ffc: 5,     // fuzz factor for curve drawing: bigger -> fuzzier
    fsteps: 5,  // number of pixels per step: smaller -> fuzzier
    msteps: 3,  // min number of steps: bigger -> fuzzier
});
// lets draw!
stuff.cLine(x1, y1, x2, y2);         // LINE from starting point to end point
stuff.cTrian(x1, y1, x2, y2, x3, y3); // TRIANGLE over three corner points
stuff.cRect(x1, y1, width, height, rh, rv); // RECTANGLE at upper left point (x1, y1) with
                                            // width & height and with rounded (elliptic) corners
                                            // with horizontal radius rh & vertical radius rv
stuff.cBezier2(x1, y1, cx, cy, x2, y2); // BEZIER (quadratic) curve with start point (x1, y1),
                                        // control point (cx, cy) and end point (x2, y2)
stuff.cBezier3(x1, y1, cx1, cy1, cx2, cy2, x2, y2); // BEZIER (cubic) curve with start point
                                                    // (x1, y1), control points (cx1, cy1) & (cx2, cy2)
                                                    // and end point (x2, y2)
stuff.cCircle(x1, y1, r, start, end); // CIRCLE at center point (x1, y1) with radius r and drawn
                                      // starting from 0 < start < 2*PI to 0 < end < 2*PI
stuff.cEllipse(x1, y1, rh, rv, rot, start, end); // ELLIPSE at center point with horizontal radius
                                                 // rh & vertical radius rv, rotation 0 < rot < 2*PI
                                                 // and drawn from 0 < start < 2*PI to 0 < end < 2*PI
// changing the look
stuff.attr({
    "stroke":"#E0AE9F",
    "stroke-width": 2,
    "fill": "none"
});
Beyond this all depends on your choice of library - e.g. translation:

// Raphael.js
stuff.transform("t100,100r45");
// D3.js
stuff.attr({ "transform":"translate(30) rotate(45)" });
// SVG.js
stuff.transform({ x:100, y:100, rotation:45 });
For the HTML5 Canvas almost everything works identically. However to change the looks:

// changing the look
ctx.strokeStyle = "#FDD1BD";
ctx.lineWidth = 3;
ctx.globalCompositeOperation = 'destination-over';
While the drawing works exactly as above:

// lets draw!
stuff.cLine(x1, y1, x2, y2)
     .cTrian(x1, y1, x2, y2, x3, y3)
     .cRect(x1, y1, width, height);