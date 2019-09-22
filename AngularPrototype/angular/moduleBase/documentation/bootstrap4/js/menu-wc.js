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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4ButtonModule.html" data-type="entity-link">jNetworkBootstrap4ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4ButtonModule-a8bb52a6f686b76f1e13229f64d7dca8"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4ButtonModule-a8bb52a6f686b76f1e13229f64d7dca8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4ButtonModule-a8bb52a6f686b76f1e13229f64d7dca8"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4ButtonModule-a8bb52a6f686b76f1e13229f64d7dca8"' }>
                                            <li class="link">
                                                <a href="components/NgButton.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgButton</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4CheckboxModule.html" data-type="entity-link">jNetworkBootstrap4CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4CheckboxModule-80fe157eb78e31fe659d329a57b0049b"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4CheckboxModule-80fe157eb78e31fe659d329a57b0049b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4CheckboxModule-80fe157eb78e31fe659d329a57b0049b"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4CheckboxModule-80fe157eb78e31fe659d329a57b0049b"' }>
                                            <li class="link">
                                                <a href="components/NgCheckbox.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgCheckbox</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobutton.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgRadiobutton</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttons.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgRadiobuttons</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4ConfirmModule.html" data-type="entity-link">jNetworkBootstrap4ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4ConfirmModule-c16838b63258ba0409333431757f194d"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4ConfirmModule-c16838b63258ba0409333431757f194d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4ConfirmModule-c16838b63258ba0409333431757f194d"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4ConfirmModule-c16838b63258ba0409333431757f194d"' }>
                                            <li class="link">
                                                <a href="components/NgConfirm.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgConfirm</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4DateTimeModule.html" data-type="entity-link">jNetworkBootstrap4DateTimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4DateTimeModule-23c8459d5ecb89f04e303077676d17b6"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4DateTimeModule-23c8459d5ecb89f04e303077676d17b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4DateTimeModule-23c8459d5ecb89f04e303077676d17b6"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4DateTimeModule-23c8459d5ecb89f04e303077676d17b6"' }>
                                            <li class="link">
                                                <a href="components/NgDate.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDate</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateSelector.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateSelector</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateTime.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateTime</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTime.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTime</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4DialogModule.html" data-type="entity-link">jNetworkBootstrap4DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4DialogModule-f85ea65c6c30c87c35b4eee7b6535f51"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4DialogModule-f85ea65c6c30c87c35b4eee7b6535f51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4DialogModule-f85ea65c6c30c87c35b4eee7b6535f51"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4DialogModule-f85ea65c6c30c87c35b4eee7b6535f51"' }>
                                            <li class="link">
                                                <a href="components/NgDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDialog</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4FormModule.html" data-type="entity-link">jNetworkBootstrap4FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-jNetworkBootstrap4FormModule-c90fd6c26477b7ba0ce3bb069ce25601"' : 'data-target="#xs-directives-links-module-jNetworkBootstrap4FormModule-c90fd6c26477b7ba0ce3bb069ce25601"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-jNetworkBootstrap4FormModule-c90fd6c26477b7ba0ce3bb069ce25601"' :
                                        'id="xs-directives-links-module-jNetworkBootstrap4FormModule-c90fd6c26477b7ba0ce3bb069ce25601"' }>
                                        <li class="link">
                                            <a href="directives/NgFormular.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgFormular</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ProvideParentNgFormularDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProvideParentNgFormularDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4GridModule.html" data-type="entity-link">jNetworkBootstrap4GridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4GridModule-ac70dbefb9174bebfd157fc17ed7409e"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4GridModule-ac70dbefb9174bebfd157fc17ed7409e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4GridModule-ac70dbefb9174bebfd157fc17ed7409e"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4GridModule-ac70dbefb9174bebfd157fc17ed7409e"' }>
                                            <li class="link">
                                                <a href="components/NgGrid.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGrid</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridButton.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridButton</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumn.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridColumn</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnAction.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridColumnAction</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridImage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridImage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgPaging.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgPaging</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4InputModule.html" data-type="entity-link">jNetworkBootstrap4InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4InputModule-4188ab94cef2c7def5d614c71ce777d4"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4InputModule-4188ab94cef2c7def5d614c71ce777d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4InputModule-4188ab94cef2c7def5d614c71ce777d4"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4InputModule-4188ab94cef2c7def5d614c71ce777d4"' }>
                                            <li class="link">
                                                <a href="components/NgInput.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInput</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputArea.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputArea</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputCurrency.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputCurrency</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputDecimal.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputDecimal</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputEmail.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputEmail</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputInteger.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputInteger</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputPassword.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputPassword</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputSearch.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputSearch</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4ListModule.html" data-type="entity-link">jNetworkBootstrap4ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4ListModule-d6e6618c6c9f1e97a7a5a3c46aac3ba3"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4ListModule-d6e6618c6c9f1e97a7a5a3c46aac3ba3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4ListModule-d6e6618c6c9f1e97a7a5a3c46aac3ba3"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4ListModule-d6e6618c6c9f1e97a7a5a3c46aac3ba3"' }>
                                            <li class="link">
                                                <a href="components/NgDropdown.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDropdown</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgListbox.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgListbox</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4StaticLabelModule.html" data-type="entity-link">jNetworkBootstrap4StaticLabelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4StaticLabelModule-94cfa4a9e7b96c49a33907569be7560d"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4StaticLabelModule-94cfa4a9e7b96c49a33907569be7560d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4StaticLabelModule-94cfa4a9e7b96c49a33907569be7560d"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4StaticLabelModule-94cfa4a9e7b96c49a33907569be7560d"' }>
                                            <li class="link">
                                                <a href="components/NgStaticFormContainer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgStaticFormContainer</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgStaticLabel.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgStaticLabel</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4TabsModule.html" data-type="entity-link">jNetworkBootstrap4TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4TabsModule-10ce53e016ca9e4ecb998e3f01647366"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4TabsModule-10ce53e016ca9e4ecb998e3f01647366"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4TabsModule-10ce53e016ca9e4ecb998e3f01647366"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4TabsModule-10ce53e016ca9e4ecb998e3f01647366"' }>
                                            <li class="link">
                                                <a href="components/NgTab.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTab</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTabItem.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTabItem</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4TinyMceModule.html" data-type="entity-link">jNetworkBootstrap4TinyMceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4TinyMceModule-5ce2e615d1663aea233a4f4dd6a730bd"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4TinyMceModule-5ce2e615d1663aea233a4f4dd6a730bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4TinyMceModule-5ce2e615d1663aea233a4f4dd6a730bd"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4TinyMceModule-5ce2e615d1663aea233a4f4dd6a730bd"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMce.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTinyMce</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4ValidationSummaryModule.html" data-type="entity-link">jNetworkBootstrap4ValidationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4ValidationSummaryModule-062de6c6a59a01a805b4f41209dc09f9"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4ValidationSummaryModule-062de6c6a59a01a805b4f41209dc09f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4ValidationSummaryModule-062de6c6a59a01a805b4f41209dc09f9"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4ValidationSummaryModule-062de6c6a59a01a805b4f41209dc09f9"' }>
                                            <li class="link">
                                                <a href="components/NgValidationSummary.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgValidationSummary</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkBootstrap4WizardModule.html" data-type="entity-link">jNetworkBootstrap4WizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkBootstrap4WizardModule-fa0d3deb419b6cb16a542479f8ad3577"' : 'data-target="#xs-components-links-module-jNetworkBootstrap4WizardModule-fa0d3deb419b6cb16a542479f8ad3577"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkBootstrap4WizardModule-fa0d3deb419b6cb16a542479f8ad3577"' :
                                            'id="xs-components-links-module-jNetworkBootstrap4WizardModule-fa0d3deb419b6cb16a542479f8ad3577"' }>
                                            <li class="link">
                                                <a href="components/NgWizard.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgWizard</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgWizardItem.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgWizardItem</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkCommonListboxOptionModule.html" data-type="entity-link">jNetworkCommonListboxOptionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-jNetworkCommonListboxOptionModule-3b1b2bc3d108fe52690404b18689be58"' : 'data-target="#xs-directives-links-module-jNetworkCommonListboxOptionModule-3b1b2bc3d108fe52690404b18689be58"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-jNetworkCommonListboxOptionModule-3b1b2bc3d108fe52690404b18689be58"' :
                                        'id="xs-directives-links-module-jNetworkCommonListboxOptionModule-3b1b2bc3d108fe52690404b18689be58"' }>
                                        <li class="link">
                                            <a href="directives/NgListboxOption.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgListboxOption</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkTinyMceEditorModule.html" data-type="entity-link">jNetworkTinyMceEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkTinyMceEditorModule-cc622e8e4ee99cb6108c9f8be792ea66"' : 'data-target="#xs-components-links-module-jNetworkTinyMceEditorModule-cc622e8e4ee99cb6108c9f8be792ea66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkTinyMceEditorModule-cc622e8e4ee99cb6108c9f8be792ea66"' :
                                            'id="xs-components-links-module-jNetworkTinyMceEditorModule-cc622e8e4ee99cb6108c9f8be792ea66"' }>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateSelectorItem.html" data-type="entity-link">DateSelectorItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Events.html" data-type="entity-link">Events</a>
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
                                <a href="classes/NgBaseListControl.html" data-type="entity-link">NgBaseListControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgBaseModelControl.html" data-type="entity-link">NgBaseModelControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgBaseSelectControl.html" data-type="entity-link">NgBaseSelectControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgButtonCommon.html" data-type="entity-link">NgButtonCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgCheckboxCommon.html" data-type="entity-link">NgCheckboxCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgConfirmButton.html" data-type="entity-link">NgConfirmButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgConfirmCommon.html" data-type="entity-link">NgConfirmCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgDateCommon.html" data-type="entity-link">NgDateCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgDateSelectorCommon.html" data-type="entity-link">NgDateSelectorCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgDateTimeCommon.html" data-type="entity-link">NgDateTimeCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgDialogCommon.html" data-type="entity-link">NgDialogCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgDropdownCommon.html" data-type="entity-link">NgDropdownCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgDropdownOptionCommon.html" data-type="entity-link">NgDropdownOptionCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgFormularCommon.html" data-type="entity-link">NgFormularCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridButtonCommon.html" data-type="entity-link">NgGridButtonCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridColumnActionCommon.html" data-type="entity-link">NgGridColumnActionCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridColumnBaseCommon.html" data-type="entity-link">NgGridColumnBaseCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridColumnCommon.html" data-type="entity-link">NgGridColumnCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridCommon.html" data-type="entity-link">NgGridCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridImageCommon.html" data-type="entity-link">NgGridImageCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputAreaCommon.html" data-type="entity-link">NgInputAreaCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputBase.html" data-type="entity-link">NgInputBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputCommon.html" data-type="entity-link">NgInputCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputCurrencyCommon.html" data-type="entity-link">NgInputCurrencyCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputDecimalCommon.html" data-type="entity-link">NgInputDecimalCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputEmailCommon.html" data-type="entity-link">NgInputEmailCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputIntegerCommon.html" data-type="entity-link">NgInputIntegerCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputPasswordCommon.html" data-type="entity-link">NgInputPasswordCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgInputSearchCommon.html" data-type="entity-link">NgInputSearchCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgListboxCommon.html" data-type="entity-link">NgListboxCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgPagingCommon.html" data-type="entity-link">NgPagingCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgRadiobuttonCommon.html" data-type="entity-link">NgRadiobuttonCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgRadiobuttonsCommon.html" data-type="entity-link">NgRadiobuttonsCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgStaticFormContainerCommon.html" data-type="entity-link">NgStaticFormContainerCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgStaticLabelCommon.html" data-type="entity-link">NgStaticLabelCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTabCommon.html" data-type="entity-link">NgTabCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTabItemCommon.html" data-type="entity-link">NgTabItemCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTimeCommon.html" data-type="entity-link">NgTimeCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTinyMceCommon.html" data-type="entity-link">NgTinyMceCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTooltipCommon.html" data-type="entity-link">NgTooltipCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTreeItemActionCommon.html" data-type="entity-link">NgTreeItemActionCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTreeViewChildCommon.html" data-type="entity-link">NgTreeViewChildCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTreeViewCommon.html" data-type="entity-link">NgTreeViewCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadBase.html" data-type="entity-link">NgUploadBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadFile.html" data-type="entity-link">NgUploadFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadMultipleCommon.html" data-type="entity-link">NgUploadMultipleCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadSingleCommon.html" data-type="entity-link">NgUploadSingleCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgValidationSummaryCommon.html" data-type="entity-link">NgValidationSummaryCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgWizardCommon.html" data-type="entity-link">NgWizardCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgWizardItemCommon.html" data-type="entity-link">NgWizardItemCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerData.html" data-type="entity-link">PagerData</a>
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
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/InternalLanguageResourceService.html" data-type="entity-link">InternalLanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageResourceService.html" data-type="entity-link">LanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NgBaseDateTimeControl.html" data-type="entity-link">NgBaseDateTimeControl</a>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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