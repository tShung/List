import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/players">List</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'LIST';
}