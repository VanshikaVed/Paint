var m_event = "";
var x_p = "";
var y_p = "";

var canvas = document.getElementById("myCanvas");
var c_1 = canvas.getContext("2d");

var colour = "black";
var line_width = 2;

canvas.addEventListener("mousedown",function_1);

function function_1(x){


    colour = document.getElementById("colour_i").value;
    line_width = document.getElementById("l_width_i").value;
m_event = "m_down";

}

canvas.addEventListener("mouseup",function_2);

function function_2(){
    m_event="m_up";
}

canvas.addEventListener("mouseleave",function_3);

function function_3(){
    m_event="m_leave";
}

canvas.addEventListener("mousemove",function_4);

function function_4(x){

    var current_x = x.clientX - canvas.offsetLeft;
    var current_y = x.clientY - canvas.offsetTop;

    if(m_event=="m_down"){
        c_1.beginPath();
        c_1.strokeStyle = colour;
        c_1.lineWidth = line_width;
        c_1.moveTo(x_p,y_p);
        c_1.lineTo(current_x,current_y);
        c_1.stroke();
    }
    x_p = current_x;
y_p = current_y;
}

function Clear(){
    c_1.clearRect(0,0,canvas.width,canvas.height);
}


