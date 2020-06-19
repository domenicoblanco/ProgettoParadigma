import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UniLoaderService {

    visibility: boolean;

    constructor() {
        this.visibility = false;
    }

    show() {
        this.visibility = true;
    }

    dismiss() {
        this.visibility = false;
    }

}
