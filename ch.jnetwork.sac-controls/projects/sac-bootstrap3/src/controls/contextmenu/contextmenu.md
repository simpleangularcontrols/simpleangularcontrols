# Using external templates

If you use the context menu in a component and want to insert a context menu element with a template from outside into the context menu, you must transfer the reference of the context menu to the menu element. If the menu elements are assigned directly in the context menu, this assignment is made automatically. However, Angular does not support this via a template.

Here is an example of how you can integrate a template into the context menu.

Definition of the context menu

```html
<sac-contextmenu #contextmenu name="contextmenumain">
    <sac-contextmenubutton isicondisabled="true" name="item1" text="Context 1 Internal"> </sac-contextmenubutton>
    <sac-contextmenubutton isicondisabled="true" name="item2" text="Context 2 Internal"> </sac-contextmenubutton>

    <ng-container *ngTemplateOutlet="template; context: { contextmenu: contextmenu }"></ng-container>
</sac-contextmenu>
```

Use of the context menu with the definition of own elements

```html
<injectdemo-component>
    <ng-template #externalActions let-contextmenu="contextmenu">
        <sac-contextmenusplitter></sac-contextmenusplitter>
        <sac-contextmenubutton isicondisabled="true" name="external1" text="External Event" [contextmenu]="contextmenu">
        </sac-contextmenubutton>
    </ng-template>
</injectdemo-component>
```

The assignment of 'contextmenu' within the template is important
