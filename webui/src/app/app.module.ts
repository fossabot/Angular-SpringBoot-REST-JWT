import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppConfig } from './app-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge/badge.component';
import { LegendComponent } from './components/legend/legend.component';
import { LogoComponent } from './components/logo/logo.component';
import { TrackScrollDirective } from './directives/track_scroll/track_scroll.directive';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { OrderDetailsComponent } from './pages/order_details/order_details.component';
import { OrderStatsComponent } from './pages/order_stats/order_stats.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductStatsComponent } from './pages/product_stats/product_stats.component';
import { ProductsComponent } from './pages/products/products.component';
import { ApiRequestService } from './services/api/api-request.service';
import { CustomerService } from './services/api/customer.service';
import { EmployeeService } from './services/api/employee.service';
import { LoginService } from './services/api/login.service';
import { OrderService } from './services/api/order.service';
import { ProductService } from './services/api/product.service';
import { TranslateService } from './services/api/translate.service';
import { AuthGuard } from './services/auth_guard.service';
import { UserInfoService } from './services/user-info.service';


@NgModule({

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClarityModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
  ],

  declarations: [
    AppComponent,
    BadgeComponent,
    CustomersComponent,
    DashboardComponent,
    EmployeesComponent,
    HomeComponent,
    LegendComponent,
    LoginComponent,
    LogoComponent,
    LogoutComponent,
    OrderDetailsComponent,
    OrderStatsComponent,
    OrdersComponent,
    ProductStatsComponent,
    ProductsComponent,
    TrackScrollDirective
  ],

  providers: [
    ApiRequestService,
    AppConfig,
    AuthGuard,
    CustomerService,
    EmployeeService,
    LoginService,
    OrderService,
    ProductService,
    TranslateService,
    UserInfoService,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
