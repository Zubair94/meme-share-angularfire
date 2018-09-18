import { FormGroup } from "@angular/forms";

export abstract class CustomFormBuilder{
    constructor(){}
    abstract createForm(); void;
    abstract sendForm(): void;
    resetForm(Form: FormGroup): void {
        Form.reset();
        Object.keys(Form.controls).forEach(key => {
            Form.controls[key].setErrors(null)
        });
    }
}