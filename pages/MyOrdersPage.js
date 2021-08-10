import { Selector } from 'testcafe';

class MyOrdersPage{
    constructor() {
        this.orderslink = Selector('a').withText('Orders')
    }
}
export default new MyOrdersPage();
