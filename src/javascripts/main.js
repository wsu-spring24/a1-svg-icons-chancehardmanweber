// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)



// First: Set up your name
let std_name = "ChanceHardman"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else\
import * as d3 from "d3";
let iconWidth = 100;



// Icon 1
let svg1 = d3.select('main')
    .append('svg')
    .attr('width', iconWidth)
    .attr('height', iconWidth)
    .style('background', 'gray');

let svg1_obj_rect1 = svg1
    .append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 35)
    .attr('height', 35)
    .attr('stroke', 'blue')
    .attr('fill', 'blue');

let svg1_obj_rect2 = svg1
    .append('rect')
    .attr('x', 55)
    .attr('y', 10)
    .attr('width', 35)
    .attr('height', 35)
    .attr('stroke', 'blue')
    .attr('fill', 'blue');

let svg1_obj_rect3 = svg1
    .append('rect')
    .attr('x', 10)
    .attr('y', 55)
    .attr('width', 35)
    .attr('height', 35)
    .attr('stroke', 'blue')
    .attr('fill', 'blue');

let svg1_obj_rect4 = svg1
    .append('rect')
    .attr('x', 55)
    .attr('y', 55)
    .attr('width', 35)
    .attr('height', 35)
    .attr('stroke', 'blue')
    .attr('fill', 'blue');

