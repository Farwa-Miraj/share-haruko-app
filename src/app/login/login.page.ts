import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  public alertButtons = ['OK'];
  loginForm: FormGroup;
  submitted = false;
  showPassword = false;
  

  
	isLoggingIn = false
  open=false;
 
  constructor(
    private fb: FormBuilder,

  ) {
  //  this.translateService.setDefaultLang('de');
    this.loginForm =this.fb.group(
      {
        
        email: ['', [Validators.email, Validators.required]],
        password: [null,  Validators.required],
       
      },
     
    );
  }
  //modal//////////
  async openModal() {
    this.open=true
    console.log(this.open)
    

  }
  ///////////
  get loginFormCtrl() {
    return this.loginForm.controls;
  }
  ngOnInit() {
  }
 
  // onSubmit() {
  //   this.submitted = true;
  //   let url = '';
  //   const { email, password } = this.loginForm.value;
  //   console.log(this.loginForm.value);
  //   if (this.loginForm.valid) {
  //     this.loginGQL
  //       .mutate(
  //         {
  //           input: {
  //             email,
  //             password,
  //           },
  //         },
  //         {
  //           fetchPolicy: 'no-cache',
  //           errorPolicy: 'all',
  //         }
  //       )
  //       .subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           if(res.errors){              
  //             this.util.showToast(res.errors[0].message, 'danger', 'top');
  //             return
  //           }
  //           localStorage.setItem('token', res.data.login.session.token)
  //           localStorage.setItem('userData', JSON.stringify(res.data.login.user))
  //           this.authService.handleLoginResult(res.data.login.user)
  //         },
  //         error: (e) => {
  //                   console.log(e);
  //                   this.util.showToast(e, 'danger', 'top');
  //         }
  //       });
  //   }
  // }
	onSubmit() {
		if (this.isLoggingIn) {
			return
		}

		this.isLoggingIn = true

		const { email, password } = this.loginForm.value
 
    console.log(email,password)
	}
  
  toggleShow() {
    this.showPassword = !this.showPassword;
    //this.input.type = this.showPassword ? 'text' : 'password';
  }

  
}
