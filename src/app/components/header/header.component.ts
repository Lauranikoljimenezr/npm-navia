import { Component ,OnInit,AfterContentInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,AfterContentInit,OnDestroy {
constructor(){
  console.log('1.primero sucedera esto');
  
}
ngOnInit(): void {
  console.log('2.luego esto');
  
}
ngAfterContentInit(): void {
  console.log('3.seguido de esto');
  
}
ngOnDestroy(): void {
  console.log('4.finalmente esto(cuando el componente sea destruido)');
  
}
}
