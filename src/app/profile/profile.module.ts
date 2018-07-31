import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import {QrcodeWriterComponent} from '../qrcode-writer/qrcode-writer.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileMyComponent} from './profile-my/profile-my.component';
import {OnsenModule} from 'ngx-onsenui';


@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent, ProfileMyComponent, QrcodeWriterComponent],
    imports: [CommonModule, ProfileRouting],
    exports: [ProfileRouting],
    providers: [OnsenModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
