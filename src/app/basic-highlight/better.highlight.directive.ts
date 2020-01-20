import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[betterhighlight]'
})
export class appBetterDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor:string="transparant";
    constructor(private elrefone:ElementRef,private render:Renderer2){


    }
ngOnInit()
{
//this.render.setStyle(this.elrefone.nativeElement,'background-color','yellow');
}
@HostListener('mouseenter') mouseover(eventData:Event)
{
   // this.render.setStyle(this.elrefone.nativeElement,'background-color','yellow');
this.backgroundColor="yellow";
}
@HostListener('mouseleave') mouseleave(eventData:Event)
{
    //this.render.setStyle(this.elrefone.nativeElement,'background-color','purple');
this.backgroundColor='transparent';
}
}