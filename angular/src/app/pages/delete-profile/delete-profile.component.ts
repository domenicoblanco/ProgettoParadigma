import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {

  me: User;

  constructor(
    private usersService: UsersService,
    private auth: AuthService,
    private uniLoader: UniLoaderService,
    private route: Router,
    private toastService: ToastService
    ) { }

  ngOnInit(): void {
    this.me = this.auth.me
  }

  async confirmedDeletedUser() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Effettuo la chiamata per cancellare la il mio utente
      await this.usersService.deleteUser(this.me._id);

      // Procedo con il logout
      await this.logout();

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

  async logout() {

    // Cancello il mio utente in sessione, settando il mio oggetto a oggetto vuoto
    this.auth.me = {} as User;

    // Cancello il token in sessione settandolo come undefined
    this.auth.userToken = undefined;

    // Navigo l'utente nella schermata Login
    await this.route.navigateByUrl('/login');

  }

}
