import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-course-part-3';

  constructor(private router: Router) {}

  ngOnInit() {
    const obsTest$ = new Observable((observer) => {
      // console.log("printed from observable");
      observer.next('Returned from Observable');
      observer.next('This is Second return from Observable');

      setTimeout(() => {
        observer.next('This is from timeout function');
      }, 2000);

      observer.next('This is Third return from Observable');
    }).subscribe((value) => {
      console.log(value);
    });

    obsTest$.unsubscribe();

    const obsTest = function () {
      return 'Returned from the Function';
      return 'Reurn 2 from the Function';
    };
    const returnData = obsTest();
    console.log(returnData);
  }

  onSubmit() {
    // this.router.navigate(['/posts']);
     this.router.navigate(['/post'], { queryParams: { page: 1, order: 'newest'}}); // gives error because no array of data
  }
}
