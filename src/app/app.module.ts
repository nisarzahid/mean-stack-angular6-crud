
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


// Imported
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// Apps Import
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';

// 3rd party
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AddunitService } from './addunit.service';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'index', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SlimLoadingBarModule
  ],
  providers: [ AddunitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
