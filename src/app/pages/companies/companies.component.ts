import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  
  companies: any[] = [
    { id: 1, name: 'Şirket A', industry: 'Teknoloji', employees: 500, revenue: '10M' },
    { id: 2, name: 'Şirket B', industry: 'Finans', employees: 1000, revenue: '50M' },
    { id: 3, name: 'Şirket C', industry: 'Üretim', employees: 750, revenue: '30M' },
  ];

  newCompany: any = {};
  editingCompany: any = {};

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddCompanyModal(content) {
    this.newCompany = {};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark'
    });
  }

  openEditCompanyModal(content, company) {
    this.editingCompany = {...company};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark'
    });
  }

  addCompany() {
    this.newCompany.id = this.companies.length + 1;
    this.companies.push(this.newCompany);
    this.modalService.dismissAll();
    this.newCompany = {};
  }

  updateCompany() {
    const index = this.companies.findIndex(c => c.id === this.editingCompany.id);
    if (index !== -1) {
      this.companies[index] = {...this.editingCompany};
    }
    this.modalService.dismissAll();
  }

  deleteCompany(id: number) {
    this.companies = this.companies.filter(c => c.id !== id);
  }
}
