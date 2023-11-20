import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false)
  isError$ = new BehaviorSubject<boolean>(false)
  open() {
    this.isVisible$.next(true)
  }
  close() {
    this.isVisible$.next(false)
  }
  openError() {
    this.isError$.next(true)
  }
  closeError() {
    this.isError$.next(false)
  }
}
