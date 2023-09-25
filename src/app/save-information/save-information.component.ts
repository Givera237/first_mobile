import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-save-information',
  templateUrl: './save-information.component.html',
  styleUrls: ['./save-information.component.scss']
})
export class SaveInformationComponent 
{
  inscriptionForm!: FormGroup;
  imc!: number;

  constructor( private formbuilder : FormBuilder,
                private router : Router){}

  ngOnInit() : void
  {

    this.inscriptionForm = this.formbuilder.group
    (
      {
        nom: [null,[Validators.required]],
        age: [null,[Validators.required]],
        masse: [null,[Validators.required]],
        taille: [null,[Validators.required]],
       
      }
    ) ;
    
  } 

  calculateImc() {
    const taille = this.inscriptionForm.value.taille;
    const masse = this.inscriptionForm.value.masse;
    this.imc = masse / (taille * taille);
  }

  onViewSite(id_post : number) : void
   {
    this.router.navigateByUrl(`${id_post}/imc`);
   }


}
