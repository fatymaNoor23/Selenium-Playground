import { slider15Input } from "../user_interface/sliderpage.ui";

export async function SlideTo95(){
    const slider = slider15Input;
    const sliderWidth = await slider.getSize('width');

    const startValue = 15;
    const startPosition = Math.round((startValue - 1) / 99 * sliderWidth);
    const targetValue = 215;
    const targetPosition = Math.round((targetValue - 1) / 99 * sliderWidth);
    
    await slider.click({ x: targetValue, y: 0 });
    

    browser.pause(30000)
}
