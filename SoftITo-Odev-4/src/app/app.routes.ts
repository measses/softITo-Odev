import { Routes } from '@angular/router';
import { DoorAnimationComponent } from '../components/door-animation/door-animation.component';

import { CardComponent } from '../components/card/card.component';
import { MultiTextComponent } from '../components/multi-text/multi-text.component';
import { MexicanWaveComponent } from '../components/mexican-wave/mexican-wave.component';

export const routes: Routes = [
  {path:"door",component:DoorAnimationComponent},
  {path:"card",component:CardComponent},
  {path:"multi-text",component:MultiTextComponent},
  {path:"mexican",component:MexicanWaveComponent},



];
