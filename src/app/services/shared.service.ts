import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  public selectedTopic: string;
  public signIn = false;
  constructor() { }

}