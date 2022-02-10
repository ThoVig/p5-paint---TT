class Button
{
    constructor()
    {


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
        
        fill(r, g, b);
        circle(this.xLocation, this.yLocation, this.diameter);

        this.circleInfo = [this.xCircleButton, this.yCircleButton,this.diameterCircleButton];
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

        //button hover color 

        this.red_bright;
        this.ora_bright;
        this.yel_bright;
        this.gre_bright;
        this.blu_bright;
        this.black_bright

        //erase hover color
        this.era_bright;
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


        //erase
        fill(255*this.era_bright);
        rect(this.x, this.y + 35 + this.ySize, this.xSize, 20)
        fill(0);
        textAlign(CENTER)
        text("Erase", this.x, this.y + 37 + this.ySize)


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
                    this.b = 0;
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
        ////

        //erase
        if(mouseX > this.x - this.xSize/2 && mouseX < this.x + this.xSize/2)    //x
        {
            if(mouseY > this.y + 35 + this.ySize - 20/2 && mouseY < this.y + 35 + 20 + 20)  //y
            {
                if(this.Press)
                {
                    this.r = 255;
                    this.g = 255;
                    this.b = 255;
                }
                console.log("erase");

                this.era_bright = 0.85;
            }
            else
            {
                this.era_bright = 1;
            }
        }
        else
        {
            this.era_bright = 1;
        }
        ////

        
        //return den rigtige rgb value
        this.RGB = [this.r, this.g, this.b];
        return this.RGB;

        noFill();
    }



}