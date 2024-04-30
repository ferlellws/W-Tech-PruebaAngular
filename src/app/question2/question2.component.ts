import { Component } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.css'
})
export class Question2Component {
  question1Answered = false;
  question2Answered = false;
  showAlert = false;

  objQuestion1: any = {}
  objQuestion2: any = {}

  totalQuestions = 2;
  correctAnswers = 0;

  // Respuestas y mensajes de alerta
  answers: any = {
    question1: {
      correctAnswer: 'd',
      correctAnswerText: `la respuesta correcta es la <span class="font-bold">D</span>. La diferencia fundamental entre los argumentos deductivos y los inductivos es que los deductivos garantizan la verdad de la conclusión cuando las premisas son verdaderas, mientras que los inductivos otorgan un grado de probabilidad a la conclusión.`,
      titleAlert: 'Respuesta incorrecta',
      alertType: 'danger'
    },
    question2: {
      correctAnswer: 'c',
      correctAnswerText: `la respuesta correcta es la <span class="font-bold">C</span>. La prueba de comunicación escrita no evaluará la validez o la fuerza de los argumentos, sino que se centrará en la pertinencia de los mismos para respaldar el punto central del escrito y en la claridad de su expresión.`,
      titleAlert: 'Respuesta incorrecta',
      alertType: 'danger'
    }
  };

  onSubmit() {
    this.checkAnswer('question1');
    this.checkAnswer('question2');
    this.showAlert = true;

    this.objQuestion1 = this.answers.question1;
    this.objQuestion2 = this.answers.question2;
  }

  private checkAnswer(question: string): void {
    const selectedAnswer = (document.querySelector(`input[name="${question}"]:checked`) as HTMLInputElement)?.value;

    if (selectedAnswer === this.answers[question]['correctAnswer']) {
      this.correctAnswers++;
      this.answers[question].titleAlert = 'Bien hecho';
      this.answers[question].alertType = 'success';
    }
  }
}
