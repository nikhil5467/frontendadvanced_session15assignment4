import {Injectable}   from '@angular/core';
@Injectable()
export class GlobalService {
	activeComponent: any = {
		name: '',
		isTaskTab: false
	};
}