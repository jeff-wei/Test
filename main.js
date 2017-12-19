var x_arr =  [ 59, 87, 193, 205, 387, 324, 466, 487, 774 ] ;
var y_arr =  [ 9, 442, 448, 159, 90, 414, 399, 201, 387 ]  ;

function setup(){
    createCanvas(800,500) ;
}
function draw(){
    background(0,25,0);
    draw_path();
    
    push() ;
    
    rectMode(CENTER);
    translate(width/2 , height/2) ;
    
    angleMode(DEGREES); 
    rotate(45) ;
    
    noStroke() ;
    fill(255,255,0) ;    
    rect(0,0,50,50) ;
    
    rotate(45) ;
    rect(0,0,50,50) ; 
    
    
    pop();
}

function mouseClicked() {
    console.log( mouseX +" , "+mouseY);
    x_arr.push(mouseX) ;
    y_arr.push(mouseY) ;
}

function draw_path(){
    stroke(100);
    strokeWeight(20);
    for( var i=0 ; i<x_arr.length-1 ; i++){
        line( x_arr[i] , y_arr[i], x_arr[i+1] , y_arr[i+1] );
    }
}