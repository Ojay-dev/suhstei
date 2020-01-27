import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // const win = (window as any);
    // if(win.location.search !== '?loaded' ) {
    //       win.location.search = '?loaded';
    //       win.location.reload();
    //   }

    this.authService.profile().subscribe(profile => {
      console.log(profile);
      this.firstName = profile.firstname;
      this.lastName = profile.lastname;
      this.email = profile.email;
      this.phoneNo = `0${profile.phone}`;

      if (!!profile.avatar && profile.avatar !== "") {
        const avatarImgNav: HTMLImageElement = document.querySelector('[avatar]');
        const avatarImg: HTMLImageElement = document.querySelector('#profile-img');
        avatarImg.src = profile.avatar;
        avatarImgNav.src = profile.avatar;
      }
    });

  }

}
