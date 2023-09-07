import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {

   user : User = new User();
  
   constructor(private s1:DemoService)
   { }

  ngOnInit(): void {
  }

  logindata()
  {
     this.s1.logindata1(this.user).subscribe( data=>
      alert("Login successful"), error=>alert("invalid id/pswd")
      );
  }

}
