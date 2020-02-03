import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  valeur:any=0;
  result=0;
  operator:string;
  button:number;
  coma=false;

  couleur="warning";

  constructor() {}

  onClick(button){
    if(this.operator=="equal"){
      this.valeur=button;
      this.operator='';
    }else{

      if(!this.coma){
        this.valeur=(this.valeur*10)+button;
      }else{
        this.valeur=this.valeur+button;
      }
    }
    

  }

  onAdd(){
    this.couleur="warning tint";
    if(!this.coma){
        if(this.operator=='add'){
          this.result += this.valeur;
          this.valeur = 0;
          this.operator = 'add';
        }else{
          this.result=this.valeur;
          this.valeur=0;
          this.operator='add';
        }
    }else{
      if(this.operator=='add'){
        this.result += parseFloat(this.valeur);
        this.valeur = 0;
        this.operator = 'add';
      }else{
        this.result=parseFloat(this.valeur);
        this.valeur=0;
        this.operator='add';
      }

      this.coma=false;
        
    }
  }

  onSub(){
    this.couleur="warning tint";
    if(!this.coma){
        if(this.operator=='sub'){
          this.result -= this.valeur;
          this.valeur = 0;
          this.operator = 'sub';
        }else{
          this.result=this.valeur;
          this.valeur=0;
          this.operator='sub';
        }
    }else{
      
      if(this.operator=='sub'){
        this.result -= parseFloat(this.valeur);
        this.valeur = 0;
        this.operator = 'sub';
      }else{
        this.result= parseFloat(this.valeur);
        this.valeur=0;
        this.operator='sub';
      }

      this.coma=false;
    }
  }

  onMult(){
    this.couleur="warning tint";
    if(!this.coma){
        if(this.operator=='mult'){
          this.result *= this.valeur;
          this.valeur = 0;
          this.operator = 'mult';
        }else{
          this.result=this.valeur;
          this.valeur=0;
          this.operator='mult';
        }
    }else{
      if(this.operator=='mult'){
        this.result *= parseFloat(this.valeur);
        this.valeur = 0;
        this.operator = 'mult';
      }else{
        this.result=parseFloat(this.valeur);
        this.valeur=0;
        this.operator='mult';
      }

      this.coma=false;
    }
  }

  onDiv(){
    this.couleur="warning tint";
    if(!this.coma){
        if(this.operator=='div'){
          this.result /= this.valeur;
          this.valeur = 0;
          this.operator = 'div';
        }else{
          this.result=this.valeur;
          this.valeur=0;
          this.operator='div';
        }
    }else{
      if(this.operator=='div'){
        this.result /= parseFloat(this.valeur);
        this.valeur = 0;
        this.operator = 'div';
      }else{
        this.result= parseFloat(this.valeur);
        this.valeur=0;
        this.operator='div';
      }

      this.coma=false;
    }
  }

  onChangeSigne(){
    this.valeur=(-1)*this.valeur;
  }

  onPercent(){
    this.valeur=this.valeur/10;
  }

  onClear(){
    this.valeur=0;
  }

  onComa(){
    if(!this.coma){
      if(this.operator!="equal"){
        this.valeur+='.';
        this.coma=true;
      }else{
        this.valeur='0.';
        this.coma=true;
        this.operator='';
      }
      
    }
    
  }

  onEqual(){
    if(!this.coma){
        switch(this.operator){
          case "add":        
            this.valeur+=this.result;
            break;
          case "mult":
            this.valeur*=this.result;
            break;
          case "div":
            this.valeur=this.result/this.valeur;
            break;
          case "sub":
            this.valeur=this.result-this.valeur;
            break;
        }
        
        this.operator="equal";
        this.coma=false;
  }else{
      this.valeur = parseFloat(this.valeur);
    switch(this.operator){
      case "add":        
        this.valeur+=this.result;
        break;
      case "mult":
        this.valeur*=this.result;
        break;
      case "div":
        this.valeur=this.result/this.valeur;
        break;
      case "sub":
        this.valeur=this.result-this.valeur;
        break;
    }
    
    this.operator="equal";
    this.coma=false;

  }
  }

}
