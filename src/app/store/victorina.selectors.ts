import { createSelector } from '@ngrx/store';
import { selectAll, selectEntities, victorinaReducerKey } from './victorina.reducer';
import { VictorinaData } from '../models/victorina-data';

export const selectFeature = (state: any) => state[victorinaReducerKey];


  export const selectVictorinaData = createSelector(
    selectFeature,
    selectAll
  );

  export const selectVictorinaDataEntities = createSelector(
    selectFeature,
    selectEntities
  );

  export const selectSelectedQuestionId = createSelector(
    selectFeature,
    (state) => {return state.selectedQuestionId}
  );

  export const selectSelectedThemeId = createSelector(
    selectFeature,
    (state) => state.selectedThemeId
  );

  export const selectSelectedQuestion = createSelector(
    selectVictorinaDataEntities,
    selectSelectedThemeId,
    selectSelectedQuestionId,
    (entities, themeId, questionId) => {
        if (entities && entities[themeId]) {
            const theme: VictorinaData | undefined = entities[themeId];
            if (theme?.questions) {
                return theme?.questions.find(q => q.id === questionId);
            }
        }
       return null;
      }
  );


