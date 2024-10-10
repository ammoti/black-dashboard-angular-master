import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  workflows: any[] = [
    { id: 1, name: 'İş Akışı A', description: 'Açıklama A', status: 'active', createdBy: 'Kullanıcı 1', roles: ['Admin', 'Manager'], createdAt: new Date('2023-01-15') },
    { id: 2, name: 'İş Akışı B', description: 'Açıklama B', status: 'inactive', createdBy: 'Kullanıcı 2', roles: ['User', 'Guest'], createdAt: new Date('2023-02-20') },
    { id: 3, name: 'İş Akışı C', description: 'Açıklama C', status: 'draft', createdBy: 'Kullanıcı 3', roles: ['Admin'], createdAt: new Date('2023-03-25') },
  ];

  newWorkflow: any = {};
  editingWorkflow: any = {};
  availableRoles: string[] = ['Admin', 'Manager', 'User', 'Guest'];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddWorkflowModal(content) {
    this.newWorkflow = { roles: [] };
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark'
    });
  }

  openEditWorkflowModal(content, workflow) {
    this.editingWorkflow = {...workflow};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark'
    });
  }

  addWorkflow() {
    this.newWorkflow.id = this.workflows.length + 1;
    this.newWorkflow.createdAt = new Date();
    this.newWorkflow.createdBy = 'Mevcut Kullanıcı'; // Bu kısmı gerçek kullanıcı bilgisiyle değiştirin
    this.workflows.push(this.newWorkflow);
    this.modalService.dismissAll();
    this.newWorkflow = {};
  }

  updateWorkflow() {
    const index = this.workflows.findIndex(w => w.id === this.editingWorkflow.id);
    if (index !== -1) {
      this.workflows[index] = {...this.editingWorkflow};
    }
    this.modalService.dismissAll();
  }

  deleteWorkflow(id: number) {
    this.workflows = this.workflows.filter(w => w.id !== id);
  }
}
