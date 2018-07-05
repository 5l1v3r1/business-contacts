import { Icategory } from './interfaces/icategory';
import { Ibusiness } from './interfaces/ibusiness';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';


export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // businesses: any[];
  // categories: any[];
  loader: boolean;
  activeKey: any;
  appState: any;
  filteredCategory: any;
  category = null;

  private itemsCollection: AngularFirestoreCollection<Item>;
  private businessCollection: AngularFirestoreCollection<Ibusiness>;
  private categoryCollection: AngularFirestoreCollection<Icategory>;
  items: Observable<Item[]>;
  businesses: Observable<Ibusiness[]>;
  categories: Observable<Icategory[]>;

  constructor(private fb: AngularFirestore) {
    // this.appState = 'default';

  //  this.loader = true;

    this.itemsCollection = fb.collection<Item>('items');
    this.businessCollection = fb.collection<Ibusiness>('businesses');
    this.categoryCollection = fb.collection<Icategory>('categories');

    // this.items = this.itemsCollection.valueChanges();
    this.businesses = this.businessCollection.valueChanges();
    /* this.businesses = this.businessCollection.snapshotChanges()
        .pipe(
          map(
            actions => actions.map(a => ({key: a.key, ...a.payload.val()}))
          )
        ).subscribe(items => {
          return items.map(item => item.key);
        }); */

    this.categories = this.categoryCollection.valueChanges();
    // this.loader = false;
    console.log(this.businesses);
    console.log(this.categories);

   console.log('constructor ran');
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  ngOnInit() {
   console.log('oninit ran');

  //  this.loader = true;
    this.appState = 'default';
      // this.fb.collection('/businesses').valueChanges()
      // .subscribe(items => {
      //   this.businesses = items;
      // console.log(this.businesses);
      // this.loader = false;
      // }, error => {
      //     console.log(error);
      //     this.loader = false;
      //   });

      // this.fb.collection('/categories').valueChanges()
      // .subscribe(items => {
      //   this.categories = items;
      // console.log(this.categories);
      // this.loader = false;
      // }, error => {
      //     console.log(error);
      //     this.loader = false;
      //   });

   }

    changeState(state, key?) {
      // if (key >= 0) {
        this.activeKey = key;
      // }
      this.appState = state;
      console.log('key: ' + key);
      console.log('state: ' + state);

    }

    filterCategory(category: string) {

      if (category !== null) {
        this.businesses = this.fb.collection('businesses', ref => ref.orderBy('category', 'asc')).valueChanges();
      }  else {
        this.businesses = this.fb.collection('businesses').valueChanges();
     }

    }
}
