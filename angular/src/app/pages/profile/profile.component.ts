import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { DeleteProfileComponent } from '../delete-profile/delete-profile.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfilePage implements OnInit, AfterViewChecked {

  me: User;

  readOnly = true;

  constructor(
    private auth: AuthService,
    private usersService: UsersService,
    private route: Router,
    public uniLoader: UniLoaderService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<DeleteProfileComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.me = this.auth.me;
  }

  ngAfterViewChecked() {
    document.getElementById('toolbar').innerHTML = '<span>Profile</span>';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteProfileComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  loadImageFromDevice(event) {

    const file = event.target.files[0];
  
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = async () => { 
      this.me.image = reader.result;
      await this.usersService.editUser(this.me);
    };
  
    reader.onerror = (error) => {
  
      //handle errors
      console.log(error);
  
    };
  };

  async editAndSave() {

    // Se l'utente è in modalità modifica...
    if (!this.readOnly) {
      try {

        // Avvio il loader
        await this.uniLoader.show();

        // Salvo le modifiche apportate all'oggetto 'me'
        await this.usersService.editUser(this.me);

        // Rimuovo il loader
        await this.uniLoader.dismiss();

        // Mostro toast di conferma
        await this.toastService.show({
          message: 'Your account edits are now safe and sound!',
          type: ToastTypes.SUCCESS
        });

      } catch (err) {

        // Chiudo il loader
        await this.uniLoader.dismiss();

        // Nel caso la chiamata vada in errore, mostro l'errore in un toast
        await this.toastService.show({
          message: err.message,
          type: ToastTypes.ERROR
        });

      }
    }

    // Altrimenti, cambio lo stato della mia variabile - per rendere i campi editabili o meno
    this.readOnly = !this.readOnly;

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
