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
//append_imports_end

@Component({
  selector: 'bh-product_list',
  templateUrl: './product_list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class product_listComponent {
  @Input('title')
  public title: any = undefined;
  @Input('products')
  public products: any = undefined;
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
      this.sd_K2Btkmnno9EEuIDH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_K2Btkmnno9EEuIDH(bh) {
    try {
      bh = this.sd_rWhJ7Udp9Gu7RJBe(bh);
      //appendnew_next_sd_K2Btkmnno9EEuIDH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K2Btkmnno9EEuIDH');
    }
  }

  //appendnew_flow_product_listComponent_start

  sd_rWhJ7Udp9Gu7RJBe(bh) {
    try {
      this.page.product = undefined;
      this.page.title = undefined;
      //appendnew_next_sd_rWhJ7Udp9Gu7RJBe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWhJ7Udp9Gu7RJBe');
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
  //appendnew_flow_product_listComponent_Catch
}
