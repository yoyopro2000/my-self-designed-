const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   ground = new Ground(600,height,1200,20);
   red1 = new Red(30,30,50,50)
   red2= new Red(30,30,50,50)
   red3 = new Red(30,30,50,50)
   red4 = new Red(30,30,50,50)
   red5 = new Red(30,30,50,50)
   red6 = new Red(30,30,50,50)
   red7 = new Red(30,30,50,50)

   yellow1 = new Yellow(80,30,50,50)
   yellow2= new Yellow(80,30,50,50)
   yellow3 = new Yellow(80,30,50,50)
   yellow4 = new Yellow(80,30,50,50)
   yellow5 = new Yellow(80,30,50,50)
   yellow6 = new Yellow(80,30,50,50)
   yellow7 = new Yellow(80,30,50,50)

   orange1 = new Orange(130,30,50,50)
   orange2 = new Orange(130,30,50,50)
   orange3 = new Orange(130,30,50,50)
   orange4 = new Orange(130,30,50,50)
   orange5 = new Orange(130,30,50,50)
   orange6 = new Orange(130,30,50,50)
   orange7 = new Orange(130,30,50,50)

   blue1 = new Blue(180,30,50,50)
   blue2 = new Blue(180,30,50,50)
   blue3 = new Blue(180,30,50,50)
   blue4 = new Blue(180,30,50,50)
   blue5 = new Blue(180,30,50,50)
   blue6 = new Blue(180,30,50,50)
   blue7 = new Blue(180,30,50,50)

   pink1 = new Pink(230,30,50,50)
   pink2 = new Pink(230,30,50,50)
   pink3 = new Pink(230,30,50,50)
   pink4 = new Pink(230,30,50,50)
   pink5 = new Pink(230,30,50,50)
   pink6 = new Pink(230,30,50,50)
   pink7 = new Pink(230,30,50,50)

   green1 = new Green(280,30,50,50)
   green2 = new Green(280,30,50,50)
   green3 = new Green(280,30,50,50)
   green4 = new Green(280,30,50,50)
   green5 = new Green(280,30,50,50)
   green6= new Green(280,30,50,50)
   green7 = new Green(280,30,50,50)

   red8 = new Red(330,30,50,50)
   red9= new Red(330,30,50,50)
   red10 = new Red(330,30,50,50)
   red11= new Red(330,30,50,50)
   red12= new Red(330,30,50,50)
   red13= new Red(330,30,50,50)
   red14= new Red(330,30,50,50)

   yellow8 = new Yellow(380,30,50,50)
   yellow9= new Yellow(380,30,50,50)
   yellow10 = new Yellow(380,30,50,50)
   yellow11 = new Yellow(380,30,50,50)
   yellow12 = new Yellow(380,30,50,50)
   yellow13 = new Yellow(380,30,50,50)
   yellow14 = new Yellow(380,30,50,50)

   orange1 = new Orange(130,30,50,50)
   orange2 = new Orange(130,30,50,50)
   orange3 = new Orange(130,30,50,50)
   orange4 = new Orange(130,30,50,50)
   orange5 = new Orange(130,30,50,50)
   orange6 = new Orange(130,30,50,50)
   orange7 = new Orange(130,30,50,50)

   blue1 = new Blue(180,30,50,50)
   blue2 = new Blue(180,30,50,50)
   blue3 = new Blue(180,30,50,50)
   blue4 = new Blue(180,30,50,50)
   blue5 = new Blue(180,30,50,50)
   blue6 = new Blue(180,30,50,50)
   blue7 = new Blue(180,30,50,50)

   pink1 = new Pink(230,30,50,50)
   pink2 = new Pink(230,30,50,50)
   pink3 = new Pink(230,30,50,50)
   pink4 = new Pink(230,30,50,50)
   pink5 = new Pink(230,30,50,50)
   pink6 = new Pink(230,30,50,50)
   pink7 = new Pink(230,30,50,50)

   green1 = new Green(280,30,50,50)
   green2 = new Green(280,30,50,50)
   green3 = new Green(280,30,50,50)
   green4 = new Green(280,30,50,50)
   green5 = new Green(280,30,50,50)
   green6= new Green(280,30,50,50)
   green7 = new Green(280,30,50,50)
   
   
   
   
}

function draw(){
background("green")    
    Engine.update(engine);
    red1.display()
    red2.display()
    red3.display()
    red4.display()
    red5.display()
    red6.display()
    red7.display()
    red8.display()
    red9.display()
    red10.display()
    red11.display()
    red12.display()
    red13.display()
    red14.display()
   

    yellow1.display()
    yellow2.display()
    yellow3.display()
    yellow4.display()
    yellow5.display()
    yellow6.display()
    yellow7.display()
    yellow8.display()
    yellow9.display()
    yellow10.display()
    yellow11.display()
    yellow12.display()
    yellow13.display()
    yellow14.display()
    

    orange1.display()
    orange2.display()
    orange3.display()
    orange4.display()
    orange5.display()
    orange6.display()
    orange7.display()

    blue1.display()
    blue2.display()
    blue3.display()
    blue4.display()
    blue5.display()
    blue6.display()
    blue7.display()

    pink1.display()
    pink2.display()
    pink3.display()
    pink4.display()
    pink5.display()
    pink6.display()
    pink7.display()
    
    green1.display()
    green2.display()
    green3.display()
    green4.display()
    green5.display()
    green6.display()
    green7.display()

   
    
    
   
}

function keyPressed(){
    if(keyCode == 32)
    {
        rand = Math.round(random(1,6))
        if(rand == 1 ){
            red = new Red(1000,400,50,50)
        }
        else if(rand == 2 ){
           red = new Green(1000,400,50,50)
       }
       else if(rand == 3 ){
           red = new Yellow(1000,400,50,50)
       }
        else if(rand == 4 ){
           red = new Orange(1000,400,50,50)
       }
       else if(rand == 5 ){
           red = new Blue(1000,400,50,50)
       }
    }
 
}



