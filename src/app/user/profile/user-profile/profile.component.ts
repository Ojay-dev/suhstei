import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.profileData = this.route.snapshot.data['profile'];

    console.log(this.profileData);


    if (!!this.profileData.avatar && this.profileData.avatar !== '') {
      const avatarImgNav: HTMLImageElement = document.querySelector('[avatar]');
      const avatarImg: HTMLImageElement = document.querySelector('#profile-img');
      avatarImg.src = this.profileData.avatar;
      avatarImgNav.src = this.profileData.avatar;
    }

    // this.authService.profile().subscribe(profile => {
    //   console.log(profile);
    //   // this.firstName = profile.firstname;
    //   // this.lastName = profile.lastname;
    //   // this.email = profile.email;
    //   // this.phoneNo = `0${profile.phone}`;

    //   // if (!!profile.avatar && profile.avatar !== "") {
    //   //   const avatarImgNav: HTMLImageElement = document.querySelector('[avatar]');
    //   //   const avatarImg: HTMLImageElement = document.querySelector('#profile-img');
    //   //   avatarImg.src = profile.avatar;
    //   //   avatarImgNav.src = profile.avatar;
    //   // }
    // });

  }

}
