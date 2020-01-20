import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]',
})
export class appBasicHighlightDirective implements OnInit{

constructor(private elref:ElementRef)
{
    console.log("in the directive omg"+this.elref);
   
}

ngOnInit()
{
this.elref.nativeElement.style.backgroundColor='blue';
    console.log("in the directive"+this.elref);
    

}
}