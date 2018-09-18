import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { modalData } from '../models/modalData';
import { InviteComponent } from '../components/invite/invite.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AddmemeComponent } from '../components/addmeme/addmeme.component';
import { MemedetailsComponent } from '../components/memedetails/memedetails.component';

@Injectable()
export class ModalgeneratorService {
  
  constructor(private modalService: NgbModal) {}

  open(component, data?: modalData, options?: NgbModalOptions) {
    const modalRef = this.modalService.open(component, options);
    modalRef.componentInstance.data = data;
  }
  
  inviteUser(data?: modalData){
    const options: NgbModalOptions = {
      backdrop: "static",
      size: "lg"
    }
    this.open(InviteComponent, data, options);
  }

  userProfile(data?: modalData){
    const options: NgbModalOptions = {
      backdrop: "static",
      size: "lg"
    }
    this.open(ProfileComponent, data, options);
  }

  addMeme(data?: modalData){
    const options: NgbModalOptions = {
      backdrop: "static",
      size: "lg"
    }
    this.open(AddmemeComponent, data, options);
  }

  showMeme(data?: modalData){
    const options: NgbModalOptions = {
      backdrop: "static",
      size: "lg"
    }
    this.open(MemedetailsComponent, data, options);
  }
}
