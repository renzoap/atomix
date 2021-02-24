/***********************************************/
/*               ATOMIX 1.0                    */
/*  Desarrollado por Renzo A. Pavan (LU9FRP)   */
/***********************************************/

//Necesita el archivo jspdf.min.js para funcionar

 function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

class Particula{
    
     constructor(x,y,tam){           
        this.x = x;
        this.y = y;
        this.tam = tam;       
    }    
    
}
 
class Nucleo extends Particula{
    
    
    
    dibujar(){
        
        doc.setFillColor(255,255,255);
        doc.setDrawColor(0,0,0);
        doc.setLineWidth(0.5);       
        doc.setLineWidth(0.3);
        doc.circle(this.x,this.y,this.tam, 'FD');  
        doc.line((-0.5*this.tam)+this.x, 0+this.y, (0.5*this.tam)+this.x, 0+this.y);
        doc.line(0+this.x, (-0.5*this.tam)+this.y, 0+this.x, (0.5*this.tam)+this.y);                   
    
        var ang=3.14;
        var re=2*this.tam;
        var xx = re*Math.cos(ang);
        var yy = re*Math.sin(ang);
        doc.setLineWidth(0.3);
        doc.circle(this.x+xx,this.y+yy,this.tam, 'FD');
    
        var dado = random(0,1);   
        if (dado === 1){    
          doc.setLineWidth(0.3);
             doc.line((-0.5*this.tam)+this.x+xx, this.y+yy, (0.5*this.tam)+this.x+xx, this.y+yy);
            doc.line(this.x+xx, (-0.5*this.tam)+this.y+yy, this.x+xx, (0.5*this.tam)+this.y+yy);
        }

        var ang=6.28;   
        var xx = re*Math.cos(ang);
        var yy = re*Math.sin(ang);
        doc.setLineWidth(0.3);
        doc.circle(this.x+xx,this.y+yy,this.tam, 'FD');
        
        var dado = random(0,1);   
        if (dado === 1){  
            doc.setLineWidth(0.3);
            doc.line((-0.5*this.tam)+this.x+xx, this.y+yy, (0.5*this.tam)+this.x+xx, this.y+yy);
            doc.line(this.x+xx, (-0.5*this.tam)+this.y+yy, this.x+xx, (0.5*this.tam)+this.y+yy);
        }

        var ang=-3.14;   
    
        var xx = re*Math.cos(ang);
        var yy = re*Math.sin(ang);
         doc.setLineWidth(0.3);
         doc.circle(+this.tam+this.x+xx,this.tam*-1.75+this.y+yy,this.tam, 'FD');
        
        var dado = random(0,1);   
        if (dado === 1){    
            doc.setLineWidth(0.3);
            doc.line((-0.5*this.tam)+this.tam+this.x+xx, -this.tam*1.75+this.y+yy, (0.5*this.tam)+this.tam+this.x+xx, -this.tam*1.75+this.y+yy);
            doc.line(+this.tam+this.x+xx, (-0.5*this.tam)-this.tam*1.75+this.y+yy, +this.tam+this.x+xx, (0.5*this.tam)-this.tam*1.75+this.y+yy);
        }    
             
        var ang=3.14;   
        var xx = re*Math.cos(ang);
        var yy = re*Math.sin(ang);
         doc.setLineWidth(0.3);
         doc.circle(+this.tam+this.x+xx,this.tam*1.75+this.y+yy,this.tam, 'FD');
      
      var dado = random(0,1);   
        if (dado === 1){          
            
            doc.setLineWidth(0.3);
            doc.line((-0.5*this.tam)+this.tam+this.x+xx, this.tam*1.75+this.y+yy, (0.5*this.tam)+this.tam+this.x+xx, this.tam*1.75+this.y+yy);
            doc.line(+this.tam+this.x+xx, (-0.5*this.tam)+this.tam*1.75+this.y+yy, +this.tam+this.x+xx, (0.5*this.tam)+this.tam*1.75+this.y+yy);
        }

    
        var ang=6.28;
    
        var xx = re*Math.cos(ang);
        var yy = re*Math.sin(ang);
        doc.setLineWidth(0.3);
        doc.circle(-this.tam+this.x+xx,this.tam*1.75+this.y+yy,this.tam, 'FD');
        
        var dado = random(0,1);   
        
        if (dado === 1){    
            doc.setLineWidth(0.3);
            doc.line((-0.5*this.tam)-this.tam+this.x+xx, this.tam*1.75+this.y+yy, (0.5*this.tam)-this.tam+this.x+xx, this.tam*1.75+this.y+yy);
            doc.line(-this.tam+this.x+xx, (-0.5*this.tam)+this.tam*1.75+this.y+yy, -this.tam+this.x+xx, (0.5*this.tam)+this.tam*1.75+this.y+yy);
    
        }

        var ang=-6.28;
    
        var xx = re*Math.cos(ang);
        var yy = re*Math.sin(ang);
        doc.setLineWidth(0.3);
        doc.circle(-this.tam+this.x+xx,-this.tam*1.75+this.y+yy,this.tam, 'FD');
        
        var dado = random(0,1);
        if (dado === 1){
            doc.setLineWidth(0.3);
            doc.line((-0.5*this.tam)-this.tam+this.x+xx, -this.tam*1.75+this.y+yy, (0.5*this.tam)-this.tam+this.x+xx, -this.tam*1.75+this.y+yy);
            doc.line(-this.tam+this.x+xx, (-0.5*this.tam)-this.tam*1.75+this.y+yy, -this.tam+this.x+xx, (0.5*this.tam)-this.tam*1.75+this.y+yy);    
        }
    
    }    

}    
    
