import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddunitService } from '../../addunit.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adunit: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AddunitService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             unit_name: ['', Validators.required ],
              unit_price: ['', Validators.required ]
         });
      }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res;
      });
    });
  }

  updateAdUnit(unit_name, unit_price) {
    this.route.params.subscribe(params => {
       this.adunitservice.updateAdUnit(unit_name, unit_price, params['id'])
       .subscribe(res => {
        this.router.navigate(['index']);
       });
    });
  }
}
