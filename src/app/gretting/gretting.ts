import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-greeting',
    templateUrl: './greeting.html',
    styleUrl: './greeting.css'
})
export class Gretting {
    protected readonly username = signal<string>('Alex')
}