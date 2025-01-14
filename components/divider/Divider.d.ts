/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://www.primefaces.org/primevue/divider)
 *
 * @module divider
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Divider component.
 */
export interface DividerProps {
    /**
     * Alignment of the content, options are 'left', 'center', 'right' for horizontal layout and 'top', 'center', 'bottom' for vertical.
     */
    align?: 'left' | 'center' | 'right' | 'top' | 'center' | 'bottom' | undefined;
    /**
     * Specifies the orientation, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    layout?: 'horizontal' | 'vertical' | undefined;
    /**
     * Border style type.
     * @defaultValue solid
     */
    type?: 'solid' | 'dashed' | 'dotted' | undefined;
}

/**
 * Defines valid slots in Divider slots.
 */
export interface DividerSlots {
    /**
     * Default content slot.
     */
    default(): VNode[];
}

export interface DividerEmits {}

/**
 * **PrimeVue - Divider**
 *
 * _Divider is used to separate contents._
 *
 * [Live Demo](https://www.primefaces.org/primevue/divider)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 * @group Component
 *
 */
declare class Divider extends ClassComponent<DividerProps, DividerSlots, DividerEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Divider: GlobalComponentConstructor<Divider>;
    }
}

export default Divider;
