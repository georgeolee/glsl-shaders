precision mediump float;

uniform float u_time;

void main(){

    float b = (sin(u_time) + 1) * 0.5;

    // magenta
    gl_FragColor = vec4(1.0,0.0,b,1.0);
}