import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

// Add these new imports
import { CompaniesComponent } from "../../pages/companies/companies.component";
import { UsersComponent } from "../../pages/users/users.component";
import { RolesComponent } from "../../pages/roles/roles.component";
import { WorkflowComponent } from "../../pages/workflow/workflow.component";
import { InvoiceComponent } from "src/app/pages/invoice/invoice.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }

  // Add these new routes
  { path: 'settings/companies', component: CompaniesComponent },
  { path: 'settings/users', component: UsersComponent },
  { path: 'settings/roles', component: RolesComponent },
  { path: 'settings/workflow', component: WorkflowComponent },
  { path: 'invoice', component: InvoiceComponent },
];
