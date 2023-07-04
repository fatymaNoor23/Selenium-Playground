import assert from 'soft-assert'
import { slider15Value } from "../user_interface/sliderpage.ui";

export async function verifyValue95() {
    const value = await slider15Value.getValue();
   expect(value).toEqual("95");
  }
  /*
  export async function verifyLoginBtnDisplay() {
  await assert.softAssert(await bookStorePage.loginButton.isDisplayed(), true,"error",[]);
  await assert.softAssertAll();
}
*/
  