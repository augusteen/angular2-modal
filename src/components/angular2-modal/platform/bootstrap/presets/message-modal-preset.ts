import {FluentAssignMethod, privateKey} from '../../../framework/fluent-assign';
import {BSMessageModalButtonConfig, BSMessageModalButtonHandler} from '../message-modal';
import {ModalAwarePresetBuilder, ModalAwarePreset} from './modal-aware-preset';
import {BSMessageModal} from '../message-modal';
import {extend, arrayUnion} from '../../../framework/utils';


const DEFAULT_VALUES = {
    component: BSMessageModal,
    headerClass: 'modal-header',
    bodyClass: 'modal-body',
    footerClass: 'modal-footer'
};

const DEFAULT_SETTERS = [
    'headerClass',
    'title',
    'titleHtml',
    'body',
    'bodyClass',
    'footerClass'
];


/**
 * Data definition
 */
export interface MessageModalPreset extends ModalAwarePreset {

    /**
     * A Class for the header (title) container.
     * Default: modal-header
     */
    headerClass: string;

    /**
     * Caption for the title, enclosed in a H3 container.
     */
    title: string;

    /**
     * HTML for the title, if set overrides title property.
     * The HTML is wrapped in a DIV element, inside the header container.
     * Example:
     <div class="modal-header">
     <div> HTML CONTENT INSERTED HERE </div>
     </div>
     * Note: HTML is not compiled.
     */
    titleHtml: string;

    /**
     * The body of the message.
     * Can be either text or HTML.
     * Note: HTML is not compiled.
     */
    body: string;

    /**
     * A Class for the body container.
     * Default: modal-body
     */
    bodyClass: string;

    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    footerClass: string;

    buttons: BSMessageModalButtonConfig[];
}

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export abstract class MessageModalPresetBuilder<T extends MessageModalPreset>
                                                                extends ModalAwarePresetBuilder<T> {

    constructor(
        defaultValues: T = undefined,
        initialSetters: string[] = undefined,
        baseType: new () => T = undefined
    ) {
        super(
            extend<any>(extend({buttons: []}, DEFAULT_VALUES), defaultValues || {}),
            arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
            baseType
        );
    }

    /**
     * A Class for the header (title) container.
     * Default: modal-header
     */
    headerClass: FluentAssignMethod<string, this>;

    /**
     * Caption for the title, enclosed in a H3 container.
     */
    title: FluentAssignMethod<string, this>;

    /**
     * HTML for the title, if set overrides title property.
     * The HTML is wrapped in a DIV element, inside the header container.
     * Example:
     <div class="modal-header">
     <div> HTML CONTENT INSERTED HERE </div>
     </div>
     * Note: HTML is not compiled.
     */
    titleHtml: FluentAssignMethod<string, this>;

    /**
     * The body of the message.
     * Can be either text or HTML.
     * Note: HTML is not compiled.
     */
    body: FluentAssignMethod<string, this>;

    /**
     * A Class for the body container.
     * Default: modal-body
     */
    bodyClass: FluentAssignMethod<string, this>;

    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    footerClass: FluentAssignMethod<string, this>;
    
    addButton(css: string, caption: string, onClick: BSMessageModalButtonHandler): this {
        let btn = {
            cssClass: css,
            caption: caption,
            onClick: onClick
        };

        let key = privateKey('buttons');
        (this[key] as BSMessageModalButtonConfig[]).push(btn);
        
        return this;
    }
}
