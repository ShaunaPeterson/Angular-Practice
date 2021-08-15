import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoolMusicComponent } from './cool-music/cool-music.component';
import { CoolMusicDetailsComponent } from './cool-music-details/cool-music-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CoolMusicComponent,
    CoolMusicDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
