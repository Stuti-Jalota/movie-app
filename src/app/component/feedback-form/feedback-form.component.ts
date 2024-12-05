import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent {
  feedbackForm;

  constructor(private fb: FormBuilder) {

    // Initializing feedbackForm here
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      alert('Feedback submitted successfully!');
    }
  }
}
