import { Routes } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { FriendComponent } from './friend/friend.component';
import { ProfileComponent } from './profile/profile.component';
import { StatusComponent } from './status/status.component';


export const routes: Routes = [
  {
  path:'',
  redirectTo:'hello-word',
  pathMatch:'full',
  },
  {
    path: 'friend',
    component:FriendComponent,
  },
  {
    path: 'status',
    component:StatusComponent,
  },
  {
    path: 'profile',
    component:ProfileComponent,
  },
  {
    path: 'hello-world',
    component:HelloWordComponent,
  }

];
