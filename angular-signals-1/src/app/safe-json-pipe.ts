import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeJson',
})
export class SafeJsonPipe implements PipeTransform {
  transform(value: string): string {
    return value
    // \s* espacios, [^"]* todo - la comilla doble, 
      .replace(/"password"\s*:\s*"[^"]*"/g, '"password": "*** hidden ***"')
      .replace(/"token"\s*:\s*"[^"]*"/g, '"token": "*** hidden ***"')
      .replace(/"email"\s*:\s*"[^"]*"/g, '"email": "*** hidden ***"');
  }
}