class Button
{
    constructor()
    {
        //så vi kan ændrer farverne i knappen, når brugeren tager musen over
        this.bright = 1;

    }

    Paint(paint_Radius, paint_R, paint_G, paint_B) 
    {
        this.radius = paint_Radius
        this.r = paint_R
        this.g = paint_G
        this.b = paint_B;

        strokeWeight(0)
        fill(this.r,this.g,this.b);
        circle(mouseX, mouseY, this.radius) 

    }

    Create_Circle_Button(xLocation, yLocation, diameter, r, g, b)
    {
        this.xCircleButton = this.xLocation;
        this.yCircleButton = this.yLocation;
        this.diameterCircleButton = this.diameter;

        this.xLocation = xLocation;
        this.yLocation = yLocation;
        this.diameter = diameter;

        this.r = r;
        this.g = g;
        this.b = b;

        
        fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
        circle(this.xLocation, this.yLocation, this.diameter);

        this.circleInfo = [this.xCircleButton, this.yCircleButton,this.diameterCircleButton, this.bright];
        return this.circleInfo;
    }


}

class Colour
{
    constructor(box_Start_X, box_Start_Y)
    {
        this.x = box_Start_X;
        this.y = box_Start_Y;

        this.r;
        this.g;
        this.b;

        //jeppe logik
        this.flag = false;
        this.flagFill = false;

        //button hover color 

        this.red_bright;
        this.ora_bright;
        this.yel_bright;
        this.gre_bright;
        this.blu_bright;
        this.black_bright
    }

    Box_Button(mouse_Press)
    {
        this.Press = mouse_Press;
        this.xSize = 50;
        this.ySize = 30

        //første række
        fill(255*this.red_bright, 0*this.red_bright, 0*this.red_bright);
        rect(this.x, this.y, this.xSize, this.ySize);               //rød
        
        fill(255*this.ora_bright, 153*this.ora_bright, 0);
        rect(this.x + 55, this.y, this.xSize, this.ySize);          //orange
        
        fill(255*this.yel_bright, 255*this.yel_bright, 0);
        rect(this.x + 110, this.y, this.xSize, this.ySize);         //gul
           

        //anden række
        fill(0, 255*this.gre_bright, 0);
        rect(this.x, this.y + 35, this.xSize, this.ySize);          //grøn
        
        fill(0, 0, 255*this.blu_bright);
        rect(this.x + 55, this.y + 35, this.xSize, this.ySize);     //blå
        
        fill(0 + this.black_bright, 0 + this.black_bright, 0 + this.black_bright);
        rect(this.x + 110, this.y + 35, this.xSize, this.ySize);    //sort
        

        //preview box
        fill(0); //fill with 0 for first time load, so the color doesnt change color when hover over black
        fill(this.r, this.g, this.b); //actual paint color
        rect(this.x + 165, this.y + 17, 50, 65);

        /////////////////////////////////////////////////////
        
        //press
        //rød
        if(mouseX > this.x - this.xSize/2 && mouseX < this.x + this.xSize/2)    //x
        {
            if(mouseY > this.y - this.ySize && mouseY < this.y + this.ySize/2)  //y
            {
                if(this.Press)
                {
                    this.r = 255;
                    this.g = 0;
                    this.b = 0
                }
                console.log("red");

                this.red_bright = 0.85;
            }
            else
            {
                this.red_bright = 1;
            }
        } 
        else
        {
            this.red_bright = 1;
        }
        ////

        //orange
        if(mouseX > this.x + 55 - this.xSize/2 && mouseX < this.x + 55 + this.xSize/2)    //x
        {
            if(mouseY > this.y - this.ySize && mouseY < this.y + this.ySize/2)  //y
            {
                if(this.Press)
                {
                    this.r = 255;
                    this.g = 153;
                    this.b = 0;
                }
                console.log("orange");

                this.ora_bright = 0.85;
            }
            else
            {
                this.ora_bright = 1;
            }
        } 
        else
        {
            this.ora_bright = 1;
        }
        ////

        //gul
        if(mouseX > this.x + 110 - this.xSize/2 && mouseX < this.x + 110 + this.xSize/2)    //x
        {
            if(mouseY > this.y - this.ySize && mouseY < this.y + this.ySize/2)  //y
            {
                if(this.Press)
                {
                    this.r = 255;
                    this.g = 255;
                    this.b = 0;
                }
                console.log("gul");

                this.yel_bright = 0.85;
            }
            else
            {
                this.yel_bright = 1;
            }
        }
        else
        {
            this.yel_bright = 1;
        }
        ////

        //grøn
        if(mouseX > this.x - this.xSize/2 && mouseX < this.x + this.xSize/2)    //x
        {
            if(mouseY > this.y + 35 - this.ySize/2 && mouseY < this.y + 35 + this.ySize/2)  //y
            {
                if(this.Press)
                {
                    this.r = 0;
                    this.g = 255;
                    this.b = 0;
                }
                console.log("grøn");

                this.gre_bright = 0.85;
            }
            else
            {
                this.gre_bright = 1;
            }
        }
        else
        {
            this.gre_bright = 1;
        }
        ////

        //blå
        if(mouseX > this.x + 55 - this.xSize/2 && mouseX < this.x + 55 + this.xSize/2)    //x
        {
            if(mouseY > this.y + 35 - this.ySize/2 && mouseY < this.y + 35 + this.ySize/2)  //y
            {
                if(this.Press)
                {
                    this.r = 0;
                    this.g = 0;
                    this.b = 255;
                }
                console.log("blå");

                this.blu_bright = 0.85;
            }
            else
            {
                this.blu_bright = 1;
            }
        }
        else
        {
            this.blu_bright = 1;
        }
        ////

        //sort
        if(mouseX > this.x + 110 - this.xSize/2 && mouseX < this.x + 110 + this.xSize/2)    //x
        {
            if(mouseY > this.y + 35 - this.ySize/2 && mouseY < this.y + 35 + this.ySize/2)  //y
            {
                if(this.Press)
                {
                    this.r = 0;
                    this.g = 0;
                    this.b = 0;
                }
                console.log("sort");

                this.black_bright = 75;
            }
            else
            {
                this.black_bright = 0;
            }
        }
        else 
        {
            this.black_bright = 0;
        }
        //////////////////
        
        //return den rigtige rgb value
        this.RGB = [this.r, this.g, this.b];
        return this.RGB;

        noFill();
    }

