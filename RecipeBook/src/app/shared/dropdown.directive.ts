import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true,
})
export class DropdownDirective {
  @HostBinding('class.show')
  isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  toggleOpen(event: Event) {
    event.preventDefault();

    this.isOpen = !this.isOpen;

    const menu = this.elementRef.nativeElement.querySelector('.dropdown-menu');

    if (menu) {
      menu.classList.toggle('show', this.isOpen);
    }
  }
}
