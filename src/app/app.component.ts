import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Injectable} from '@angular/core';

@Injectable()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  businesses: any[];
  // businessKeys: any;
  categories: any[];
  // categoryKeys: any;
  loader: boolean;
  activeKey: any;
  appState: any;
  // objectKeys = Object.keys;
  filteredCategory: any;

  constructor(private fb: AngularFirestore) {
   console.log('constructor ran');
  }

  ngOnInit() {
   console.log('oninit ran');

   this.loader = true;
    this.appState = 'default';
      this.fb.collection('/businesses').valueChanges()
      .subscribe(items => {
        this.businesses = items;
        // this.businessKeys = Object.keys(this.businesses);
      console.log(this.businesses);
      // console.log(this.businessKeys);
      // console.log(this.businessKeys.length);
      this.loader = false;
      }, error => {
          console.log(error);
          this.loader = false;
        });

      this.fb.collection('/categories').valueChanges()
      .subscribe(items => {
        this.categories = items;
        // this.categoryKeys = Object.keys(this.categories);
      console.log(this.categories);
      // console.log(this.categoryKeys);
      // console.log(this.categoryKeys.length);
      this.loader = false;
      }, error => {
          console.log(error);
          this.loader = false;
        });

   }

    changeState(state, key) {
      if (key >= 0) {
        this.activeKey = key;
      }
      this.appState = state;
      console.log('key: ' + key);
      console.log('state: ' + state);

    }

    filterCategory() {}

}
