import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent 
{
  constructor(private route : ActivatedRoute,){}
  imc!: number;

  ngOnInit() 
  {
     
    this.imc = +this.route.snapshot.params['id'];
   
  }

}
