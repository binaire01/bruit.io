/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  BruitIoConfig,
} from './models/bruit-io-config.class';
import {
  BrtConfig,
  BrtCoreConfig,
  BrtData,
} from '@bruit/types';


export namespace Components {

  interface BruitCore {
    'config': BrtCoreConfig | string;
    /**
    * called on click on component init a feedback, wait user submit, send feedback
    */
    'newFeedbackWithModal': (bruitIoConfig: BruitIoConfig, data?: BrtData[], dataFn?: () => BrtData[] | Promise<BrtData[]>) => Promise<void>;
  }
  interface BruitCoreAttributes extends StencilHTMLAttributes {
    'config'?: BrtCoreConfig | string;
    /**
    * emit bruit-error on internal error or config error ex : BruitIo.addEventListener('onError',error=>...)
    */
    'onOnError'?: (event: CustomEvent) => void;
  }

  interface BruitIo {
    'config': BrtConfig | string;
    /**
    * field array to add in feedback
    */
    'data': Array<BrtData>;
    /**
    * FN or PROMISE return field array to add in feedback
    */
    'dataFn': () => Array<BrtData> | Promise<Array<BrtData>>;
    'start': (brtCoreConfig: BrtCoreConfig) => void;
  }
  interface BruitIoAttributes extends StencilHTMLAttributes {
    'config'?: BrtConfig | string;
    /**
    * field array to add in feedback
    */
    'data'?: Array<BrtData>;
    /**
    * FN or PROMISE return field array to add in feedback
    */
    'dataFn'?: () => Array<BrtData> | Promise<Array<BrtData>>;
    /**
    * emit bruit-error on internal error or config error ex : BruitIo.addEventListener('onError',error=>...)
    */
    'onOnError'?: (event: CustomEvent) => void;
    'onOnReady'?: (event: CustomEvent) => void;
  }

  interface BruitRating {
    'color': string;
    'max': number;
    'offColor': string;
    'value': number;
  }
  interface BruitRatingAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'max'?: number;
    'offColor'?: string;
    'onValueChange'?: (event: CustomEvent) => void;
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'BruitCore': Components.BruitCore;
    'BruitIo': Components.BruitIo;
    'BruitRating': Components.BruitRating;
  }

  interface StencilIntrinsicElements {
    'bruit-core': Components.BruitCoreAttributes;
    'bruit-io': Components.BruitIoAttributes;
    'bruit-rating': Components.BruitRatingAttributes;
  }


  interface HTMLBruitCoreElement extends Components.BruitCore, HTMLStencilElement {}
  var HTMLBruitCoreElement: {
    prototype: HTMLBruitCoreElement;
    new (): HTMLBruitCoreElement;
  };

  interface HTMLBruitIoElement extends Components.BruitIo, HTMLStencilElement {}
  var HTMLBruitIoElement: {
    prototype: HTMLBruitIoElement;
    new (): HTMLBruitIoElement;
  };

  interface HTMLBruitRatingElement extends Components.BruitRating, HTMLStencilElement {}
  var HTMLBruitRatingElement: {
    prototype: HTMLBruitRatingElement;
    new (): HTMLBruitRatingElement;
  };

  interface HTMLElementTagNameMap {
    'bruit-core': HTMLBruitCoreElement
    'bruit-io': HTMLBruitIoElement
    'bruit-rating': HTMLBruitRatingElement
  }

  interface ElementTagNameMap {
    'bruit-core': HTMLBruitCoreElement;
    'bruit-io': HTMLBruitIoElement;
    'bruit-rating': HTMLBruitRatingElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
