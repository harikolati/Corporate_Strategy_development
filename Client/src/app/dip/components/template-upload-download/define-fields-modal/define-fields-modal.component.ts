import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-define-fields-modal',
  templateUrl: './define-fields-modal.component.html',
  styleUrls: ['./define-fields-modal.component.css']
})
export class DefineFieldsModalComponent implements OnInit {
  @ViewChild('modal') modal:ElementRef;
  modalBackdrop:boolean = false;
  constructor() { }

  ngOnInit() {

  }

  showModal(){
    this.modal.nativeElement.style.display = 'block';
    this.modalBackdrop = true;
  }
  closeModal(){
      this.modal.nativeElement.style.display = '';
      this.modalBackdrop = false;
  }

}
