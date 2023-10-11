import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { ItemListComponent } from './item-list/item-list.component'; // Import the item-list component

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CounterComponentComponent,
    ItemListComponent // Add the item-list component to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to imports for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
