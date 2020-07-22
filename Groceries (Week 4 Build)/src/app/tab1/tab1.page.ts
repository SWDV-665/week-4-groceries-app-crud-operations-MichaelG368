import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from './../groceries.service';
import { InputDialogService } from './../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesService, public InputDialogService: InputDialogService) {}

  load_items(){
    return this.dataService.get_items()
  }
  
  // Function for removing grocery items
  async remove_item(item, index){
    console.log("Removing Item - ", item);
    const toast = await this.toastController.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.dataService.remove_item(index);
  }

  async add_item(){
    console.log("Adding New Item");
    this.InputDialogService.item_prompt()
  }

  async edit_item(item, index){
    console.log("Editing Item - ", item);
    const toast = await this.toastController.create({
      message: "Editing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.InputDialogService.item_prompt(item, index)
  }
  
}


