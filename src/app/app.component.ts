import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'evaluation';

    constructor(private _matIconRegistry: MatIconRegistry) {
        this._matIconRegistry.setDefaultFontSetClass('material-icons-outlined')
    }
}
