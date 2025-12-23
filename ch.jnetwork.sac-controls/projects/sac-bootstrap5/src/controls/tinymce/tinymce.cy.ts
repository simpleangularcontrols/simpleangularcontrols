import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5TinyMceModule } from '@simpleangularcontrols/sac-bootstrap5';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

describe('SacTinyMceComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-tinymce name="tinyMceControl" [label]="label" [config]="config"></sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                    },
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
    });
});
