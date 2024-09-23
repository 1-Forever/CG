// 控件元素获取
var color = document.getElementById("color");
var color_canvas = color.getContext("2d");
var R = document.getElementById("R");
var R_range = document.getElementById("R_range");
var G = document.getElementById("G");
var G_range = document.getElementById("G_range");
var B = document.getElementById("B");
var B_range = document.getElementById("B_range");
var H = document.getElementById("H");
var H_range = document.getElementById("H_range");
var S = document.getElementById("S");
var S_range = document.getElementById("S_range");
var V = document.getElementById("V");
var V_range = document.getElementById("V_range");
window.onload=color_display(0,0,0);

//更新所有元素
function get_data() {
    R_range.value=Math.round(R.value);
    G_range.value=Math.round(G.value);
    B_range.value=Math.round(B.value);
    color_dispaly(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
//获取RGB变动后的值
function get_R() {
    R_range.value=Math.round(R.value);
    color_dispaly(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
function get_G() {
    G_range.value=Math.round(G.value);
    color_dispaly(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
function get_B() {
    B_range.value=Math.round(B.value);
    color_dispaly(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
//获取HSV变动后的值
function get_H() {
    input_H_range.value = input_H.value;
    HSV_to_RGB(input_H_range.value,input_S_range.value,input_V_range.value);
}
function get_S() {
    S_range.value = S.value;
    HSV_to_RGB(H_range.value,S_range.value,V_range.value);
}
function get_V() {
    V_range.value = V.value;
    HSV_to_RGB(H_range.value,S_range.value,V_range.value);
}

//更新当前颜色显示
function color_display(r,g,b) {
    color_canvas.fillStyle = 'rgb('+r+','+g+','+b+')';
    color_canvas.fillRect(0,0,500,150);
}

//套公式,RGB转换为HSV
function RGB_to_HSV(r,g,b) {
    r=r/255;
    g=g/255;
    b=b/255;
    var h,s,v;
    var min=Math.min(r,g,b);
    var max=v=Math.max(r,g,b);
    var l=(min+max)/2;
       var difference = max-min;
    if(max==min){
        h=0;
    }else{
        switch(max){
            case r: h=(g-b)/difference+(g < b ? 6 : 0);break;
            case g: h=2.0+(b-r)/difference;break;
            case b: h=4.0+(r-g)/difference;break;
        }
        h=Math.round(h*60);
    }
    if(max==0){
        s=0;
    }else{
        s=1-min/max;
    }
    s=Math.round(s*100);
    v=Math.round(v*100);
    H_range.value = H.value = h;
    S_range.value = S.value = s;
    V_range.value = V.value = v;
}

//套公式,HSV转换为RGB
function HSV_to_RGB(h,s,v) {
    var s=s/100;
    var v=v/100;
    var h1=Math.floor(h/60) % 6;
    var f=h/60-h1;
    var p=v*(1-s);
    var q=v*(1-f*s);
    var t=v*(1-(1-f)*s);
    var r,g,b;
    switch(h1){
        case 0:
            r=v;
            g=t;
            b=p;
            break;
        case 1:
            r=q;
            g=v;
            b=p;
            break;
        case 2:
            r=p;
            g=v;
            b=t;
            break;
        case 3:
            r=p;
            g=q;
            b=v;
            break;
        case 4:
            r=t;
            g=p;
            b=v;
            break;
        case 5:
            r=v;
            g=p;
            b=q;
            break;
    }
    r = Math.round(r*255);
    g = Math.round(g*255);
    b = Math.round(b*255);
    R_range.value = R.value = r;
    G_range.value = G.value = g;
    B_range.value = B.value = b;
    color_display(R_range.value,G_range.value,B_range.value);

}

//鼠标拖动显示条响应实践,更新各元素的值
R_range.onmousemove = function () {
    R.value = R_range.value;
    color_display(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
G_range.onmousemove = function () {
    G.value = G_range.value;
    color_display(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
B_range.onmousemove = function () {
    B.value = B_range.value;
    color_display(R_range.value,G_range.value,B_range.value);
    RGB_to_HSV(R_range.value,G_range.value,B_range.value);
}
H_range.onmousemove = function () {
    H.value = H_range.value;
    HSV_to_RGB(H_range.value,S_range.value,V_range.value);
}
S_range.onmousemove = function () {
    S.value = S_range.value;
    HSV_to_RGB(H_range.value,S_range.value,V_range.value);
}
V_range.onmousemove = function () {
    V.value = V_range.value;
    HSV_to_RGB(H_range.value,S_range.value,V_range.value);
}
