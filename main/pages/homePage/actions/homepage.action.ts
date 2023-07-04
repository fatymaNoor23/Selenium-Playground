import { dragAndDrop } from "../user_interface/homepage.ui";


/*export async function clickBooksWidget() {
    const booksClick=await booksWidget;
    await booksClick.waitForClickable();
    await booksClick.waitForDisplayed();
    await booksClick.click();
}
*/
export async function clickDragAndDrop(){
    await dragAndDrop.waitForDisplayed();
  await dragAndDrop.waitForClickable();
    await dragAndDrop.click();
}