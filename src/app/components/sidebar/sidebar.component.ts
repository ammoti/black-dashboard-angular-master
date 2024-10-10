import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  subItems?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/invoice",
    title: "Invoice",
    rtlTitle: "فاتورة",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/transactions",
    title: "Transactions",
    rtlTitle: "المعاملات",
    icon: "icon-money-coins",
    class: ""
  },
  {
    path: "/payment",
    title: "Payment",
    rtlTitle: "دفع",
    icon: "icon-credit-card",
    class: ""
  },
  {
    path: "/settings",
    title: "Settings",
    rtlTitle: "إعدادات",
    icon: "icon-settings-gear-63",
    class: "",
    subItems: [
      {
        path: "/settings/companies",
        title: "Companies",
        rtlTitle: "الشركات",
        icon: "icon-globe-2",
        class: ""
      },
      {
        path: "/settings/users",
        title: "User",
        rtlTitle: "المستخدم",
        icon: "icon-badge",
        class: ""
      },
      {
        path: "/settings/roles",
        title: "Roles",
        rtlTitle: "الأدوار",
        icon: "icon-single-02",
        class: ""
      },
      {
        path: "/settings/workflow",
        title: "Workflow",
        rtlTitle: "سير العمل",
        icon: "icon-double-right",
        class: ""
      }
    ]
  },
  // ... diğer mevcut rotalar ...
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  expandedItems: { [key: string]: boolean } = {};
  console = console;

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems.forEach(item => {
      if (item.subItems) {
        this.expandedItems[item.title] = false;
      }
    });
  }

  toggleSubItems(item: RouteInfo) {
    if (item.subItems) {
      this.expandedItems[item.title] = !this.expandedItems[item.title];
    }
  }

  isExpanded(item: RouteInfo): boolean {
    return this.expandedItems[item.title] || false;
  }
}
