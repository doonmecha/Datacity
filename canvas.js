/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  EXEMPLE DE CODE JAVASCRIPT CANVAS
//                          https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/l-element-canvas
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//              DEFINITION DES VARIABLES

var g_tablePathBus1 = new Array();

var g_tablePathBus2 = [8042,6432,8040,6430,8446,6537,8475,6548,8502,6546,8526,6525,8562,6523,8638,6514,8717,6478,8781,6439,8829,6399,8925,6241,8948,6226,8976,6197,9048,6078,9057,6052,9057,6005,9066,5992,9068,5972,9058,5963,9045,5954,9028,5966,9018,5973,8796,5867,8784,5864,8773,5855,8774,5844,8755,5838,8741,5845,8725,5855,8710,5873,8699,5899,8542,6339,8532,6342,8245,6043,8191,6032,8050,5995,7997,5985,7702,5950,7699,5931,7690,5909,7656,5897,7644,5894,7630,5902,7622,5907,7482,6063,7435,6101,7377,6142,7302,6183,7282,6206,7288,6226,7299,6231,7625,6318,7679,6319,7701,6323,7779,6340,7791,6348,7790,6368,7792,6383,7803,6392,7853,6408,8019,6453,8036,6444,8040,6434];

var g_tablePathBus3 = [
 7937,6325,8007,6348,8183,6420,8363,6460,
 8571,6509,8731,6448,8942,6207,9005,6117,9020,6075,9043,6014,
 9001,5984,8802,5886,8768,5866,8753,5808,8564,5799,8319,5752,
 7896,5599,7824,5580,7808,5663,7751,5765,7716,5850,7694,5934,7674,6089,7671,6266,
 7689,6297,7799,6322,7954,6349,8009,6347,7937,6325,8007,6348,8183,6420,
 8363,6460,8571,6509,8731,6448,8942,6207,9005,6117,
 9020,6075,9043,6014,9001,5984,8802,5886,8768,5866,8753,5808,8319,5752,7896,5599,
 7824,5580,7808,5663,7751,5765,7716,5850,7694,5934,7674,6089,
 7671,6266,7689,6297,7799,6322,7954,6349,8009,6347,7937,6325,8007,6348,
 8183,6420,8363,6460,8571,6509,8731,6448,8942,6207,9005,6117,
 9020,6075,9043,6014,9001,5984,8802,5886,8768,5866,8753,5808,8564,5799,
 8319,5752,7896,5599,7824,5580,7808,5663,7751,5765,7716,5850,
 7694,5934,7674,6089,7671,6266,8183,6420,7689,6297,7799,6322,7954,6349,
 8009,6347,7937,6325,8007,6348,8363,6460,8571,6509,8731,6448,
 9005,6117,9020,6075,9043,6014,9001,5984,8802,5886,8768,5866,8753,5808,
 8564,5799,8319,5752,7896,5599,7824,5580,7808,5663,7751,5765,7716,5850,
 7694,5934,7674,6089,7671,6266,7689,6297,7799,6322,7954,6349,8009,6347,
 7937,6325,8183,6420,8363,6460,8571,6509,8731,6448,8942,6207,9005,6117,9020,6075,
 9043,6014,9001,5984,8802,5886,8768,5866,8753,5808,8564,5799,8319,5752,
 7896,5599,7824,5580,7808,5663,7751,5765,7716,5850,7694,5934,7674,6089,7671,6266,7689,6297,
 7799,6322,7954,6349,8009,6347,7937,6325,8007,6348,8183,6420,8363,6460,8571,6509,
 8731,6448,8942,6207,9005,6117,9020,6075,9043,6014,9001,5984,8802,5886,
 8768,5866,8753,5808,8564,5799,8319,5752,7896,5599,7824,5580,7808,5663,7751,5765,
 7716,5850,7694,5934,7674,6089,7671,6266,7689,6297,7799,6322,7954,6349,8009,6347
 ];

var g_tablePathBus4 = [7872,6350,7510,6256,7139,6164,7043,6137,7019,6300,6968,6417,6999,6467,6953,6488,6908,6713,6966,6736,7516,6985,8028,7188,
    8212,7279,8269,7220,8287,7024,8443,6683,8507,6506,8038,6393,7875,6350,1760,2726,7872,6350];

