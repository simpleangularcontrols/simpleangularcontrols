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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3ButtonModule.html" data-type="entity-link">JNetworkBootstrap3ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3ButtonModule-f9f8a759b0ed49e02be00606e268223b"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3ButtonModule-f9f8a759b0ed49e02be00606e268223b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3ButtonModule-f9f8a759b0ed49e02be00606e268223b"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3ButtonModule-f9f8a759b0ed49e02be00606e268223b"' }>
                                            <li class="link">
                                                <a href="components/NgButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3CheckboxModule.html" data-type="entity-link">JNetworkBootstrap3CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3CheckboxModule-ac97d529a5e66c45108153bb67244849"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3CheckboxModule-ac97d529a5e66c45108153bb67244849"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3CheckboxModule-ac97d529a5e66c45108153bb67244849"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3CheckboxModule-ac97d529a5e66c45108153bb67244849"' }>
                                            <li class="link">
                                                <a href="components/NgCheckboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgRadiobuttonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgRadiobuttonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3ConfirmModule.html" data-type="entity-link">JNetworkBootstrap3ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3ConfirmModule-a88220562af1b4590dce4e265a6e5b42"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3ConfirmModule-a88220562af1b4590dce4e265a6e5b42"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3ConfirmModule-a88220562af1b4590dce4e265a6e5b42"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3ConfirmModule-a88220562af1b4590dce4e265a6e5b42"' }>
                                            <li class="link">
                                                <a href="components/NgConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3DateTimeModule.html" data-type="entity-link">JNetworkBootstrap3DateTimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3DateTimeModule-64ada978b03e68e97346e849e90ba727"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3DateTimeModule-64ada978b03e68e97346e849e90ba727"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3DateTimeModule-64ada978b03e68e97346e849e90ba727"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3DateTimeModule-64ada978b03e68e97346e849e90ba727"' }>
                                            <li class="link">
                                                <a href="components/NgDateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateTimeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTimeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTimeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3DialogModule.html" data-type="entity-link">JNetworkBootstrap3DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3DialogModule-531f16e56099b1e8003a5beeb470257d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3DialogModule-531f16e56099b1e8003a5beeb470257d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3DialogModule-531f16e56099b1e8003a5beeb470257d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3DialogModule-531f16e56099b1e8003a5beeb470257d"' }>
                                            <li class="link">
                                                <a href="components/NgDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3FormModule.html" data-type="entity-link">JNetworkBootstrap3FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap3FormModule-1715e3cde176d1c4577e36f1ce8fff3d"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap3FormModule-1715e3cde176d1c4577e36f1ce8fff3d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap3FormModule-1715e3cde176d1c4577e36f1ce8fff3d"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap3FormModule-1715e3cde176d1c4577e36f1ce8fff3d"' }>
                                        <li class="link">
                                            <a href="directives/NgFormularDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgFormularDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ProvideParentNgFormularDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProvideParentNgFormularDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3GridModule.html" data-type="entity-link">JNetworkBootstrap3GridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3GridModule-0f00c439ec711833184d428ed200ceac"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3GridModule-0f00c439ec711833184d428ed200ceac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3GridModule-0f00c439ec711833184d428ed200ceac"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3GridModule-0f00c439ec711833184d428ed200ceac"' }>
                                            <li class="link">
                                                <a href="components/NgGridButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridColumnActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridImageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgPagingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgPagingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3InputModule.html" data-type="entity-link">JNetworkBootstrap3InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3InputModule-33cdaac384940bbca83480936a8f2153"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3InputModule-33cdaac384940bbca83480936a8f2153"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3InputModule-33cdaac384940bbca83480936a8f2153"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3InputModule-33cdaac384940bbca83480936a8f2153"' }>
                                            <li class="link">
                                                <a href="components/NgInputAreaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputCurrencyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputCurrencyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputDecimalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputDecimalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputIntegerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputIntegerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3ListModule.html" data-type="entity-link">JNetworkBootstrap3ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' }>
                                            <li class="link">
                                                <a href="components/NgDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgListboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgListboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap3ListModule-fe927deef8cc5a05bf3ec257ec970968"' }>
                                        <li class="link">
                                            <a href="directives/NgDropdownOptionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDropdownOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3StaticLabelModule.html" data-type="entity-link">JNetworkBootstrap3StaticLabelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3StaticLabelModule-12e36e08eca9ad443703ec846fe593ea"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3StaticLabelModule-12e36e08eca9ad443703ec846fe593ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3StaticLabelModule-12e36e08eca9ad443703ec846fe593ea"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3StaticLabelModule-12e36e08eca9ad443703ec846fe593ea"' }>
                                            <li class="link">
                                                <a href="components/NgStaticFormContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgStaticFormContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgStaticLabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgStaticLabelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3TabsModule.html" data-type="entity-link">JNetworkBootstrap3TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3TabsModule-617778f7a60d5098811b8c08cc914ca2"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3TabsModule-617778f7a60d5098811b8c08cc914ca2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3TabsModule-617778f7a60d5098811b8c08cc914ca2"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3TabsModule-617778f7a60d5098811b8c08cc914ca2"' }>
                                            <li class="link">
                                                <a href="components/NgTabComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTabItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTabItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3TinyMceModule.html" data-type="entity-link">JNetworkBootstrap3TinyMceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3TinyMceModule-11c0aa950a6c18eccb1f1465245935c9"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3TinyMceModule-11c0aa950a6c18eccb1f1465245935c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3TinyMceModule-11c0aa950a6c18eccb1f1465245935c9"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3TinyMceModule-11c0aa950a6c18eccb1f1465245935c9"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTinyMceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3TooltipModule.html" data-type="entity-link">JNetworkBootstrap3TooltipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3TooltipModule-7ee9075b604a6da2e4ba1253703478a4"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3TooltipModule-7ee9075b604a6da2e4ba1253703478a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3TooltipModule-7ee9075b604a6da2e4ba1253703478a4"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3TooltipModule-7ee9075b604a6da2e4ba1253703478a4"' }>
                                            <li class="link">
                                                <a href="components/NgTooltipComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTooltipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3TtreeviewModule.html" data-type="entity-link">JNetworkBootstrap3TtreeviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3TtreeviewModule-3685d13253435aabd604b3b7f92ae4d4"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3TtreeviewModule-3685d13253435aabd604b3b7f92ae4d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3TtreeviewModule-3685d13253435aabd604b3b7f92ae4d4"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3TtreeviewModule-3685d13253435aabd604b3b7f92ae4d4"' }>
                                            <li class="link">
                                                <a href="components/NgTreeItemActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTreeItemActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTreeViewChildComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTreeViewChildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTreeViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTreeViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3UploadModule.html" data-type="entity-link">JNetworkBootstrap3UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3UploadModule-7854a9dcc43244ce8e11e3e583e17172"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3UploadModule-7854a9dcc43244ce8e11e3e583e17172"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3UploadModule-7854a9dcc43244ce8e11e3e583e17172"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3UploadModule-7854a9dcc43244ce8e11e3e583e17172"' }>
                                            <li class="link">
                                                <a href="components/NgUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgUploadMultipleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgUploadMultipleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3ValidationSummaryModule.html" data-type="entity-link">JNetworkBootstrap3ValidationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3ValidationSummaryModule-c4ef52e0b5dd9bb4f2171a7b2d6d64a4"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3ValidationSummaryModule-c4ef52e0b5dd9bb4f2171a7b2d6d64a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3ValidationSummaryModule-c4ef52e0b5dd9bb4f2171a7b2d6d64a4"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3ValidationSummaryModule-c4ef52e0b5dd9bb4f2171a7b2d6d64a4"' }>
                                            <li class="link">
                                                <a href="components/NgValidationSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgValidationSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap3WizardModule.html" data-type="entity-link">JNetworkBootstrap3WizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap3WizardModule-e14f1c48db8981da5763621322a83f0f"' : 'data-target="#xs-components-links-module-JNetworkBootstrap3WizardModule-e14f1c48db8981da5763621322a83f0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap3WizardModule-e14f1c48db8981da5763621322a83f0f"' :
                                            'id="xs-components-links-module-JNetworkBootstrap3WizardModule-e14f1c48db8981da5763621322a83f0f"' }>
                                            <li class="link">
                                                <a href="components/NgWizardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgWizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgWizardItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgWizardItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkCommonListboxOptionModule.html" data-type="entity-link">JNetworkCommonListboxOptionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' : 'data-target="#xs-directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' :
                                        'id="xs-directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' }>
                                        <li class="link">
                                            <a href="directives/NgListboxOptionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgListboxOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkTinyMceEditorModule.html" data-type="entity-link">jNetworkTinyMceEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' : 'data-target="#xs-components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' :
                                            'id="xs-components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMceEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTinyMceEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateSelectorItem.html" data-type="entity-link">DateSelectorItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/GridResponse.html" data-type="entity-link">GridResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/HTMLCollection.html" data-type="entity-link">HTMLCollection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Interpolation.html" data-type="entity-link">Interpolation</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageModel.html" data-type="entity-link">LanguageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgConfirmButton.html" data-type="entity-link">NgConfirmButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridColumnActionCommon.html" data-type="entity-link">NgGridColumnActionCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTinyMceCommon.html" data-type="entity-link">NgTinyMceCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadFile.html" data-type="entity-link">NgUploadFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerData.html" data-type="entity-link">PagerData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerRequest.html" data-type="entity-link">PagerRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceConfirmCommon.html" data-type="entity-link">ServiceConfirmCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortDescriptor.html" data-type="entity-link">SortDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Validation.html" data-type="entity-link">Validation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationErrorItem.html" data-type="entity-link">ValidationErrorItem</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/InternalLanguageResourceService.html" data-type="entity-link">InternalLanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalLanguageService.html" data-type="entity-link">InternalLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageResourceService.html" data-type="entity-link">LanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link">LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceConfirm.html" data-type="entity-link">ServiceConfirm</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EventObj.html" data-type="entity-link">EventObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLOption.html" data-type="entity-link">HTMLOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmComponent.html" data-type="entity-link">IConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDateTimeControl.html" data-type="entity-link">IDateTimeControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageResourceService.html" data-type="entity-link">ILanguageResourceService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageService.html" data-type="entity-link">ILanguageService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStateObj.html" data-type="entity-link">IStateObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadControl.html" data-type="entity-link">IUploadControl</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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