    FillCol(buttonXPos, buttonYPos, buttonDia, mousePress)
    {
        //knap lokation
        this.xFill = buttonXPos;
        this.yFill = buttonYPos;
        this.dia = buttonDia;
        strokeWeight(1);
        fill(0);
        text('Fill', this.xFill, this.yFill);

        //bool for hvis knappen er trykket
        this.mousePress = mousePress;

        //tegn rect ovenpå canvas, for at kunne ændre baggrund når vi vil
        this.rFill = 255;
        this.gFill = 255;
        this.bFill = 255;

        //Baggrund er usynlig når den ikke bliver brugt
        this.alpha = 0;

        if(mouseX < this.xFill + this.dia/2 && mouseX > this.xFill - this.dia/2) 
        {
            if(mouseY < this.yFill + this.dia/2 && mouseY > this.yFill - this.dia/2)
            {
                if(this.mousePress)
                {
                    if(this.flagFill == false)
                    {
                        this.rFill = this.r
                        this.gFill = this.g
                        this.bFill = this.b
                        this.alpha = 255
                        this.flagFill = true;
                    }
                }
                else
                {
                    this.flagFill = false;
                }
            }
        }
        fill(this.rFill, this.gFill, this.bFill, this.alpha)
        rect(300,300,5000,5000);     
    }

    AmogusKnap( gif_createImg1,  gif_createImg2, abuttonXPos, abuttonYPos, abuttonDia, amousePress, song)
    {
        this.gif1 = gif_createImg1;
        this.gif2 = gif_createImg2;

        this.xAmong = abuttonXPos;
        this.yAmong = abuttonYPos;
        this.diaAmong = abuttonDia;

        this.song = song;

        this.amousepress = amousePress;

        fill(0);
        text("( ͠° ͟ʖ ͡°)", this.xAmong, this.yAmong);

        //AMOGUS
        if(mouseX < this.xAmong + this.diaAmong/2 && mouseX > this.xAmong - this.diaAmong/2)
        {
            if(mouseY < this.yAmong + this.diaAmong/2 && mouseY > this.yAmong - this.diaAmong/2)
            {
                if(this.mousePress)   
                {
                this.gif1.position(0, 250);
                this.gif2.position(300, 100);

                    if(this.flag == false)
                    {
                        this.song.play();
                        console.log("SUS");
                        this.flag = true;
                    }
                }
                else
                {
                    this.gif1.position(0, 2500);
                    this.gif2.position(0,2500); 
                    this.flag = false;
                } 
            }    
        }
    }

    Erase(EbuttonXPos, EbuttonYPos, EbuttonDia, eMousePress, eBright)
    {
        //knap lokation
        this.xErase = EbuttonXPos;
        this.yErase = EbuttonYPos;
        this.diaErase = EbuttonDia;
        
        this.era_bright = eBright;

        //erase
        fill(0);
        textAlign(CENTER);
        text("Erase", this.xErase, this.yErase);

        if(mouseX < this.xErase + this.diaErase/2 && mouseX > this.xErase - this.diaErase/2)    //x
        {
            if(mouseY < this.yErase + this.diaErase/2 && mouseY > this.yErase - this.diaErase/2)  //y
            {
                if(this.Press)
                {
                    this.r = 255;
                    this.g = 255;
                    this.b = 255;
                }
                console.log("erase");
            }
        }
    }
}