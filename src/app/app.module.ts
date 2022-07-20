import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryDashComponent } from './library-dash/library-dash.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BuyComponent } from './buy/buy.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginDataService } from './service/login-data.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ViewComponent } from './view/view.component';
import { LendUserComponent } from './lend-user/lend-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryDashComponent,
    LoginComponent,
    UserComponent,
    BuyComponent,
    AddBookComponent,
    ViewComponent,
    LendUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [LoginDataService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
