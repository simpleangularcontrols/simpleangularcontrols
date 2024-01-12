'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Bootstrap 3 Angular Controls</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/SACBootstrap3ButtonModule.html" data-type="entity-link" >SACBootstrap3ButtonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3CheckboxModule.html" data-type="entity-link" >SACBootstrap3CheckboxModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3ConfirmModule.html" data-type="entity-link" >SACBootstrap3ConfirmModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3DateTimeModule.html" data-type="entity-link" >SACBootstrap3DateTimeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3DialogModule.html" data-type="entity-link" >SACBootstrap3DialogModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3FormModule.html" data-type="entity-link" >SACBootstrap3FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap3FormModule-3856591a7d638783bb6aa0b9ac6b33e3525f29626d3c7b5d82ed3438e7870be4572a9686eb195a984275d13388b1a340840a950aa86d9727408f7be428cc4604"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap3FormModule-3856591a7d638783bb6aa0b9ac6b33e3525f29626d3c7b5d82ed3438e7870be4572a9686eb195a984275d13388b1a340840a950aa86d9727408f7be428cc4604"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap3FormModule-3856591a7d638783bb6aa0b9ac6b33e3525f29626d3c7b5d82ed3438e7870be4572a9686eb195a984275d13388b1a340840a950aa86d9727408f7be428cc4604"' :
                                        'id="xs-directives-links-module-SACBootstrap3FormModule-3856591a7d638783bb6aa0b9ac6b33e3525f29626d3c7b5d82ed3438e7870be4572a9686eb195a984275d13388b1a340840a950aa86d9727408f7be428cc4604"' }>
                                        <li class="link">
                                            <a href="directives/SacFormDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacFormDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SacInheritFormDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInheritFormDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3GridModule.html" data-type="entity-link" >SACBootstrap3GridModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3InputModule.html" data-type="entity-link" >SACBootstrap3InputModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3LayoutModule.html" data-type="entity-link" >SACBootstrap3LayoutModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' :
                                        'id="xs-directives-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' }>
                                        <li class="link">
                                            <a href="directives/SacFormLayoutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacFormLayoutDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' : 'data-bs-target="#xs-pipes-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' :
                                            'id="xs-pipes-links-module-SACBootstrap3LayoutModule-2225c6045d7d8dc4935ebdec8c67c93c1e8b5a83c2f40afc103059e58bfe4dc5ff88fb80e6687f3da614710f528fe20e27a9622451403c0165eb33f9522e662f"' }>
                                            <li class="link">
                                                <a href="pipes/SacToControlWidthCssPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacToControlWidthCssPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SacToLabelWidthCssPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacToLabelWidthCssPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3ListModule.html" data-type="entity-link" >SACBootstrap3ListModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap3ListModule-1e72ac0f88c5c66b7aca01b5a3bcc19678be5d998b31f325a5904a09654ba603206caa023a31a9166c39b741bb6c3026333765447e5d80738b68df4b568d843c"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap3ListModule-1e72ac0f88c5c66b7aca01b5a3bcc19678be5d998b31f325a5904a09654ba603206caa023a31a9166c39b741bb6c3026333765447e5d80738b68df4b568d843c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap3ListModule-1e72ac0f88c5c66b7aca01b5a3bcc19678be5d998b31f325a5904a09654ba603206caa023a31a9166c39b741bb6c3026333765447e5d80738b68df4b568d843c"' :
                                        'id="xs-directives-links-module-SACBootstrap3ListModule-1e72ac0f88c5c66b7aca01b5a3bcc19678be5d998b31f325a5904a09654ba603206caa023a31a9166c39b741bb6c3026333765447e5d80738b68df4b568d843c"' }>
                                        <li class="link">
                                            <a href="directives/SacDropdownOptionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDropdownOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3StaticLabelModule.html" data-type="entity-link" >SACBootstrap3StaticLabelModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3TabsModule.html" data-type="entity-link" >SACBootstrap3TabsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3TinyMceModule.html" data-type="entity-link" >SACBootstrap3TinyMceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3TooltipModule.html" data-type="entity-link" >SACBootstrap3TooltipModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3TtreeviewModule.html" data-type="entity-link" >SACBootstrap3TtreeviewModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3UploadModule.html" data-type="entity-link" >SACBootstrap3UploadModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3ValidationSummaryModule.html" data-type="entity-link" >SACBootstrap3ValidationSummaryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3WizardModule.html" data-type="entity-link" >SACBootstrap3WizardModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SacButtonComponent.html" data-type="entity-link" >SacButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacCheckboxComponent.html" data-type="entity-link" >SacCheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacConfirmComponent.html" data-type="entity-link" >SacConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDateComponent.html" data-type="entity-link" >SacDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDateSelectorComponent.html" data-type="entity-link" >SacDateSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDateTimeComponent.html" data-type="entity-link" >SacDateTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDialogComponent.html" data-type="entity-link" >SacDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDropdownComponent.html" data-type="entity-link" >SacDropdownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridButtonComponent.html" data-type="entity-link" >SacGridButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridColumnActionComponent.html" data-type="entity-link" >SacGridColumnActionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridColumnComponent.html" data-type="entity-link" >SacGridColumnComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridComponent.html" data-type="entity-link" >SacGridComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridImageComponent.html" data-type="entity-link" >SacGridImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputAreaComponent.html" data-type="entity-link" >SacInputAreaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputComponent.html" data-type="entity-link" >SacInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputCurrencyComponent.html" data-type="entity-link" >SacInputCurrencyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputDecimalComponent.html" data-type="entity-link" >SacInputDecimalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputEmailComponent.html" data-type="entity-link" >SacInputEmailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputIntegerComponent.html" data-type="entity-link" >SacInputIntegerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputPasswordComponent.html" data-type="entity-link" >SacInputPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputSearchComponent.html" data-type="entity-link" >SacInputSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacListboxComponent.html" data-type="entity-link" >SacListboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacPagingComponent.html" data-type="entity-link" >SacPagingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacRadiobuttonComponent.html" data-type="entity-link" >SacRadiobuttonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacRadiobuttonsComponent.html" data-type="entity-link" >SacRadiobuttonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacStaticFormContainerComponent.html" data-type="entity-link" >SacStaticFormContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacStaticLabelComponent.html" data-type="entity-link" >SacStaticLabelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTabComponent.html" data-type="entity-link" >SacTabComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTabItemComponent.html" data-type="entity-link" >SacTabItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTimeComponent.html" data-type="entity-link" >SacTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTinyMceComponent.html" data-type="entity-link" >SacTinyMceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTooltipComponent.html" data-type="entity-link" >SacTooltipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTreeItemActionComponent.html" data-type="entity-link" >SacTreeItemActionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTreeViewChildComponent.html" data-type="entity-link" >SacTreeViewChildComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTreeViewComponent.html" data-type="entity-link" >SacTreeViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacUploadComponent.html" data-type="entity-link" >SacUploadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacUploadMultipleComponent.html" data-type="entity-link" >SacUploadMultipleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacValidationSummaryComponent.html" data-type="entity-link" >SacValidationSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacWizardComponent.html" data-type="entity-link" >SacWizardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacWizardItemComponent.html" data-type="entity-link" >SacWizardItemComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/SacBaseDateTimeControl.html" data-type="entity-link" >SacBaseDateTimeControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacBaseListControl.html" data-type="entity-link" >SacBaseListControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacBaseModelControl.html" data-type="entity-link" >SacBaseModelControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacBaseSelectControl.html" data-type="entity-link" >SacBaseSelectControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacButtonCommon.html" data-type="entity-link" >SacButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacCheckboxCommon.html" data-type="entity-link" >SacCheckboxCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacConfirmCommon.html" data-type="entity-link" >SacConfirmCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuAnchorCommon.html" data-type="entity-link" >SacContextmenuAnchorCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuCommon.html" data-type="entity-link" >SacContextmenuCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextMenuContrainerCommon.html" data-type="entity-link" >SacContextMenuContrainerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuItemButtonCommon.html" data-type="entity-link" >SacContextmenuItemButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuItemCommon.html" data-type="entity-link" >SacContextmenuItemCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDateCommon.html" data-type="entity-link" >SacDateCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDateSelectorCommon.html" data-type="entity-link" >SacDateSelectorCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDateTimeCommon.html" data-type="entity-link" >SacDateTimeCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDialogCommon.html" data-type="entity-link" >SacDialogCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropdownCommon.html" data-type="entity-link" >SacDropdownCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropdownOptionCommon.html" data-type="entity-link" >SacDropdownOptionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropdownOptionDirective.html" data-type="entity-link" >SacDropdownOptionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropzoneMultipleCommon.html" data-type="entity-link" >SacDropzoneMultipleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropzoneSingleCommon.html" data-type="entity-link" >SacDropzoneSingleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFileBrowserCommon.html" data-type="entity-link" >SacFileBrowserCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormCommon.html" data-type="entity-link" >SacFormCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormDirective.html" data-type="entity-link" >SacFormDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormLayoutCommon.html" data-type="entity-link" >SacFormLayoutCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormLayoutDirective.html" data-type="entity-link" >SacFormLayoutDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridButtonCommon.html" data-type="entity-link" >SacGridButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridColumnActionCommon.html" data-type="entity-link" >SacGridColumnActionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridColumnBaseCommon.html" data-type="entity-link" >SacGridColumnBaseCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridColumnCommon.html" data-type="entity-link" >SacGridColumnCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridCommon.html" data-type="entity-link" >SacGridCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridImageCommon.html" data-type="entity-link" >SacGridImageCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInheritFormDirective.html" data-type="entity-link" >SacInheritFormDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputAreaCommon.html" data-type="entity-link" >SacInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputBase.html" data-type="entity-link" >SacInputBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputCommon.html" data-type="entity-link" >SacInputCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputCurrencyCommon.html" data-type="entity-link" >SacInputCurrencyCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputDecimalCommon.html" data-type="entity-link" >SacInputDecimalCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputEmailCommon.html" data-type="entity-link" >SacInputEmailCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputIntegerCommon.html" data-type="entity-link" >SacInputIntegerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputPasswordCommon.html" data-type="entity-link" >SacInputPasswordCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputSearchCommon.html" data-type="entity-link" >SacInputSearchCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacListboxCommon.html" data-type="entity-link" >SacListboxCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacListboxOptionCommon.html" data-type="entity-link" >SacListboxOptionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguageInputAreaCommon.html" data-type="entity-link" >SacMultilanguageInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguageInputCommon.html" data-type="entity-link" >SacMultilanguageInputCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacPagingCommon.html" data-type="entity-link" >SacPagingCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacRadiobuttonCommon.html" data-type="entity-link" >SacRadiobuttonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacRadiobuttonsCommon.html" data-type="entity-link" >SacRadiobuttonsCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacStaticFormContainerCommon.html" data-type="entity-link" >SacStaticFormContainerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacStaticLabelCommon.html" data-type="entity-link" >SacStaticLabelCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTabCommon.html" data-type="entity-link" >SacTabCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTabItemCommon.html" data-type="entity-link" >SacTabItemCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTimeCommon.html" data-type="entity-link" >SacTimeCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTinyMceCommon.html" data-type="entity-link" >SacTinyMceCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTooltipCommon.html" data-type="entity-link" >SacTooltipCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTreeItemActionCommon.html" data-type="entity-link" >SacTreeItemActionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTreeViewChildCommon.html" data-type="entity-link" >SacTreeViewChildCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTreeViewCommon.html" data-type="entity-link" >SacTreeViewCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacUploadBase.html" data-type="entity-link" >SacUploadBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacUploadMultipleCommon.html" data-type="entity-link" >SacUploadMultipleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacUploadSingleCommon.html" data-type="entity-link" >SacUploadSingleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacValidationSummaryCommon.html" data-type="entity-link" >SacValidationSummaryCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacWizardCommon.html" data-type="entity-link" >SacWizardCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacWizardItemCommon.html" data-type="entity-link" >SacWizardItemCommon</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BrowserFileDeleteRequest.html" data-type="entity-link" >BrowserFileDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserFileRenameRequest.html" data-type="entity-link" >BrowserFileRenameRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserFileSaveRequest.html" data-type="entity-link" >BrowserFileSaveRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeDeleteRequest.html" data-type="entity-link" >BrowserNodeDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeNewRequest.html" data-type="entity-link" >BrowserNodeNewRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeRenameRequest.html" data-type="entity-link" >BrowserNodeRenameRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeRequest.html" data-type="entity-link" >BrowserNodeRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateSelectorItem.html" data-type="entity-link" >DateSelectorItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/GridResponse.html" data-type="entity-link" >GridResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/HTMLCollection.html" data-type="entity-link" >HTMLCollection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Interpolation.html" data-type="entity-link" >Interpolation</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageModel.html" data-type="entity-link" >LanguageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerData.html" data-type="entity-link" >PagerData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerRequest.html" data-type="entity-link" >PagerRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/Positioning.html" data-type="entity-link" >Positioning</a>
                            </li>
                            <li class="link">
                                <a href="classes/SacConfirmButton.html" data-type="entity-link" >SacConfirmButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/SacUploadFile.html" data-type="entity-link" >SacUploadFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceConfirmCommon.html" data-type="entity-link" >ServiceConfirmCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortDescriptor.html" data-type="entity-link" >SortDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/TinyMceDialogSettings.html" data-type="entity-link" >TinyMceDialogSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/Validation.html" data-type="entity-link" >Validation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationErrorItem.html" data-type="entity-link" >ValidationErrorItem</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SacAbstractFileBrowserService.html" data-type="entity-link" >SacAbstractFileBrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacAbstractIconService.html" data-type="entity-link" >SacAbstractIconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacAbstractLanguageService.html" data-type="entity-link" >SacAbstractLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacAbstractLocalisationService.html" data-type="entity-link" >SacAbstractLocalisationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultFileBrowserService.html" data-type="entity-link" >SacDefaultFileBrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultIconService.html" data-type="entity-link" >SacDefaultIconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultLanguageService.html" data-type="entity-link" >SacDefaultLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultLocalisationService.html" data-type="entity-link" >SacDefaultLocalisationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceConfirm.html" data-type="entity-link" >ServiceConfirm</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-1.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-2.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-3.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientRect.html" data-type="entity-link" >ClientRect</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLOption.html" data-type="entity-link" >HTMLOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAbstractControlLabelExtension.html" data-type="entity-link" >IAbstractControlLabelExtension</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserFile.html" data-type="entity-link" >IBrowserFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserFileResponse.html" data-type="entity-link" >IBrowserFileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserNode.html" data-type="entity-link" >IBrowserNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserNodeResponse.html" data-type="entity-link" >IBrowserNodeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmComponent.html" data-type="entity-link" >IConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDateTimeControl.html" data-type="entity-link" >IDateTimeControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacFileBrowserService.html" data-type="entity-link" >ISacFileBrowserService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacIconService.html" data-type="entity-link" >ISacIconService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacLabelSizes.html" data-type="entity-link" >ISacLabelSizes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacLanguageService.html" data-type="entity-link" >ISacLanguageService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacLocalisationService.html" data-type="entity-link" >ISacLocalisationService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadControl.html" data-type="entity-link" >IUploadControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TinyMceDialogSettingsMeta.html" data-type="entity-link" >TinyMceDialogSettingsMeta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TinyMceInstance.html" data-type="entity-link" >TinyMceInstance</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/SacToControlWidthCssPipe.html" data-type="entity-link" >SacToControlWidthCssPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SacToLabelWidthCssPipe.html" data-type="entity-link" >SacToLabelWidthCssPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});