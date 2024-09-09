import UIKit from '@vue-ui-kit/ant';
export const setupKit = () => {
  UIKit.addRender('as',{
    renderDefault:(_renderOptions,{row,field})=>{
      return (<div class="text-red">
        {row[field!]}
      </div>)
    }
  })
}
