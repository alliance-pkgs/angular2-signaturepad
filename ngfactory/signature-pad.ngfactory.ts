/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../signature-pad';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
var renderType_SignaturePad_Host:import0.RenderComponentType = (null as any);
class _View_SignaturePad_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SignaturePad_0_4:import3.SignaturePad;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SignaturePad_Host0,renderType_SignaturePad_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('signature-pad',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SignaturePad0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SignaturePad_0_4 = new import3.SignaturePad(new import8.ElementRef(this._el_0));
    this._appEl_0.initComponent(this._SignaturePad_0_4,[],compView_0);
    compView_0.create(this._SignaturePad_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SignaturePad) && (0 === requestNodeIndex))) { return this._SignaturePad_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._SignaturePad_0_4.ngAfterContentInit(); } }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SignaturePad_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SignaturePad_Host === (null as any))) { (renderType_SignaturePad_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_SignaturePad_Host0(viewUtils,parentInjector,declarationEl);
}
export const SignaturePadNgFactory:import10.ComponentFactory<import3.SignaturePad> = new import10.ComponentFactory<import3.SignaturePad>('signature-pad',viewFactory_SignaturePad_Host0,import3.SignaturePad);
const styles_SignaturePad:any[] = [];
var renderType_SignaturePad:import0.RenderComponentType = (null as any);
class _View_SignaturePad0 extends import1.AppView<import3.SignaturePad> {
  _el_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SignaturePad0,renderType_SignaturePad,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'canvas',(null as any));
    this.init([],[this._el_0],[],[]);
    return (null as any);
  }
}
export function viewFactory_SignaturePad0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SignaturePad> {
  if ((renderType_SignaturePad === (null as any))) { (renderType_SignaturePad = viewUtils.createRenderComponentType('/Users/dimasyudha/Projects/office/CV/alliance/aop-mobile-app/AllianceBankDoc/third_party_cordova/angular2-signaturepad-v3/signature-pad.ts class SignaturePad - inline template',0,import9.ViewEncapsulation.None,styles_SignaturePad,{})); }
  return new _View_SignaturePad0(viewUtils,parentInjector,declarationEl);
}