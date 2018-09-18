import { Component, OnInit } from '@angular/core';
import { faArchive, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalgeneratorService } from '../../services/modalgenerator.service';
import { modalData } from '../../models/modalData';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  faArchive = faArchive;
  faPlus = faPlus;
  faUserPlus = faUserPlus;

  user = [
    {
      name: "a",
      des: "Xd"
    },
    {
      name: "b",
      des: "Xd"
    },
    {
      name: "c",
      des: "Xd"
    },
    {
      name: "d",
      des: "Xd"
    },
    {
      name: "e",
      des: "Xd"
    },
    {
      name: "f",
      des: "Xd"
    },
    {
      name: "g",
      des: "Xd"
    },
  ]
  constructor(private modalGenerator: ModalgeneratorService) { }

  ngOnInit() {
  }

  onAdd(){
    var data: modalData = {
      data: "abcd"
    }
    this.modalGenerator.addMeme();
  }

  onInvite(){
    this.modalGenerator.inviteUser();
  }

  onDetails(){
    this.modalGenerator.showMeme();
  }
}
