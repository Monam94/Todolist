import { Component , TemplateRef, Input,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  name :string;
  
  
  /* An empty array that is responsible 
       to add a division */
    public items = []; 
  
    /* A two-way binding performed which 
       pushes text on division */
    public newTask; 
  
  
    /* When input is empty, it will 
       not create a new division */
    public addToList() { 
        if (this.newTask == '') { 
        } 
        else { 
            this.items.push(this.newTask); 
            this.newTask = ''; 
        } 
    } 
  
    /* This function takes to input the 
       task, that has to be deleted*/
    public deleteTask(index) { 
        this.items.splice(index, 1); 
    } 

    public editTask(index){
        let name=this.items[index];
        let message =prompt("Edit Task Title", name);
        if (message !== null && message !== ""){
            this.items[index] = message;
          }

    }
}
