import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  city: string;
  country: string;
  address?: string;
  postalCode?: string;
  about?: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: User[] = [
    { id: 1, username: 'johndoe', firstName: 'John', lastName: 'Doe', email: 'john@example.com', company: 'ABC Corp', city: 'New York', country: 'USA' },
    { id: 2, username: 'janesmith', firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', company: 'XYZ Inc', city: 'London', country: 'UK' },
    { id: 3, username: 'bobjohnson', firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', company: '123 Ltd', city: 'Sydney', country: 'Australia' },
  ];

  newUser: User = {} as User;
  editingUser: User = {} as User;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddUserModal(content) {
    this.newUser = {} as User;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark',
      size: 'lg'
    });
  }

  openEditUserModal(content, user: User) {
    this.editingUser = {...user};
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'bg-darker',
      windowClass: 'modal-dark',
      size: 'lg'
    });
  }

  addUser() {
    this.newUser.id = this.users.length + 1;
    this.users.push(this.newUser);
    this.modalService.dismissAll();
    this.newUser = {} as User;
  }

  updateUser() {
    const index = this.users.findIndex(u => u.id === this.editingUser.id);
    if (index !== -1) {
      this.users[index] = {...this.editingUser};
    }
    this.modalService.dismissAll();
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
