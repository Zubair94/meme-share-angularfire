import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-memedetails',
  templateUrl: './memedetails.component.html',
  styleUrls: ['./memedetails.component.scss']
})
export class MemedetailsComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { 
  }

  ngOnInit() {
  }

  dismissModal(){
    this.activeModal.dismiss('Cross click')
  }
  closeModal(){
    this.activeModal.close('Close click');
  }

}
