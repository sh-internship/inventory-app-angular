import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from '../../core/auth.service';
import { Location } from '@angular/common';
import * as ons from 'onsenui';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];
  data = null;

  constructor(private profileService: ProfileService, private authService: AuthService, private location: Location) {

  }

  profileForm = new FormGroup({
    id: new FormControl(),
    avatar: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    login: new FormControl(),
    officeId: new FormControl(),
    isAdmin: new FormControl(),
  });


  ngOnInit() {
    this.profileService.getOffices().subscribe((items) => {
      this.offices = items;
      this.profileForm.controls.officeId.setValue(this.offices[0].name);
    });
    this.authService.user.subscribe(user => {
      this.profileForm.setValue(user);
    });

  }
  onSubmit() {
    this.data = this.profileForm.value;

    const filterOffices = this.offices.filter((office) => {
      return office.name === this.data.officeId;
    });

    const editedOffice = filterOffices[0];

    this.data.officeId = editedOffice.id;

    if (!this.data.firstName || this.data.firstName.replace(/\s/g, '') === '') {
      return ons.notification.alert('Incorrect First Name');
    } else if (!this.data.lastName || this.data.lastName.replace(/\s/g, '') === '') {
      return ons.notification.alert('Incorrect Last Name');
    } else {
      this.profileService.updateUser(this.data).subscribe(() => {
        this.authService.getUpdatedUser().subscribe(() => {
          this.location.back();
          ons.notification.toast('Submit successful', { timeout: 2000 });
        });
      });
    }
  }
}


