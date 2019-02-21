import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
   mylist = [];
   DataJSON = [{"id":1},{"id":2},{"id":3,"children":[{"id":4},{"id":5,"foo":"bar"}]}];
   MenuForm:FormGroup;
  constructor() {
    this.MenuForm = new FormGroup({
      label : new FormControl(''),
      value :  new FormControl('')
     });

     this.mylist.push({'label':'Select','value':''});
   }

  ngOnInit() {

    $(window).on('load',function(){
      $('.input_label').css('background-color','#f90000');
      $('#dd').nestable({'json': this.DataJSON,scroll: true});
    });
      
  
  


    
  }
  
  updateItem(){
    this.mylist.push(this.MenuForm.value);
    this.MenuForm.reset();
  }
  onChange(myv){
    console.log(myv.target.value);
  }
}
