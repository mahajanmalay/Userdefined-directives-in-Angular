import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private eobj:ElementRef) 
  {
    this.eobj.nativeElement.style.background='yellow';
    this.eobj.nativeElement.style.type= 'bold';
  }
  
}
