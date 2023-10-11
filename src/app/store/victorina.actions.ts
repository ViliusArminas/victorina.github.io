import { createAction, props } from '@ngrx/store';
import { VictorinaData } from '../models/victorina-data';

export const removeVictorinaData = createAction(`[VictorinaData] Remove victorina data`);

export const saveVictorinaData = createAction(`[VictorinaData] Save victorina data`,   props<{ data: VictorinaData[] }>());

export const selectQuestion = createAction(`[VictorinaData] Select question`,   props<{ themeId: number, questionId: number }>());

export const completeQuestion = createAction(`[VictorinaData] Complete question`,   props<{ themeId: number, questionId: number }>());