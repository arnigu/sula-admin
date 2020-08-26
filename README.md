# SulaAdmin

## Purpose

Admin interface for GoPro Opis / Sula.

## Development

### Add new admin component

    cd src/app/admin
    ng g component xxxxx --module admin.module

Then add a new entry in the admin-routing.module.ts routing definitions

    { path: 'xxxxx', component: XxxxxComponent }

Then add a "link" to the admin.component.html

    <a routerLink="xxxxx">Xxxxx</a>

Now you should be able to navigate to the new component.    

  


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
