import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <button (click)="onSave()">Save</button>

        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" placeholder="two-way binding (ngModel)"/>
        `
})

// <input (keyup.enter)="onKeyUp($event)" placeholder="event binding ($event)"/>
// <input #email (keyup.enter)="onKeyUp(email.value)" placeholder="template variable (#email)"/>

export class CoursesComponent {
    title = 'List of courses';
    imageUrl = "";
    email = 'bleh';
    courses;

    getTitle() {
        return `Title: ${this.title}`;
    }

    onSave() {
        console.log('clicked ')
    }

    onKeyUp() {
        console.log(this.email);
    }

    constructor (service: CoursesService) {
        this.courses = service.getCourses();
    }
}