// jIMU (WAB) imports:
/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget (yet!)
// declareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from './support/declareDecorator';

// esri imports:
import EsriMap from 'esri/map';

// dojo imports:
// import * as on from 'dojo/on';

interface IConfig {
  serviceUrl: string;
}
interface IWidget {
  baseClass: string;
  config?: IConfig;
}

@declare(BaseWidget)
class Widget implements IWidget {
  public baseClass: string = 'my-widget';
  public config: IConfig;

  private map: EsriMap;

  private postCreate(args: any): void {
    const self: any = this;
    self.inherited(arguments);
    console.log('MyWidget::postCreate');
  }
  // private startup(): void {
  //   let self: any = this;
  //   self.inherited(arguments);
  //   console.log('MyWidget::startup');
  // };
  // private onOpen(): void {
  //   console.log('MyWidget::onOpen');
  // };
  // private onClose(): void {
  //   console.log('MyWidget::onClose');
  // };
  // private onMinimize(): void {
  //   console.log('MyWidget::onMinimize');
  // };
  // private onMaximize(): void {
  //   console.log('MyWidget::onMaximize');
  // };
  // private onSignIn(credential): void {
  //   console.log('MyWidget::onSignIn', credential);
  // };
  // private onSignOut(): void {
  //   console.log('MyWidget::onSignOut');
  // };
  // private onPositionChange(): void {
  //   console.log('MyWidget::onPositionChange');
  // };
  // private resize(): void {
  //   console.log('MyWidget::resize');
  // };
}

export = Widget;
