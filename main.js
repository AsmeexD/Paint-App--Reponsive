var mouseEvent = "empty";
var last_x_position, last_y_position, current_x_position, current_y_position;

var canvas = document.getElementById ('myCanvas');
ctx = canvas.getContext("2d");

var color = "black";
width_of_line = 4;

new_width = screen.width - 70;
new_height = screen.height - 300;

if(screen.width < 992){
    canvas.width= new_width;
    canvas.height= new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_x_position = e.touches[0].clientX - canvas.offsetLeft;
    last_y_position = e.touches[0].clientY - canvas.offsetTop;

    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e){
current_x_position = e.touches[0].clientX - canvas.offsetLeft
current_y_position = e.touches[0].clientY - canvas.offsetTop


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_x_position, last_y_position);
    ctx.lineTo(current_x_position, current_y_position);
    ctx.stroke();



last_x_position = current_x_position;
last_y_position = current_y_position;




    }
    canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent= "mousedown";

    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e){
current_x_position = e.clientX - canvas.offsetLeft
current_y_position = e.clientY - canvas.offsetTop

if(mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_x_position, last_y_position);
    ctx.lineTo(current_x_position, current_y_position);
    ctx.stroke();


}
last_x_position = current_x_position;
last_y_position = current_y_position;



    }
    canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup";

    }
    canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave";

    }




    