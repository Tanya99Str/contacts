import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any, search: string): any {
    console.log(data, search);
    if (!search) { return data; }

    return data.filter(el => {
      return el.contact_name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

}
