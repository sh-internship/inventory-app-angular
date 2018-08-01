import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import {QrcodeWriterComponent} from '../qrcode-writer/qrcode-writer.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileMyComponent} from './profile-my/profile-my.component';
import {OnsenModule} from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileService } from './profile.service';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent, ProfileMyComponent, QrcodeWriterComponent],
    imports: [CommonModule, ProfileRouting],
    exports: [ProfileRouting],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    providers: [OnsenModule],
    providers: [ProfileService],
})
export class ProfileModule { }
