import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Week {
  weekNumber: number;
  status: 'highlighted' | 'neutral' | 'target';
}

interface WeeksState {
  map(arg0: (week: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  year: number;
  weeks: Week[];
}

const initialState: WeeksState = {
  year: new Date().getFullYear(),
  weeks: Array(52).fill(null).map((_, i) => ({
    weekNumber: i + 1,
    status: 'neutral',
  })),
  map: function (arg0: (week: any, index: any) => import('react/jsx-runtime').JSX.Element): import('react').ReactNode {
    throw new Error('Function not implemented.');
  }
};

const weeksSlice = createSlice({
  name: 'weeks',
  initialState,
  reducers: {
    highlightWeek(state, action: PayloadAction<number>) {
      state.weeks = state.weeks.map(week => 
        week.weekNumber === action.payload 
        ? { ...week, status: 'highlighted' } 
        : week
      );
    },
    setTargetWeek(state, action: PayloadAction<number>) {
      state.weeks = state.weeks.map(week => 
        week.weekNumber === action.payload 
        ? { ...week, status: 'target' } 
        : week
      );
    },
    resetWeek(state, action: PayloadAction<number>) {
      state.weeks = state.weeks.map(week => 
        week.weekNumber === action.payload 
        ? { ...week, status: 'neutral' } 
        : week
      );
    },
  },
});

export const { highlightWeek, setTargetWeek, resetWeek } = weeksSlice.actions;
export default weeksSlice.reducer;
