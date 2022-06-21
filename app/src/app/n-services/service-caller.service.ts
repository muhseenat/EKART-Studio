//append_imports_start

import * as sd_ZzX2uvmpZMRcRxku from 'app/sd-services/Get_products'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_ZzX2uvmpZMRcRxku: sd_ZzX2uvmpZMRcRxku.Get_products) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