function distortion()
{
    //rect1
    svg1_obj_rect1
        .transition()
        .attr('transform', 'skewX(45)')
        .duration(3000);

    svg1_obj_rect1
        .transition()
        .attr('transform', 'skewX(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect1
        .transition()
        .attr('transform', 'skewX(0)')
        .duration(3000)
        .delay(6000)

    svg1_obj_rect1
        .transition()
        .attr('transform', 'skewY(45)')
        .duration(3000);

    svg1_obj_rect1
        .transition()
        .attr('transform', 'skewY(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect1
        .transition()
        .attr('transform', 'skewY(0)')
        .duration(3000)
        .delay(6000);

    //rect2
    svg1_obj_rect2
        .transition()
        .attr('transform', 'skewX(45)')
        .duration(3000);

    svg1_obj_rect2
        .transition()
        .attr('transform', 'skewX(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect2
        .transition()
        .attr('transform', 'skewX(0)')
        .duration(3000)
        .delay(6000)

    svg1_obj_rect2
        .transition()
        .attr('transform', 'skewY(45)')
        .duration(3000);

    svg1_obj_rect2
        .transition()
        .attr('transform', 'skewY(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect2
        .transition()
        .attr('transform', 'skewY(0)')
        .duration(3000)
        .delay(6000);

    //rect3
    svg1_obj_rect3
        .transition()
        .attr('transform', 'skewX(45)')
        .duration(3000);

    svg1_obj_rect3
        .transition()
        .attr('transform', 'skewX(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect3
        .transition()
        .attr('transform', 'skewX(0)')
        .duration(3000)
        .delay(6000)

    svg1_obj_rect3
        .transition()
        .attr('transform', 'skewY(45)')
        .duration(3000);

    svg1_obj_rect3
        .transition()
        .attr('transform', 'skewY(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect3
        .transition()
        .attr('transform', 'skewY(0)')
        .duration(3000)
        .delay(6000);

    //rect4
    svg1_obj_rect4
        .transition()
        .attr('transform', 'skewX(45)')
        .duration(3000);

    svg1_obj_rect4
        .transition()
        .attr('transform', 'skewX(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect4
        .transition()
        .attr('transform', 'skewX(0)')
        .duration(3000)
        .delay(6000)

    svg1_obj_rect4
        .transition()
        .attr('transform', 'skewY(45)')
        .duration(3000);

    svg1_obj_rect4
        .transition()
        .attr('transform', 'skewY(-45)')
        .duration(3000)
        .delay(3000)

    svg1_obj_rect4
        .transition()
        .attr('transform', 'skewY(0)')
        .duration(3000)
        .delay(6000);

}

distortion();


// Icon 2
let svg2 = d3.select('main')
    .append('svg')
    .attr('width', iconWidth)
    .attr('height', iconWidth)
    .style('background', 'brown');

let svg2_obj_rect1 = svg2
    .append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 80)
    .attr('height', 20)
    .attr('stroke', 'black')
    .attr('fill', 'black');

let svg2_obj_rect2 = svg2
    .append('rect')
    .attr('x', 25)
    .attr('y', 10)
    .attr('width', 50)
    .attr('height', 20)
    .attr('stroke', 'black')
    .attr('fill', 'black');

let svg2_obj_rect3 = svg2
    .append('rect')
    .attr('x', 40)
    .attr('y', 10)
    .attr('width', 20)
    .attr('height', 20)
    .attr('stroke', 'black')
    .attr('fill', 'black');

function rectangles_fall() {
    svg2_obj_rect2
        .transition()
        .attr('transform', 'translate(0, 30)')
        .duration(3000);

    svg2_obj_rect3
        .transition()
        .attr('transform', 'translate(0, 60)')
        .duration(3000);
}
rectangles_fall();

//Icon 3
let svg3 = d3.select('main')
    .append('svg')
    .attr('width', iconWidth)
    .attr('height', iconWidth)
    .style('background', 'white');

let svg3_obj_circle1 = svg3
    .append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 45)
    .attr('stroke', 'gray')
    .attr('fill', 'gray');

let svg3_obj_circle2 = svg3
    .append('circle')
    .attr('cx', 61)
    .attr('cy', 61)
    .attr('r', 34)
    .attr('stroke', 'black')
    .attr('fill', 'black');

let svg3_obj_circle3 = svg3
    .append('circle')
    .attr('cx', 67)
    .attr('cy', 67)
    .attr('r', 23)
    .attr('stroke', 'purple')
    .attr('fill', 'purple');


function pendulum()
{
    svg3_obj_circle1
        .transition()
        .attr('transform', 'scale(-1.3, -1.3)')
        .duration(3000);

    svg3_obj_circle1
        .transition()
        .attr('transform', 'scale(1, 1)')
        .duration(3000)
        .delay(3000);

    svg3_obj_circle2
        .transition()
        .attr('transform', 'scale(-1.3, -1.3)')
        .duration(3000)
        .delay(1000);

    svg3_obj_circle2
        .transition()
        .attr('transform', 'scale(1, 1)')
        .duration(3000)
        .delay(4000);

    svg3_obj_circle3
        .transition()
        .attr('transform', 'scale(-1.3, -1.3)')
        .duration(3000)
        .delay(2000);

    svg3_obj_circle3
        .transition()
        .attr('transform', 'scale(1, 1)')
        .duration(3000)
        .delay(5000);
}

pendulum();

//Icon 4
let svg4 = d3.select('main')
    .append('svg')
    .attr('width', iconWidth)
    .attr('height', iconWidth)
    .style('background', 'cyan');

let svg4_obj_triangle1 = svg4
    .append('polygon')
    .attr('points', '30,30 50,50 10,50')
    .attr('stroke', 'brown')
    .attr('fill', 'brown');

let svg4_obj_triangle2 = svg4
    .append('polygon')
    .attr('points', '70,30 90,50 50,50')
    .attr('stroke', 'brown')
    .attr('fill', 'brown');

let svg4_obj_triangle3 = svg4
    .append('polygon')
    .attr('points', '30,50 50,70 10,70')
    .attr('stroke', 'brown')
    .attr('fill', 'brown');

let svg4_obj_triangle4 = svg4
    .append('polygon')
    .attr('points', '70,50 90,70 50,70')
    .attr('stroke', 'brown')
    .attr('fill', 'brown');

function spin_triangles()
{

    svg4_obj_triangle1
        .transition()
        .attr('transform', 'rotate(-180, 50, 50)')
        .duration(5000);

    svg4_obj_triangle2
        .transition()
        .attr('transform', 'rotate(180, 50, 50)')
        .duration(5000);

    svg4_obj_triangle3
        .transition()
        .attr('transform', 'rotate(180, 50, 50)')
        .duration(5000);

    svg4_obj_triangle4
        .transition()
        .attr('transform', 'rotate(-180, 50, 50)')
        .duration(5000);
}

spin_triangles();

//Icon 5
let svg5 = d3.select('main')
    .append('svg')
    .attr('width', iconWidth)
    .attr('height', iconWidth)
    .style('background', 'brown');

let svg5_obj_rect1 = svg5
    .append('rect')
    .attr('x', 25)
    .attr('y', 25)
    .attr('width', 50)
    .attr('height', 50)
    .attr('stroke', 'green')
    .attr('fill', 'green');

function scale_rect()
{
    svg5_obj_rect1
        .transition()
        .attr('transform', 'scale(2)')
        .duration(3000);

    svg5_obj_rect1
        .transition()
        .attr('transform', 'scale(1)')
        .duration(3000)
        .delay(3000);
}

scale_rect();
