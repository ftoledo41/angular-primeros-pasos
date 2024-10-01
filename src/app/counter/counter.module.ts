import { NgModule } from "@angular/core";
import { CounterCompoment } from "./components/counter/counter.component";

@NgModule({
  declarations: [CounterCompoment],
  exports: [CounterCompoment],
})
export class CounterModule {}
