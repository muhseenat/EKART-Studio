/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Get_products } from 'app/sd-services/Get_products'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_kwKk3sOmwBCGXNMC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_kwKk3sOmwBCGXNMC(bh) {
    try {
      bh = this.getProductFromService(bh);
      //appendnew_next_sd_kwKk3sOmwBCGXNMC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kwKk3sOmwBCGXNMC');
    }
  }

  //appendnew_flow_homeComponent_start

  getProductFromService(bh) {
    try {
      const Get_productsInstance: Get_products =
        this.__page_injector__.get(Get_products);
      this.page.products_ = Get_productsInstance['products_'];
      bh = this.sd_Fnd7jMjfUEhY4Xla(bh);
      //appendnew_next_getProductFromService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_InzujZfU0pWvfuwk');
    }
  }

  sd_Fnd7jMjfUEhY4Xla(bh) {
    try {
      const page = this.page;
      console.log('oninnit of home', page.products_);
      //appendnew_next_sd_Fnd7jMjfUEhY4Xla
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fnd7jMjfUEhY4Xla');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_homeComponent_Catch
}
