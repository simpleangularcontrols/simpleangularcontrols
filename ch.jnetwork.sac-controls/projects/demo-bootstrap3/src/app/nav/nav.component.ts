import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './nav.component.html',
    standalone: true,
    imports: [RouterLinkActive, RouterLink],
})
export class AppNavigationComponent {}