var g_tablePathTrain = [3716,6212,3704,6143,3686,6067,4098,5906,4648,5793,4773,5788,4928,5783,5099,5791,5168,5796,5312,5813,5426,5834,5574,5864,5778,5919,6090,6002,6487,6119,6863,6219,7189,6302,7403,6348,7686,6427,8137,6548,8315,6605,8765,6729,9120,6831,9249,6879,9369,6939,9479,7005,9576,7077,9730,7216,10019,7490,10366,7822,10849,8291,11262,8684,11480,8893,11496,9948,9874,11205,7825,11173,3707,6158,3703,6146];

var g_tableIconBus = [2152, 3214, 4586, 2158, 2412, 1958, 2310, 2500];

var g_tableIconBus = ['7980', '6250', '7860', '6310', '7695', '6280', '8725', '5890',
'8590', '5780', '8530', '5670', '8650', '5860', '8595', '6230'];

var g_tableIconTrain = ['7950', '6364'];

var g_tableIconTaxi = ['7800', '6330','8905', '5850'];


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
var g_scroll = 0;
var g_speedScroll = 4;
var g_posxPlan = 1800;
var g_posyPlan = 1500;
var g_scalePlan = 4.0;

//------ Player
var g_posxPlayer;
var g_posyPlayer;

//------ Vehicule bus
var g_posxVehiBus=[0];
var g_posyVehiBus=[0];
var g_progBus=[0];
var g_progBusKey=[2];
var g_progStep=[100];
var g_curAngleBus=[0.0];
var g_TabBus=[0];


//------ Path
//var g_tablePathBus = new Array();
var g_idxBus=0;

//------ Ressources
var g_Plan = new Image();
var g_VehiculeBus = new Image();
var g_icon_Bus = new Image();
var g_icon_Train = new Image();
var g_icon_Taxi = new Image();

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
function InitBus(idx,prog,tb) {

    //------ Vehicule bus
    g_posxVehiBus[idx]=0;
    g_posyVehiBus[idx]=0;
    g_progBus[idx]=20;
    g_progBusKey[idx]=prog;
    g_progStep[idx]=100;
    g_curAngleBus[idx]=0.0;
    g_TabBus[idx]=tb;
}

//===================================================================================================================================================
function LoadRessources()
{
var i;

    g_Plan.src = 'Images/planville_RT2.png';
    g_Plan.addEventListener('load', function() {});

    g_VehiculeBus.src = 'Images/vehicules.png';
    g_icon_Bus.src ='Images/Marker_bus.png';
	g_icon_Train.src = 'Images/Marker_train.png';
    g_icon_Taxi.src = 'Images/Marker_taxi.png';

	LoadBus();
	LoadArretsBus();
	LoadTrains();

    //------ Display BUS & TRAIN
    for (i=0;i<4;i++)
        InitBus(i,i*15,1);

    for (i=4;i<8;i++)
        InitBus(i,(i-4)*15,2);

    for (i=8;i<12;i++)
        InitBus(i,(i-8)*15,3);

    for (i=12;i<16;i++)
        InitBus(i,(i-12)*5,4);
}

function LoadBus() {
	//Extraction, dans "data", des données par "jQuery.getJSON"
	$.getJSON( "BDD/bus.json", function( data ) {
		var items = [];
		console.log("\nDonnées Dat'Armor TUB");

		// Affichage ligne par ligne des infos nécessaires pour les TUB
		$.each( data, function( key, val ) {
			console.log("Nom court: " + val.libel + "\nNom complet: " + val.libel_complet);
		});

		//Sending data (tableau d'objets)
		return data;
	});
}

function LoadArretsBus() {
	//Extraction, dans "data", des données par "jQuery.getJSON"
	$.getJSON( "BDD/arrets_bus.json", function( data ) {
		var items = [];
		console.log("\nDonnées Dat'Armor arrêts TUB St-Brieuc");

		// Affichage ligne par ligne des infos nécessaires pour les arrêts TUB
		$.each( data, function( key, val ) {
			console.log("Arrêt " + val.ARRETS + "\nLongitude: " + val.Longitude + "\nLatitude: " + val.Latitude);
		});

		//Renvoie data (tableau d'objets)
		return data;
	});
}

