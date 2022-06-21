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
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class Get_products {
  public products_: any;

  constructor(
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

  //   service flows_Get_products

  async get_products(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          products_: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getProducts(bh);
      //appendnew_next_get_products
      return (
        // formatting output variables
        {
          input: {},
          local: {
            products_: bh.local.products_,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GMTOuVLP8L8USrMq');
    }
  }

  //appendnew_flow_Get_products_start

  async getProducts(bh) {
    try {
      let requestOptions = {
        url: bh.system.environment.properties.GET_PRODUCTS,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_U7anaLdcYVqlwwAF(bh);
      //appendnew_next_getProducts
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LDGPp8vqyaWC56Iz');
    }
  }

  async sd_U7anaLdcYVqlwwAF(bh) {
    try {
      this.products_ = bh.local.res.products;
      bh = await this.sd_OeqPwOVoicYVs4Hn(bh);
      //appendnew_next_sd_U7anaLdcYVqlwwAF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U7anaLdcYVqlwwAF');
    }
  }

  async sd_OeqPwOVoicYVs4Hn(bh) {
    try {
      console.log('this is working 1', this.products_);
      //appendnew_next_sd_OeqPwOVoicYVs4Hn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OeqPwOVoicYVs4Hn');
    }
  }

  async sd_OXUTAmbmgjfYkkfA(bh) {
    try {
      this.matSnackBar.open('error.message', 'Close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_OXUTAmbmgjfYkkfA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OXUTAmbmgjfYkkfA');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_Z4blZYy2LZ51VeRU(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_Z4blZYy2LZ51VeRU(bh) {
    const nodes = ['sd_GMTOuVLP8L8USrMq', 'sd_LDGPp8vqyaWC56Iz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_OXUTAmbmgjfYkkfA(bh);
      //appendnew_next_sd_Z4blZYy2LZ51VeRU
      return true;
    }
    return false;
  }
  //appendnew_flow_Get_products_Catch
}
