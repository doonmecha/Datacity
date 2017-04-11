/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  EXEMPLE DE CODE JAVASCRIPT CANVAS
//                          https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/l-element-canvas
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//              DEFINITION DES VARIABLES


//var g_tablePathBus = new Array();

var g_tablePathBus = [
'1979','2532','1832','2579','1827','2574','2131','2713','2196','2722','2332','2690','2544','2665','2748','2618','2937','2608','2968','2620',
'2980','2624','3001','2639','3072','2716','3268','2849','3264','2866','3239','2901','3226','2915','3184','2930','2915','2995','2865','2992',
'2785','2962','2759','2954','2738','2954','2529','3036','2478','3064','2371','3141','2307','3181','2220','3034','2135','2952','2053','2870',
'2020','2844','1914','2770','1864','2735','1832','2695','1818','2663','1828','2577','1979','2532'];

//var g_tableIconBus =new Array();
var g_tableIconBus = [2152, 3214, 4586, 2158, 2412, 1958, 2310, 2500];

//------ Canvas info
var g_canvas;
var g_context;
var g_W;
var g_H;
var g_scaleCanvas=1.0;//1.0

//------ Event
var g_keyUp=0;
var g_keyDown=0;
var g_keyLeft=0;
var g_keyRight=0;
var g_keySpace=0;
var cursorX=0;
var cursorY=0;


//------ Scroll / plan
var g_scroll=0;
var g_speedScroll=4;
var g_posxPlan=320;
var g_posyPlan=600;
var g_scalePlan = 3.2;

//------ Player
var g_posxPlayer;
var g_posyPlayer;

//------ Vehicule bus
var g_posxVehiBus=0;
var g_posyVehiBus=0;
var g_progBus=0;
var g_progBusKey=0;
var g_progStep=100;
var g_curAngleBus=0.0;


//------ Path
var g_idxBus=0;


//------ Ressources
var g_Plan = new Image();
var g_VehiculeBus = new Image();
var g_icon_Bus = new Image();




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//              DEFINITION DES FONCTIONS

//===================================================================================================================================================
window.requestAnimFrame = (function(){
      return window.requestAnimationFrame       || // La forme standardisée
             window.webkitRequestAnimationFrame || // Pour Chrome et Safari
             window.mozRequestAnimationFrame    || // Pour Firefox
             window.oRequestAnimationFrame      || // Pour Opera
             window.msRequestAnimationFrame     || // Pour Internet Explorer
             function(callback){                   // Pour les mauvais
                 window.setTimeout(callback, 1000 / 60);
             };
})(); 

//===================================================================================================================================================
//=====================================================================================================================
function InitCanvas()
{
    g_canvas = document.querySelector('#canvas');
    if (g_canvas != null)
    {
        g_context = g_canvas.getContext('2d');
       console.log ("largeur canvas="+window.innerWidth);
        g_W = g_context.canvas.width  = window.innerWidth;
        g_H = g_context.canvas.height  = window.innerHeight;

       // g_scale = g_context.canvas.width;
        g_context.scale(g_scaleCanvas,g_scaleCanvas);
    }

}

//===================================================================================================================================================
function LoadRessources()
{
var i;

    g_Plan.src = 'Images/planville.png';
    g_Plan.addEventListener('load', function() {});
    g_icon_Bus.src ='Images/Marker_bus.png';

}

//===================================================================================================================================================
//===================================================================================================================================================
//                                              PROCESS
//===================================================================================================================================================
//===================================================================================================================================================


//===================================================================================================================================================
function ProcessPlayer() {

}

//===================================================================================================================================================
function ProcessBus() {

    for (var i=0;i<4;i++)
    {
        console.log('bb = '+g_tableIconBus[i*2]+','+g_tableIconBus[i*2+1]);
    }
}


//===================================================================================================================================================
//===================================================================================================================================================
//                                              DISPLAY
//===================================================================================================================================================
//===================================================================================================================================================

//===================================================================================================================================================
function DrawVehiculeBus() {
var x1,y2,x2,y2;
var d,key2;

    x1 = g_tablePathBus[g_progBusKey]-g_posxPlan*g_scalePlan;
    y1 = g_tablePathBus[g_progBusKey+1]-g_posyPlan*g_scalePlan;

    x2 = g_tablePathBus[g_progBusKey+2]-g_posxPlan*g_scalePlan;
    y2 = g_tablePathBus[g_progBusKey+3]-g_posyPlan*g_scalePlan;

    g_posxVehiBus = ((x2*g_progBus)+((g_progStep-g_progBus)*x1))/g_progStep;
    g_posyVehiBus = ((y2*g_progBus)+((g_progStep-g_progBus)*y1))/g_progStep;;



    g_progBus++;
    if(g_progBus>=g_progStep)
    {
     //   g_progStep = 100;
        g_progBus = 0;
        g_progBusKey+=2;
        if (g_progBusKey>=g_tablePathBus.length-2)
            g_progBusKey = 2;

        x1 = g_tablePathBus[g_progBusKey];
        y1 = g_tablePathBus[g_progBusKey+1];

        key2=g_progBusKey+2;
        if (key2>=g_tablePathBus.length-2)
            key2 = 2;

        x2 = g_tablePathBus[key2];
        y2 = g_tablePathBus[key2+1];


        d = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
        console.log('dist = '+d);
        g_progStep = d/8;   //speed

       // var w= ( Math.atan2(((y1-y2)-(y1-y2)),((x1-x2)-(x1-x2)))+Math.PI ) * 180 / Math.PI

        g_curAngleBus= ( Math.atan2((y2-y1),(x2-x1))+Math.PI ) * 180 / Math.PI
    //    console.log('w='+g_curAngleBus);
    }

    g_context.translate(g_posxVehiBus, g_posyVehiBus);

    var aa = g_curAngleBus-90;
    if (aa<0.0)
        aa += 360.0;

    g_context.rotate(aa*(Math.PI/180));
    g_context.drawImage(g_VehiculeBus, 0, 0, 64, 100,
        -32, -50,
        64, 100);
}



