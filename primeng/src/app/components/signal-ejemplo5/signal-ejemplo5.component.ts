import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-ejemplo5',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo5.component.html',
  styleUrl: './signal-ejemplo5.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEjemplo5Component {
  counter$ = interval(200).pipe(take(100));
  counter = toSignal(this.counter$);


  counter2$ = interval(1000).pipe(map(i => i + 5), take(30));
  contadorConValorInicial = toSignal(this.counter2$);

}
