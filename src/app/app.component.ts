import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { Ibusiness } from './interfaces/ibusiness';
import { Icategory } from './interfaces/icategory';
import {Injectable} from '@angular/core';

@Injectable()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  businesses: any[];
  businessKeys: any;
  categories: any[];
  categoryKeys: any;
  loader: boolean;
  activeKey: any;
  appState: any;
  some: any;

  constructor(private fb: AngularFirestore) {
   console.log('constructor ran');
  }

  ngOnInit() {
   console.log('oninit ran');

   this.loader = true;

      this.fb.collection('/businesses').valueChanges()
      .subscribe(items => {
        this.businesses = items;
        this.businessKeys = Object.keys(this.businesses);
      console.log(this.businesses);
      console.log(this.businessKeys);
      this.loader = false;
      }, error => {
          console.log(error);
          this.loader = false;
        });

      this.fb.collection('/categories').valueChanges()
      .subscribe(items => {
        this.categories = items;
        this.categoryKeys = Object.keys(this.categories);
      console.log(this.categories);
      console.log('keys: ' + this.categoryKeys);
      this.loader = false;
      }, error => {
          console.log(error);
          this.loader = false;
        });

   }


    /* getBusinesses() {
      this.fb.collection('/businesses').valueChanges()
      .subscribe(items => {
        this.businesses = items;
      console.log(this.businesses);
      });
      // return this.businesses;
    } */

    /* getCategories() {
      this.fb.collection('/categories').valueChanges()
      .subscribe(items => {
        this.categories = items;
      console.log(this.categories);
      });
      // return this.categories;
    } */

    changeState(state, key) {
      if (key) {
        this.activeKey = key;
      }
      this.appState = state;
    }

}
