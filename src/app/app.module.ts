import { CardListComponent } from './cards/card-list/card-list.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CardService } from './shared/card.service';
import { CardComponent } from './cards/card/card.component';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
