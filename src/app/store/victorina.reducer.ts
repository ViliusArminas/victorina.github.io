/* istanbul ignore file */
import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import * as VictorinaActions from './victorina.actions';
import { VictorinaData } from '../models/victorina-data';

export const victorinaReducerKey = 'appVictorinaReducer';

export interface VictorinaState extends EntityState<VictorinaData> {}

export const initialStateSettings = {};

export const adapter: EntityAdapter<VictorinaData> =
  createEntityAdapter<VictorinaData>();

export const initialState: VictorinaState = adapter.getInitialState({
  selectedThemeId: null,
  selectedQuestionId: null,
});
export const appVictorinaReducer = createReducer(
  initialState,
  on(VictorinaActions.removeVictorinaData, (state) => {
    return adapter.removeAll(state);
  }),
  on(VictorinaActions.saveVictorinaData, (state, { data }) => {
    return adapter.addMany(data, state);
  }),
  on(VictorinaActions.selectQuestion, (state, { themeId, questionId }) => {
    return {
      ...state,
      selectedThemeId: themeId,
      selectedQuestionId: questionId,
    };
  }),

  on(VictorinaActions.completeQuestion, (state, { themeId, questionId }) => {
    const theme: VictorinaData | undefined = state.entities[themeId];
    console.log(themeId);
    console.log(questionId);
    const itemUpdate = {
      id: themeId,
      changes: {
        ...theme,
        questions: theme?.questions?.map((q) => {
          if (q.id === questionId) {
            return { ...q, answered: true };
          } else {
            return q;
          }
        }),
      },
    };
    return adapter.updateOne(itemUpdate, state);
  })
);

export const { selectAll, selectEntities } = adapter.getSelectors();
