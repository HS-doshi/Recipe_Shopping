import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click', ['$event']) toggleOpen() {
        this.isOpen =  !this.isOpen ;
    }

}
