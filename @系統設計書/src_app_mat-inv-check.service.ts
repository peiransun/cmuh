import { MatPendingInvReq, MatInvInfo } from './viewModel';

import '@cmuh/extensions';

export class MatInvCheck {

 

  constructor() {
     
  }

  public setDefault(x) {
 
      x.checkTimeStr = x.checkTime.toLocaleString();
      x.delayDay = x.isDelay ? new Date(x.checkTime).diffDays(new Date(x.deliveryTime)) : 0;
      x.overdueAmount = x.isDelay ? Math.round(x.demandQty * x.costPrice * 0.02 * x.delayDay) : 0;
      x.differencePrice = x.costPrice - x.newPrice == 0 ? 0 : Math.round((x.costPrice - x.newPrice) * x.checkQty) + x.adjustAmount - x.overdueAmount;
      x.discountAmount = x.discountAmount ? x.discountAmount : 0;
      x.displayNo = x.displayNo ? x.displayNo : 0;
      x.invoiceAmount = x.invoiceAmount ? x.invoiceAmount : 0;
      x.invoiceStatus = null;
      x.isChecked = x.checkStatus == 40;
      x.isDonated = x.checkType == 20 ? '是' : '否';
      x.itemType = 20;
      x.payDateStr = x.payDate.toLocaleString();
      x.realPayAmount = Math.round(x.costPrice * x.checkQty);
      x.requestAmount = x.invoiceAmount - x.discountAmount;
      x.differenceAmount = x.payAmount - x.requestAmount;
    }
  }

}
