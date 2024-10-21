import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Week {
  weekNumber: number;
  status: 'highlighted' | 'neutral' | 'target';
}

interface WeeksState {
  year: number;
  weeks: Week[];
  visibleTooltipWeek: number | null; // To track which week's tooltip is visible
}

const initialState: WeeksState = {
  year: new Date().getFullYear(),
  weeks: Array(52).fill(null).map((_, i) => ({
    weekNumber: i + 1,
    status: 'neutral',
  })),
  visibleTooltipWeek: null, // No tooltip is visible initially
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
    // Reducer to show the tooltip for a specific week
    showTooltip(state, action: PayloadAction<number>) {
      state.visibleTooltipWeek = action.payload;
    },
    // Reducer to hide the tooltip
    hideTooltip(state) {
      state.visibleTooltipWeek = null;
    },
  },
});

export const { highlightWeek, setTargetWeek, resetWeek, showTooltip, hideTooltip } = weeksSlice.actions;
export default weeksSlice.reducer;
