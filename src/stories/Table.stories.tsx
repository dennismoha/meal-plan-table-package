import type { Meta, StoryObj } from '@storybook/react';
import { MealPlanTable } from '../components';
import { defaultMealPlans } from '../Data/constants';
import React from 'react';

const meta: Meta<typeof MealPlanTable> = {
  title: 'Example/Button',
  component: MealPlanTable,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const enterCustomData: Story = {
  decorators: [
    (Story) => (
      <div>
        <MealPlanTable mealPlans={defaultMealPlans} />
      </div>
    ),
  ],
};
