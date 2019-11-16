import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FloraService } from '../services/flora.service';

@Injectable()
export class ListfloraResolver implements Resolve<any> {

  constructor(private floraService: FloraService) {}

  resolve() {
    return this.floraService.getTasks();
  }
}