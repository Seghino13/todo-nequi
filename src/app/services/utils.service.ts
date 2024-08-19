import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  randomColor() {
    const caracteresHex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += caracteresHex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
