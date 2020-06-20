import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupPage {

  constructor(
    private route: Router,
    private usersService: UsersService,
    private auth: AuthService,
    private toastService: ToastService,
    public uniLoader: UniLoaderService
  ) { }

  user = {} as User;

  gotoNextField(nextElement) {
    nextElement.setFocus();
  }

  async signup() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Creo utente
      await this.usersService.createUser(this.user);

      // Creo oggetto login
      const loginUser: Login = {
        email: this.user.email,
        password: this.user.password
      };

      // Effettuo il login, per salvare il token in sessione
      await this.auth.login(loginUser);

      // Se la chiamata è andata buon fine, porto l'utente sulla schermata Tabs
      await this.route.navigateByUrl('/');

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: 'Account successfully created!',
        type: ToastTypes.SUCCESS
      });

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

    // Chiudo il loader
    await this.uniLoader.dismiss();

  }

  isDataInvalid(): boolean {

    if (this.user.password) {
      return this.user.password.length < 5;
    }

    return true;

  }

  goBack(): void {
    this.route.navigateByUrl('/login');
  }

}
