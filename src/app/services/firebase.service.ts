import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Ibusiness } from '../interfaces/ibusiness';
import { Icategory } from '../interfaces/icategory';

@Injectable()

export class FirebaseService {
  businesses: any;
  categories: any;

  constructor(private db: AngularFirestore) {
    
  }

/*   getBusinesses() {
      this.db.collection('/businesses').valueChanges()
      .subscribe(items => {
        this.businesses = items;
      console.log(this.businesses);
      });
      return this.businesses;
  } */

  /* getCategories() {
      this.db.collection('/categories').valueChanges()
      .subscribe(items => {
        this.categories = items;
      console.log(this.categories);
      });
      return this.categories;
  } */
}




