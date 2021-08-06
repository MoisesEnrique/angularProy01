import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

import { RouterModule, Route } from '@angular/router';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hello', component: HelloWorldComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserComponent,
    AboutComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