//===================================================================================================================================================
function DrawPathBus() {

    g_context.strokeStyle = "rgb(23, 145, 167)";
    g_context.moveTo(g_tablePathBus[0]-g_posxPlan, g_tablePathBus[1]+g_posyPlan);  // 1er point
    g_context.beginPath();
    g_context.lineWidth = "5";
    for (var i=2;i<g_idxBus;i+=2)
    {
     //   console.log('bus='+i+','+cursorX+','+cursorY);
        g_context.lineTo(g_tablePathBus[i]-g_posxPlan*g_scalePlan,
            g_tablePathBus[i+1]-g_posyPlan*g_scalePlan); // 2e point
    }
    g_context.lineTo(parseInt(cursorX),parseInt(cursorY)); // 2e point
    g_context.stroke();
}

//===================================================================================================================================================
function DrawPlan() {
    g_context.drawImage(g_Plan, g_posxPlan, g_posyPlan, g_W/g_scalePlan, g_H/g_scalePlan,
        0, 0,
        g_W, g_H);
}

//===================================================================================================================================================
function DrawPlayer() {
    g_context.drawImage(g_Player, 0, 0, 64, 100, g_posxPlayer-32, g_posyPlayer-g_scroll-50, 64, 100);
}

//===================================================================================================================================================
function DrawBus() {

g_posxBus = 300;
g_posyBus = 100;
   for (var i=0;i<3;i++)
    {
       // console.log('bb = '+g_tableIconBus[i*2]+','+g_tableIconBus[i*2+1]);
     g_context.drawImage(g_icon_Bus, 0, 0, 307, 372, 
        g_tableIconBus[i*2]-g_posxPlan*g_scalePlan,g_tableIconBus[i*2+1]-g_posyPlan*g_scalePlan,
         307/4, 372/4);
  }

 //   g_context.drawImage(g_icon_Bus, 0, 0, 307, 372, g_posxBus-g_scalePlan, g_posyBus-g_scalePlan, 307/4, 372/4);
}

//===================================================================================================================================================
function Process() {

    g_context.save();

    //------ Vitesse du scroll
    if (g_keyUp==1)
        g_posyPlan -= g_speedScroll;

    if (g_keyDown==1)
        g_posyPlan += g_speedScroll;

    if (g_keyLeft==1)
        g_posxPlan -= g_speedScroll;

    if (g_keyRight==1)
        g_posxPlan += g_speedScroll;

    g_context.translate(0, g_scroll);
    ProcessPlayer();
    ProcessBus();
}

//===================================================================================================================================================
function Display() {

    DrawPlan();
    DrawPathBus();
    //DrawVehiculeBus();
    DrawBus();
}

//===================================================================================================================================================
function MainLoop() {
    
    Process();
    Display();
    g_context.restore();

    g_keySpace = 0;
    window.requestAnimFrame( function() { MainLoop() });
};

//===================================================================================================================================================
//      Point d'entres du programme
//===================================================================================================================================================
window.onload = function() {
 
    InitCanvas();

    //--- Event click (saisie path)
    var el = document.getElementById('canvas');
    el.onclick = function() {
       console.log(g_idxBus+' : mouse pos'+cursorX+','+cursorY);
        g_tablePathBus[g_idxBus] = parseInt(cursorX)+(g_posxPlan*g_scalePlan);
        g_tablePathBus[g_idxBus+1] = parseInt(cursorY)+(g_posyPlan*g_scalePlan);
        g_idxBus += 2;
    };

    //--- Load image
    LoadRessources();
    MainLoop();
};



//===================================================================================================================================================
//      Gestion des Events
//===================================================================================================================================================
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}

window.onkeypress = function(event)
{
    var e = event || window.event;
    var key = e.which || e.keyCode;

    switch (key) 
    {
        case 32:
            //g_keySpace = 1;
            for (var i=0;i<g_idxBus;i+=2)
            {
                console.log(g_tablePathBus[i]+','+g_tablePathBus[i+1]+',');
              }
            break;
    }

}

window.onkeydown = function (event) {

    var e = event || window.event;
    var key = e.which || e.keyCode;

    switch (key) {

        case 38:
        case 122:
        case 119:
        case 90:
        case 87: // Flèche haut, z, w, Z, W
            g_keyUp = 1;
            break;

        case 40:
        case 115:
        case 83: // Flèche bas, s, S
            g_keyDown = 1;
            break;

        case 37:
        case 113:
        case 97:
        case 81:
        case 65: // Flèche gauche, q, a, Q, A
            g_keyLeft=1;
            break;

        case 39:
        case 100:
        case 68: // Flèche droite, d, D
            g_keyRight=1;
            break;



        default:

            //alert(key);
            // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
            return true;

    }

}


window.onkeyup = function (event) {

    var e = event || window.event;
    var key = e.which || e.keyCode;
    
  //  g_keyUp = 0;
    switch (key) {

        case 38:
        case 122:
        case 119:
        case 90:
        case 87: // Flèche haut, z, w, Z, W
            g_keyUp = 0;
            break;

        case 40:
        case 115:
        case 83: // Flèche bas, s, S
            g_keyDown = 0;
            break;

        case 37:
        case 113:
        case 97:
        case 81:
        case 65: // Flèche gauche, q, a, Q, A
            g_keyLeft=0;
            break;

        case 39:
        case 100:
        case 68: // Flèche droite, d, D
            g_keyRight=0;
            break;

        default:

            //alert(key);

            // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.

            return true;

    }

}