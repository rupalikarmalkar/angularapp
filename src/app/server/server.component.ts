import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: `<h1 class="test" id= "test">This is my server component</h1>
    <h1>This is h1 </h1> 
    {{name}}`,
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    name :string='Codemind';

}