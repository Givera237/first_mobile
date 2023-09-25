import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-food',
  templateUrl: './save-food.component.html',
  styleUrls: ['./save-food.component.scss']
})
export class SaveFoodComponent 
{
  inscriptionForm!: FormGroup;

  constructor( private formbuilder : FormBuilder){}

  ngOnInit() : void
  {

    this.inscriptionForm = this.formbuilder.group
    (
      {
        nom: [null,[Validators.required]],
      }
    ) ;
    
    
  } 
}
