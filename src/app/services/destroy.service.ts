import {Subject} from "rxjs";
import {Injectable, OnDestroy} from "@angular/core";
import * as data from "@angular/core";

@Injectable()
export declare class DestroyService extends Subject<void> implements OnDestroy {
  ngOnDestroy(): void;
  // static ɵfac: data.ɵɵFactoryDeclaration<DestroyService, never>;
  // static ɵprov: data.ɵɵInjectableDeclaration<DestroyService>;
}
