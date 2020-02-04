import { Component, OnInit } from '@angular/core';
import { Comunity } from 'src/app/core/model/comunity';
import { Mobility } from 'src/app/core/model/mobility';
import { Schedule } from 'src/app/core/model/schedule';

@Component({
  selector: 'app-create-demanda',
  templateUrl: './create-demanda.page.html',
  styleUrls: ['./create-demanda.page.scss'],
})
export class CreateDemandaPage implements OnInit {
  private arrayComunity: Comunity[] = [];
  private arrayMobility: Mobility[] = [];
  private arraySchedule: Schedule[] = [];
 
  constructor() {
    for (let index = 0; index < Object.keys(Comunity).length / 2; index++) {
    
      this.arrayComunity.push(Comunity[index].toString());
       
     }
    for (let index = 0; index < Object.keys(Mobility).length / 2; index++) {
    
      this.arrayMobility.push(Mobility[index].toString());
       
     }
    for (let index = 0; index < Object.keys(Schedule).length / 2; index++) {
    
      this.arraySchedule.push(Schedule[index].toString());
       
     }
   }

  
  ngOnInit() {
  }

  public get arrayCom() {
   
    return this.arrayComunity;
    
    }
    public get arrayMob() {
   
      return this.arrayMobility;
      
      }
      public get arraySche() {
   
        return this.arraySchedule;
        
        }

}
