import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmeme',
  templateUrl: './addmeme.component.html',
  styleUrls: ['./addmeme.component.scss']
})
export class AddmemeComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  dismissModal(){
    this.activeModal.dismiss('Cross click')
  }
  closeModal(){
    this.activeModal.close('Close click');
  }

}
