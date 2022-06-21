/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import * as sd_ZzX2uvmpZMRcRxku from '../sd-services/Get_products'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private sd_ZzX2uvmpZMRcRxku: sd_ZzX2uvmpZMRcRxku.Get_products,
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_ProductService

  async resolve(navigationRoute, navigationRouteState) {
    try {
      var bh: any = this.sdService.__constructDefault({
        navigationRoute,
        navigationRouteState,
        local: { products_: [] },
      });
      bh = await this.callResolver(bh);
      //appendnew_next_resolve
      return { products_: bh.local.products_ };
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WNTUQgVxFbjZ7TTQ');
    }
  }

  //appendnew_flow_ProductService_start

  async callResolver(bh) {
    try {
      let outputVariables = await this.sd_ZzX2uvmpZMRcRxku.get_products();

      //appendnew_next_callResolver
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pi3vZ9ND1djDVvKY');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_ProductService_Catch
}
