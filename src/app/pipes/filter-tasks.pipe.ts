import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../models/tasks.interface';

@Pipe({
  name: 'filterTasks',
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: Tasks[], searchTerm: string): Tasks[] {
    if (!tasks || !searchTerm) {
      return tasks;
    }

    searchTerm = searchTerm.toLowerCase();

    return tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm),
    );
  }
}
