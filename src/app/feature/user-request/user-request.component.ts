import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';
import { AdminassigenComponent } from '../adminassigen/adminassigen.component';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id: any
  noDataFound: boolean = false;
  role: any = '';
  done: any = [];
data:any=[]
  Status: any = 'active'
  inlineForm: any
  displayedColumns: any[] = ['fullname', 'username', 'id', 'Phonenumber', 'Role',  'action']
  allData: any = new MatTableDataSource([]);
  updatdataoneData: any = [] = []
  editingIndex: number = -1;
  editedData: any = {};
  droppedItem: any = [] = []
  userName: any = []
  filteradmin: any = []
  form:any
  constructor(public getdata: LoginPageService, public router: Router, public dialog: MatDialog, public message: LoginService, public activateroute: ActivatedRoute,public formBulider:FormBuilder) { }
  ngOnInit() {
    this.rolebase()
    this.loadData();
    this.form = this.formBulider.group({
      dropdown: [''],
   
    })

  }

  loadData() {
    this.getdata.get().subscribe(
      (data: any) => {
        debugger
        data.forEach((admin: any, index: Number) => {
          if (admin.Role === 'Superadmin') {
            data.splice(index, 1)
          }
        }
        )
        this.allData = new MatTableDataSource(data);

        console.log(this.filteradmin, 'hhh')
        console.log('this.alldata', this.allData.data)
        this.allData.paginator = this.paginator;
        this.allData.sort = this.sort;
      },
    );
    this.getdata.getuserdata().subscribe((data:any)=> {
      })
  }

  delete(index: number) {
    debugger
    const dataToDelete = this.allData.data[index];
    this.getdata.delete(dataToDelete.id).subscribe(
      () => {
        this.allData.data.splice(index, 1);
        this.allData = new MatTableDataSource([...this.allData.data])
        this.allData.paginator = this.paginator;

      },
    );
    this.message.showSuccess('User deleted Successfull')
  }
  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  }

  confirmStatus(id:any) {
    const alluserdata = this.allData.data[id];
if(alluserdata.Role=='user'){
  let dialogRef = this.dialog.open(AdminassigenComponent, {
    width: '200px',
    height: '200px',
    data: {
      id: alluserdata.id,
    },
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      const dataIndex = this.allData.data.findIndex((item: any) => item.id === alluserdata.id);
      if (dataIndex !== -1) {
        this.allData.data.splice(dataIndex, 1);
        this.allData = new MatTableDataSource([...this.allData.data]);
      }
    }
  });
}

  else{
    debugger
    let data: any = {
      Status: this.Status
      
    }
    this.getdata.patchdata(alluserdata.id, data).subscribe((data: any) => {
      const dataIndex = this.allData.data.findIndex((item: any) => item.id === alluserdata.id);
      if (dataIndex !== -1) {
        this.allData.data.splice(dataIndex, 1);
        this.allData = new MatTableDataSource([...this.allData.data]);
      }
    })
  

  }
  
  }

  addnewUser() {
    this.router.navigate(['/add'])
  }

  saveEdit(index: number) {
    this.allData.data[index] = { ...this.editedData };
    this.getdata.patchdata(this.allData.data[index].id, this.editedData).subscribe(
      (data: any) => {
        this.allData = new MatTableDataSource(this.allData.data)
        this.allData.paginator = this.paginator;
        console.log('Data updated successfully:', data);
        this.message.showSuccess('User data updated successfully');
      },
    );
    this.editingIndex = -1;
  }

  cancel(index: any) {
    debugger
    this.editingIndex = -1;

  }


  rolebase() {
    let user = sessionStorage.getItem('token')
    this.getdata.getdatabyId(user).subscribe((data: any) => {
      this.role = data.Role
      if (data.Role === 'Superadmin') {
        this.displayedColumns.splice(5, 0, 'Status')
      }

    }



    )

  }
  applyFilter(event: any) {
    debugger
    const filterValue: any = (event.target as HTMLInputElement).value;
    this.allData.filter = filterValue.trim().toLowerCase().toLocaleUpperCase();

  }
  ngAfterViewInit() {

    this.allData.paginator = this.paginator;

  }

  isStatusActive = false;

  status(id: any) {
debugger
     this.isStatusActive = !this.isStatusActive;

    let data: any = {
      Status: this.form.value.dropdown
      
    }
    this.getdata.patchdata(id, data).subscribe((data: any) => {
      this.allData = new MatTableDataSource(this.allData.data)
      console.log(data)
    }

    )
  }


  // Status:any = 'active';
	onSelected(value:string,id:any){
    debugger
		this.Status = value;
    let data: any = {
      Status: this.Status
      
    }
    this.getdata.patchdata(id, data).subscribe((data: any) => {
      this.allData = new MatTableDataSource(this.allData.data)
      console.log(data)
    }

    )


    
	}
}
