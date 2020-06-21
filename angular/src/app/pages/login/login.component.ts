import { Component } from '@angular/core';   
import { AuthService } from 'src/app/services/auth/auth.service';
import { Login } from 'src/app/interfaces/login';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPage {

  loginUser = {} as Login;

  constructor(
    private route: Router,
    private auth: AuthService,
    public uniLoader: UniLoaderService,
    private toastService: ToastService
  ) { 
    this.loginUser.password = "";
  }

  gotoNextField(nextElement) {
    nextElement.setFocus();
  }

  async goToSignup() {

    // Navigo l'utente sulla pagina signup
    await this.route.navigateByUrl('/signup');
  }

  async login() {

    try {

      // Avvio il loader in attesa che venga risolta la promise (mostra un indicator activity)
       this.uniLoader.show();

      // Effettuo la chiamata login
      await this.auth.login(this.loginUser);

      // Se la chiamata è andata buon fine, porto l'utente sulla schermata Tabs
      await this.route.navigateByUrl('/');

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

    // Chiudo il loader
    this.uniLoader.dismiss();

  }

  isDataInvalid(): boolean {
    
    if (this.loginUser.password) {
      return this.loginUser.password.length < 5;
    }

    return true;
  }

}
