import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Plugin } from '@egjs/flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import { FlickingOptions, NgxFlickingComponent } from "@egjs/ngx-flicking";
import { ResponsiveService } from '../../services/responsive/responsive-service';
import { ServiceData } from '../../services/service-data/service-data.service';

export interface AfterBeforeItem {
  image: string;
}

export enum AfterBeforeEnum {
  after = 'Depois',
  before = 'Antes',
}

@Component({
  selector: 'app-after-and-before',
  imports: [NgxFlickingComponent],
  templateUrl: './after-and-before.html',
  styleUrl: './after-and-before.scss',
})
export class AfterAndBefore {
  private readonly service = inject(ServiceData);
  readonly isMobile = inject(ResponsiveService);

  readonly flickingOptions: Partial<FlickingOptions> = {
    moveType: 'snap',
    circular: false,
    defaultIndex: 1,
    align: 'prev',
  };

  readonly flickingPlugins: Plugin[] = [new AutoPlay()];
  
  afterBeforeEnum: typeof AfterBeforeEnum = AfterBeforeEnum;

  afterBeforeItems = toSignal(this.service.getAfterBeforeItems(), {
    initialValue: [] as AfterBeforeItem[],
  });
}