class Proton extends Particula{ 
      
        
    dibujar(){
        
        doc.setFillColor(255,255,255);
        doc.setDrawColor(0,0,0);
        doc.setLineWidth(0.5);       
        doc.circle(this.x,this.y,this.tam, 'FD');  
        doc.line((-0.5*this.tam)+this.x, 0+this.y, (0.5*this.tam)+this.x, 0+this.y);
        doc.line(0+this.x, (-0.5*this.tam)+this.y, 0+this.x, (0.5*this.tam)+this.y);                   
    }    

} ;
     
class Electron extends  Particula{ 
      
        
    dibujar(nro){

    dado = random(1,4);
               
    if (dado === 1){
       angulo=2.285;
    }    
    if (dado === 2){
        var angulo=1.785;
    }    
    if (dado === 3){
        var angulo=1.285;
    }    
    if (dado === 4){
       var angulo=0.785; 
    }    
            
    doc.setDrawColor(0, 0, 0);
         
    var dado = random(1,5);
   
    for (var i = 0; i < dado; i++) {
         
        
    if (nro === 4){
        
        var h = 14.5*this.tam*Math.cos(angulo);
        var v = 14.5*this.tam*Math.sin(angulo); 
    }     
        
    if (nro === 3){
        
        var h = 11.5*this.tam*Math.cos(angulo);
        var v = 11.5*this.tam*Math.sin(angulo); 
    }         
     
    if (nro === 2){
      
        var h = 8.5*this.tam*Math.cos(angulo);
        var v = 8.5*this.tam*Math.sin(angulo); 
    }         
        
    if (nro === 1){
      
        var h = 5.5*this.tam*Math.cos(angulo);
        var v = 5.5*this.tam*Math.sin(angulo); 
    }         
        
        
    doc.setLineWidth(0.3);    
    doc.circle(this.x+h,this.y+v,this.tam, 'FD');
    doc.line((-0.5*this.tam)+this.x+h, v+this.y, (0.5*this.tam)+this.x+h, v+this.y);
            
     if (dado === 1){
        angulo=angulo+0;    
        }
        if (dado === 2){
        angulo=angulo+3.31;    
        }
        if (dado === 3){
        angulo=angulo+2.094;    
        }    
        if (dado === 4){
        angulo=angulo+1.57;    
        }
        if (dado === 5){
        angulo=angulo+1.256;    
        }
        
        if (dado === 6){
        angulo=angulo+1.047;    
        }   
    }
}
                             
    }    




;      

class Capa extends Particula{
    
    
    
    dibujar(nro){
                
        doc.setFillColor(255,255,255);
        doc.setDrawColor(212, 212, 212);
        doc.setLineWidth(0.5);               
    
        if (nro === 4){       
            doc.circle(this.x,this.y,14.5*this.tam, 'FD');            
        }   
        if (nro === 3){        
            doc.circle(this.x,this.y,11.5*this.tam, 'FD');                   
        }     
        if (nro === 2){        
            doc.circle(this.x,this.y,8.5*this.tam, 'FD');                    
        }              
        if (nro === 1){        
            doc.circle(this.x,this.y,5.5*this.tam, 'FD');           
        }         



};
    

    
};  
 
   class Atomix{
       
       //x,y coordenadas en la hoja
       //m tamaño
       
       
       
       constructor(x,y,tam){
            this.x = x;
            this.y = y;
            this.tam = tam;    
       }
    dibujar(){
          
        const nucleo = new Nucleo(this.x,this.y,this.tam);    
        const electron = new Electron(this.x,this.y,this.tam);    
        const capa = new Capa(this.x,this.y,this.tam); 
       
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }  
       
        var dado=random(1,4); 
       
        if (dado === 4){
            
            capa.dibujar(4);
            capa.dibujar(3);
            capa.dibujar(2);
            capa.dibujar(1);
           
            electron.dibujar(4);
            electron.dibujar(3);
            electron.dibujar(2);
            electron.dibujar(1);
 
            nucleo.dibujar();    
                     
        }
       
        if (dado === 3){
                       
            capa.dibujar(3);
            capa.dibujar(2);
            capa.dibujar(1);
                     
            electron.dibujar(3);
            electron.dibujar(2);
            electron.dibujar(1);

            nucleo.dibujar();    
                     
        }
       
        if (dado === 2){
                        
            capa.dibujar(2);
            capa.dibujar(1);                       
            electron.dibujar(2);
            electron.dibujar(1);

            nucleo.dibujar();    
                     
        }
       
        if (dado === 1){
                        
            
            capa.dibujar(1);                       
            
            electron.dibujar(1);

            nucleo.dibujar();    
                     
        }
        
      

    }
};


