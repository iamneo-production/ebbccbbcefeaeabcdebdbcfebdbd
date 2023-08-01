import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  result:string =''

  

  Currencyconvert(a:string,b:string,c:string)
  {
      this.result = ((Math.round((Number(c)*Number(b))/Number(a)))).toString()+".00"
    
  }
}
