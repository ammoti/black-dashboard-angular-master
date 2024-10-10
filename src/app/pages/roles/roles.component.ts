import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
 
}



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  roles: Role[] = [
    { id: 1, name: 'Admin', description: 'Full access to all features', permissions: ['read', 'write', 'delete'] },
    { id: 2, name: 'Editor', description: 'Can edit and publish content', permissions: ['read', 'write'] },
    { id: 3, name: 'Viewer', description: 'Can only view content', permissions: ['read'] },
  ];

  newRole: any = { permissions: [] };
  editingRole: any = { permissions: [] };

  availablePermissions: any[] = [
    {name: 'Read', value: 'read'},
    {name: 'Write', value: 'write'},
    {name: 'Delete', value: 'delete'},
    {name: 'Publish', value: 'publish'},
    {name: 'Manage Users', value: 'manage_users'},
    {name: 'Manage Roles', value: 'manage_roles'}
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openAddRoleModal(content: any): void {
    this.newRole = { id: 0, name: '', description: '', permissions: [] };
    
    const modalRef = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark',
      size: 'lg'
    });

    from(modalRef.result).pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      (result) => {
        console.log('Modal closed with result:', result);
        // Modal kapandığında yapılacak işlemler
      },
      (reason) => {
        console.log('Modal dismissed with reason:', reason);
        // Modal reddedildiğinde yapılacak işlemler
      }
    );
  }

  openEditRoleModal(content, role: Role) {
    this.editingRole = {...role};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark',
      size: 'lg'
    });
  }

  addRole() {
    this.newRole.id = this.roles.length + 1;
    this.roles.push({...this.newRole});
    this.modalService.dismissAll();
    this.newRole = { id: 0, name: '', description: '', permissions: [] };
  }

  updateRole() {
    const index = this.roles.findIndex(r => r.id === this.editingRole.id);
    if (index !== -1) {
      this.roles[index] = {...this.editingRole};
    }
    this.modalService.dismissAll();
  }

  deleteRole(id: number) {
    this.roles = this.roles.filter(r => r.id !== id);
  }

  comparePermissions(perm1: string, perm2: string): boolean {
    return perm1 === perm2;
  }
}
