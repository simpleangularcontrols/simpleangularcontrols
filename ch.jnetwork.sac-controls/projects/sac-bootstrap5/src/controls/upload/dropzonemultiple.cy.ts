import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5UploadModule } from './upload.module';
import { FormsModule } from '@angular/forms';

describe('SacDropzoneMultipleComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
    });

    it('should handle model binding', () => {});

    it('should can upload file', () => {});

    it('should validate file extension', () => {});

    it('should validate file size', () => {});

    it('should validate required state', () => {});

    it('should can cancel upload', () => {});

    it('should can delete uploaded file', () => {});

    it('should can pause and continue upload', () => {});

    it('should use custom icons from iconservice', () => {});

    it('should can select multiple files for uploading', () => {});

    it('should can drop multiple files in dropzone', () => {});
});
