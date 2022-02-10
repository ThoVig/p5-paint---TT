var canvasX = 600; 
var canvasY = 600;
var canvasCol = 255; //farve af "papiret" brugeren tegner på
var borderStroke = 5; //outline af paint window

var mouse_Press = false; //boolean for at kunne se hvis brugeren vil tegne

let gif_createImg1; //AMOGUS
let gif_createImg2; //ROCK
let song; //boom effect

let flag = false;

function setup() 
{
  createCanvas(canvasX, canvasY);
  background(canvasCol);
  rectMode(CENTER);

  //border
  noFill();
  strokeWeight(borderStroke);
  rect(canvasX/2, canvasY/2, canvasX-1, canvasY-1); //vi laver en outline med rect, for at programmet er seperat fra resten af vinduet
  
  //paint
  paint = new Button();
  //colour
  colourBox = new Colour(400,20);


  //circle buttons
  circleButton1 = new Button();
  circleButton2 = new Button();
  circleButton3 = new Button();

  //slider størrele
  sizeSlider = createSlider(1, 60, 25, 1);
  sizeSlider.position(225, 5);

  //AMOGUS
  gif_createImg1 = createImg("fetchimage.gif");
  gif_createImg2 = createImg("rock.gif");

  gif_createImg1.position(0, 2500);
  gif_createImg2.position(0, 2500);

  song = loadSound('boom.mp3');

}

function draw() 
{
  var menuCol = 220;
  var previewSizeX = 292.5;
  var previewSizeY = 60;

  //menu
  strokeWeight(2);
  fill(menuCol);
  rect(canvasX/2, canvasY/12, canvasX, canvasY/6); //300, 50, 600, 100

  //circle buttons
  circleInfo1 = circleButton1.Create_Circle_Button(25, 50, 50, 255, 255, 255);
  circleInfo2 = circleButton2.Create_Circle_Button(90, 50, 50, 255, 255, 255);
  circleInfo3 = circleButton3.Create_Circle_Button(155, 50, 50, 255, 255);

  //fill col box x og y koord
  colourBox.FillCol(circleInfo1[0], circleInfo1[1], circleInfo1[2], mouse_Press);

  //Erase 
  colourBox.Erase(circleInfo3[0], circleInfo3[1], circleInfo3[2], mouse_Press, circleInfo3[3]);

  //amogus 
  colourBox.AmogusKnap(gif_createImg1, gif_createImg2, circleInfo2[0], circleInfo2[1], circleInfo2[2], mouse_Press, song);

  //colors
  paint_RGB = colourBox.Box_Button(mouse_Press); 
  
  //size preview
  circle(previewSizeX, previewSizeY, sizeSlider.value());

  if(mouseIsPressed)
  { 
    mouse_Press = true;
    
    //paint under menu
    if(mouseY > 100)
    {
      paint.Paint(sizeSlider.value(), paint_RGB[0], paint_RGB[1], paint_RGB[2]); //funktion til at tegne (størrelse, r-værdi, g-værdi, b-værdi)
    }
  }
  else
  {
    mouse_Press = false;
  }

  Mouse_Pos();  //console log mouse pos
  
  fill(255,255,255,0);
  rect(canvasX/2, canvasY/2, canvasX-1, canvasY-1); //vi laver en outline med rect, for at programmet er seperat fra resten af vinduet igen
}





function Mouse_Pos()  //funktion til at vise mus x, y
{
  console.log("mouse position: " + mouseX + " " + mouseY)
}