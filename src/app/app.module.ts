import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// Güncellenmiş import ifadeleri
import { CompaniesComponent } from './pages/companies/companies.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { InvoiceComponent } from './pages/invoice/invoice.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgbCollapseModule
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent,
    CompaniesComponent,
    RolesComponent,
    UsersComponent,
    WorkflowComponent,
    InvoiceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
