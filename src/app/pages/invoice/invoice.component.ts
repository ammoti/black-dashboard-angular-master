import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoices: any[] = [
    { id: 1, number: 'INV-001', customer: 'Müşteri A', amount: 1000, date: new Date('2023-05-01'), status: 'Ödendi', imageUrl: null },
    { id: 2, number: 'INV-002', customer: 'Müşteri B', amount: 1500, date: new Date('2023-05-05'), status: 'Beklemede', imageUrl: null },
    { id: 3, number: 'INV-003', customer: 'Müşteri C', amount: 2000, date: new Date('2023-05-10'), status: 'İptal Edildi', imageUrl: null },
  ];

  newInvoice: any = {};
  editingInvoice: any = {};

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddInvoiceModal(content) {
    this.newInvoice = {};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark'
    });
  }

  openEditInvoiceModal(content, invoice) {
    this.editingInvoice = {...invoice};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark'
    });
  }

  addInvoice() {
    this.newInvoice.id = this.invoices.length + 1;
    this.newInvoice.date = new Date();
    this.invoices.push(this.newInvoice);
    this.modalService.dismissAll();
    this.newInvoice = {};
  }

  updateInvoice() {
    const index = this.invoices.findIndex(i => i.id === this.editingInvoice.id);
    if (index !== -1) {
      this.invoices[index] = {...this.editingInvoice};
    }
    this.modalService.dismissAll();
  }

  deleteInvoice(id: number) {
    this.invoices = this.invoices.filter(i => i.id !== id);
  }

  onFileSelected(event: any, isEditing: boolean = false) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (isEditing) {
          this.editingInvoice.imageUrl = e.target.result;
        } else {
          this.newInvoice.imageUrl = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  getFileName(imageUrl: string): string {
    if (!imageUrl) return '';
    // Base64 formatındaki resmin MIME tipini ve dosya adını çıkar
    const match = imageUrl.match(/^data:image\/(.*);base64,/);
    if (match && match[1]) {
      return `Seçilen dosya: fatura.${match[1]}`;
    }
    return 'Seçilen dosya';
  }
}
