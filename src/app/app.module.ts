import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LiveExampleComponent } from './live-example/live-example.component';
import { DocInfoService } from './doc-info.service';
import { NgioCheatsheetComponent } from './ngio-cheatsheet/ngio-cheatsheet.component';
import { CodeExampleComponent } from './code-example/code-example.component';
import { CopyContainerComponent } from './copy-container/copy-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveExampleComponent,
    NgioCheatsheetComponent,
    CodeExampleComponent,
    CopyContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DocInfoService,
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy},
    { provide: APP_BASE_HREF, useValue: '.' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }