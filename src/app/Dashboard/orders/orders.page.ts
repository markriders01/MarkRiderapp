import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Clipboard } from '@capacitor/clipboard';
import { AlertService } from 'src/app/Services/alert/alert.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  text: string = 'Hello world';
  trackingdetails = JSON.parse(localStorage.getItem('trackorderdetails'));
  constructor(private route: Router, private alert: AlertService,) { }

  ngOnInit() {
  }

  gotoOrderDetails(id){
    this.route.navigate(['/dashboard/orders-details', id]);
  }

  trackShipment() {
    this.route.navigate(['/dashboard/track-orders']);
  }
  writeToClipboard = async (address: string ) => {
    await Clipboard.write({
      string: address
    });
this.alert.showSuccessAlert('Copied to clipboard')
  };
}

