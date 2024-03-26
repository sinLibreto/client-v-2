import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  public socketStatus: boolean = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor de sockect');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor'); 
      this.socketStatus = false;
    });
  }
}
