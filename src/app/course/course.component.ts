import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
    {{ text | summary:10 }}
  `
})
export class CourseComponent {
  text = `lorem aslfalsdfa asflajs woirw klasdlfk jasie owier awei aoie adfnaldfk kajwoeir waor iawefn ale awoeu
    
  `
}


