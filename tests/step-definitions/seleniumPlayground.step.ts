const { Given, When, Then } = require('@wdio/cucumber-framework');
import { clickDragAndDrop } from "../../main/pages/homePage/actions/homepage.action";
import { SlideTo95 } from "../../main/pages/sliderPage/actions/sliderpage.action";
import { verifyValue95 } from "../../main/pages/sliderPage/assertions/sliderpage.assertion";

Given("User is on the Selenium Playground page",async () => {
    await browser.url("https://www.lambdatest.com/selenium-playground/");
})
Then("User click 'Drag & Drop Sliders'",async()=>{
    await clickDragAndDrop();
})
When("User select the slider with the label 'Default value 15' and drag to 95",async()=>{
    await SlideTo95();
})
Then("Verify the range value should show 95",async()=>{
     await verifyValue95();
})