function LoadTrains() {
	//Extraction, dans "data", des données par "jQuery.getJSON"
	$.getJSON( "BDD/trains.json", function( data ) {
		var items = [];
		console.log("\nÉchantillon de données API SNCF")

		// Affichage ligne par ligne des infos nécessaires pour les trains SNCF
		$.each( data, function( key, val ) {
			console.log("Provenance: " + val.from + "\nHeure d'arrivée: " + val.arrival_time + "\nEscale: " + val.leave_in + "min")
		});

		//Renvoie data (tableau d'objets)
		return data;
	});
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

 /*   for (var i=0;i<4;i++)
    {
        console.log('bb = '+g_tableIconBus[i*2]+','+g_tableIconBus[i*2+1]);
    }*/
}

//===================================================================================================================================================
function DrawVehiculeBus(idx,tb) {
var x1,y1,x2,y2;
var d=0,key2=0;
var ll=0;

    //------ Get coord table
    x1 = tb[g_progBusKey[idx]]-g_posxPlan*g_scalePlan;
    y1 = tb[g_progBusKey[idx]+1]-g_posyPlan*g_scalePlan;
    x2 = tb[g_progBusKey[idx]+2]-g_posxPlan*g_scalePlan;
    y2 = tb[g_progBusKey[idx]+3]-g_posyPlan*g_scalePlan;

    g_posxVehiBus[idx] = ((x2*g_progBus[idx])+((g_progStep[idx]-g_progBus[idx])*x1))/g_progStep[idx];
    g_posyVehiBus[idx] = ((y2*g_progBus[idx])+((g_progStep[idx]-g_progBus[idx])*y1))/g_progStep[idx];

    g_progBus[idx]++;
    //------ Test next key
    if(g_progBus[idx]>=g_progStep[idx])
    {
        g_progBus[idx] = 0;
        g_progBusKey[idx]+=2;
        ll = (parseInt(tb.length)-4);
     //   console.log('bus L='+ll+'/'+g_progBusKey[idx]);
        //------ Test bouclage du circuit
        if (g_progBusKey[idx] >= ll)
        {
      //      console.log('draw bus');
            g_progBusKey[idx] = 0;/////////
        }
        x1 = tb[g_progBusKey[idx]];
        y1 = tb[g_progBusKey[idx]+1];
        key2=g_progBusKey[idx]+2;
        if (key2 >= (ll) )
        {
          //  console.log('draw busb = '+key2);
            key2 = 0;////////
        }
        x2 = tb[key2];
        y2 = tb[key2+1];

        //------ Calcul nouvelle distance entre 2 point key
        d = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
     //   console.log('dist = '+d);
        if (g_TabBus[idx]!=4)
            g_progStep[idx] = d/2;   //speed
        else
            g_progStep[idx] = d/10;   //speed

        //------ Oriente le vehicule
        g_curAngleBus[idx]= ( Math.atan2((y2-y1),(x2-x1))+Math.PI ) * 180 / Math.PI
    //    console.log('w='+g_curAngleBus);
    }

    g_context.translate(g_posxVehiBus[idx], g_posyVehiBus[idx]);

  //  var aa = g_curAngleBus[idx]-90;
    var aa = g_curAngleBus[idx];
    if (aa<0.0)
        aa += 360.0;

    g_context.rotate(aa*(Math.PI/180));


    if (g_TabBus[idx]!=4)
    {
        g_context.drawImage(g_VehiculeBus, 65, 129, 126, 62,
            -32, -16,
            64, 32);
    }
    else
    {
        g_context.drawImage(g_VehiculeBus, 0, 192, 256, 64,
            -96, -24,
            192, 48);
    }
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

    if (g_scaleCanvas < 1.0)
    {
        g_context.scale(g_scaleCanvas,g_scaleCanvas);
        g_W = g_context.canvas.width  = window.innerWidth*2;
        g_H = g_context.canvas.height  = window.innerHeight*2;
    }
    else
    {
        g_W = g_context.canvas.width  = window.innerWidth;
        g_H = g_context.canvas.height  = window.innerHeight;
        g_context.scale(g_scaleCanvas,g_scaleCanvas);
    }

    g_context.translate(0, g_scroll);
    ProcessPlayer();
}

//===================================================================================================================================================
//===================================================================================================================================================
//                                              DISPLAY
//===================================================================================================================================================
//===================================================================================================================================================

