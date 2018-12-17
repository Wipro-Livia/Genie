import { NgModule } from '@angular/core';
import { MatButtonModule, MatSelectModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
      imports: [MatButtonModule, MatFormFieldModule, MatSelectModule
    ],
    exports: [MatButtonModule, MatFormFieldModule, MatSelectModule 
      ],
  })

  export class MaterialModule{

  }