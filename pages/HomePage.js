import { Selector,t } from 'testcafe';

class HomePage{
    constructor() {
        this.subtitleHeader = Selector('h2').withText(
          'Welcome to our store'
        )
        this.RegisterLink = Selector('.ico-register')
        this.LoginLink = Selector('.ico-login')
        this.CartLink = Selector('a').withText('Shopping cart')
        this.MyAccountLink = Selector('a').withText('My account')
        this.LogoutLink = Selector('.ico-logout')
        this.currenyList = Selector("select#customerCurrency");
      }
      get productSearch() { 
        return Selector("input[id='small-searchterms']"); 
      } 

      async search(product) {
        await t.
        typeText(this.productSearch, product).
        wait(3000).
        pressKey('enter')
    }
    
      async changeCurrency(currency){
        await t
         .click("select[id='customerCurrency']")
         .click(Selector('option', { text: currency }));
    }
}
export default new HomePage();
