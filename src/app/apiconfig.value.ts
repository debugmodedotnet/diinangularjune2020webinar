import { InjectionToken } from '@angular/core';
import { ApiConfig } from './apiconfig';

export const apiconfigvalue = new InjectionToken<ApiConfig>('API token for modules');

