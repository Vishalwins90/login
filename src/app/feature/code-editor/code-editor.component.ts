import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { LoginPageService } from 'src/app/core/login-page.service';

export class UploadAdapter {
  private loader;
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
          resolve({ default: myReader.result });
        }

        myReader.readAsDataURL(file);
      }));
  };
}

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements AfterViewInit{
  form: any;
   Editor = ClassicEditor;
  public editorData: string = ''
  // data: any ='';
  editorInstance: any;

  constructor(public FormBuilder: FormBuilder, public userServices: LoginPageService) {

  }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      Title: [''],
      Description: [''],
      AddRewiew: [''],
      startdate: [''],
      Enddate: [''],
      Comment:['']
    });
    
  }


  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log('loader : ', loader)
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }


  SubmitTest() {
    debugger
    let userid = sessionStorage.getItem('token')

    let userdetails = {
      Title: this.form.value.Title,
      Description: this.form.value.Description,
      AddRewiew: this.form.value.AddRewiew,
      Startdate: this.form.value.startdate,
      Endate:this.form.value.Enddate,
     Comment: this.form.value.Comment, 
  
    }
      
       this.userServices.Senduserdata(userdetails).subscribe((data:any)=>{
console.log(data)
       })
  }

  ngAfterViewInit() {
 
  
}
}