//===================================================================================================================================================
function DrawPathBus() {

    g_context.strokeStyle = "rgb(23, 145, 167)";
    g_context.moveTo(g_tablePathBus1[0]-g_posxPlan, g_tablePathBus1[1]+g_posyPlan);  // 1er point
    g_context.beginPath();
    g_context.lineWidth = "5";

    for (var i=2;i<g_tablePathBus1.length;i+=2)
    {
  //         console.log(g_tablePathBus[i]+','+g_tablePathBus[i+1]);
        //   console.log('bus='+i+','+cursorX+','+cursorY);
        g_context.lineTo(g_tablePathBus1[i]-g_posxPlan*g_scalePlan, g_tablePathBus1[i+1]-g_posyPlan*g_scalePlan); // 2e point
    }
    g_context.lineTo(parseInt(cursorX),parseInt(cursorY)); // 2e point
    g_context.stroke();
}

//===================================================================================================================================================
function DrawPlan() {
    g_context.drawImage(g_Plan, g_posxPlan*2, g_posyPlan*2, (g_W*2)/(g_scalePlan), (g_H*2)/(g_scalePlan),
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
    for (var i=0;i<10;i++)
    {
        // console.log('bb = '+g_tableIconBus[i*2]+','+g_tableIconBus[i*2+1]);
        g_context.drawImage(g_icon_Bus, 0, 0, 307, 372,
            g_tableIconBus[i*2]-g_posxPlan*g_scalePlan,g_tableIconBus[i*2+1]-g_posyPlan*g_scalePlan,
            307/6, 372/6);
    }

    //   g_context.drawImage(g_icon_Bus, 0, 0, 307, 372, g_posxBus-g_scalePlan, g_posyBus-g_scalePlan, 307/4, 372/4);
}

//===================================================================================================================================================
function DrawiconTrain() {

    g_posxiconTrain = 300;
    g_posyiconTrain = 100;
    for (var i=0;i<1;i++)
    {
        g_context.drawImage(g_icon_Train, 0, 0, 307, 372,
            g_tableIconTrain[i*2]-g_posxPlan*g_scalePlan,g_tableIconTrain[i*2+1]-g_posyPlan*g_scalePlan,
            307/4, 372/4);
    }
}

//===================================================================================================================================================
function DrawiconTaxi() {

    g_posxiconTrain = 300;
    g_posyiconTrain = 100;
    for (var i=0;i<2;i++)
    {
        g_context.drawImage(g_icon_Taxi, 0, 0, 307, 372,
            g_tableIconTaxi[i*2]-g_posxPlan*g_scalePlan,g_tableIconTaxi[i*2+1]-g_posyPlan*g_scalePlan,
            307/4, 372/4);
    }
}

//===================================================================================================================================================
function Display() {

    DrawPlan();
    DrawBus();
    //DrawPathBus();
	DrawiconTrain();
    DrawiconTaxi();

    var ii = 0;
    for (ii=0;ii<4;ii++) {
        g_context.save();
        DrawVehiculeBus(ii,g_tablePathBus2);
        g_context.restore();
    }
    for (ii=4;ii<8;ii++) {
        g_context.save();
        DrawVehiculeBus(ii,g_tablePathBus3);
        g_context.restore();
    }

    for (ii=8;ii<12;ii++) {
        g_context.save();
        DrawVehiculeBus(ii,g_tablePathBus4);
        g_context.restore();
    }

    for (ii=12;ii<16;ii++) {
        g_context.save();
        DrawVehiculeBus(ii,g_tablePathTrain);
        g_context.restore();
    }
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
  /*      //   console.log(g_idxBus+' : mouse pos'+cursorX+','+cursorY);
        g_tablePathBus1[g_idxBus] = parseInt(cursorX)+(g_posxPlan*g_scalePlan);
        g_tablePathBus1[g_idxBus+1] = parseInt(cursorY)+(g_posyPlan*g_scalePlan);
     //   console.log(g_tablePathBus1[g_idxBus]+','+g_tablePathBus1[g_idxBus+1]);
        g_idxBus += 2;*/
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
};

window.onkeypress = function(event)
{
    var e = event || window.event;
    var key = e.which || e.keyCode;

//    console.log('key ='+key);

    switch (key)
    {
        case 32:
         /*   for (var i=0;i<g_idxBus;i+=2)
            {
                console.log(g_tablePathBus1[i]+','+g_tablePathBus1[i+1]+',');
            }*/
            break;

        case 43:    // +
            g_scaleCanvas += 0.5;
            if (g_scaleCanvas>4)
                g_scaleCanvas=4;

            break;

        case 45:    // -
            g_scaleCanvas -= 0.5;
            if (g_scaleCanvas<0.5)
                g_scaleCanvas=0.5;

            break;
    }
};

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

};


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

};
