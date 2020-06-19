import { Injectable, Component } from '@angular/core';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ToastOptions {
    message?: string;
    type?: ToastTypes;
    duration?: number;
    accountDisabled?: boolean;
}

@Injectable()
export class ToastService {

    constructor(private _snackBar: MatSnackBar) {}

    show(options: ToastOptions) {

        if (!options.duration) { options.duration = 5000; }
        if (!options.type) { options.type = ToastTypes.WARNING; }

        this._snackBar.open(options.message, "", {
            duration: options.duration,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: options.type,
        }); 
    }
}
