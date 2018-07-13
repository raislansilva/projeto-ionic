import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'custom-about/:id',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  formLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  ionViewDidLoad() {
    console.log('Register id:', this.navParams.get('id'));
  }

  onSubmit(){
    console.log(this.formLogin.value)
  }

}
