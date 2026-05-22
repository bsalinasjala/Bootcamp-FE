import { Component } from "@angular/core";

@Component({
    selector: 'app-notifier',
    templateUrl: './notifier.html'
})

export class Notifier {
    protected logInfo(): void {
        console.log("Info button clicked!")
    }

    protected logWarning(): void {
        console.log("Warning button clicked!")
    }
}