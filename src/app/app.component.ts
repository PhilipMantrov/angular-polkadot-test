import { Component, OnInit } from '@angular/core';
import { ApiRx, WsProvider } from '@polkadot/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-polkadot-test';

  ngOnInit() {
    ApiRx.create({
      provider: new WsProvider('wss://rpc.polkadot.io'),
    }).subscribe(api => {
      api.connect()
      console.log(api.isConnected);
    });
  }
}
