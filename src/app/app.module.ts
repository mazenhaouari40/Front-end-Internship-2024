// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';
import { WebSocketService } from './Service/web-socket-service.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule,ToastrModule.forRoot(), CommonModule ],
  bootstrap: [AppComponent],
  providers: [WebSocketService], // Register the service


}
)
export class AppModule {}
