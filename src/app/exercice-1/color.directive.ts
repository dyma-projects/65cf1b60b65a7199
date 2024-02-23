import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnInit {
  @HostListener('window:keyup', ['$event']) windowKeyUp($event: KeyboardEvent) {
    console.log($event);
    console.log(this.el.nativeElement);
    if($event.key === 'ArrowLeft') {
      this.el.nativeElement.style.color = 'red';
    } else if($event.key === 'ArrowRight') { 
      this.el.nativeElement.style.color = 'green';
    }
  }

  constructor(private el: ElementRef) {
    console.log(el);
    
   }

   ngOnInit(): void {
     console.log(this.el);
     
   }
}
