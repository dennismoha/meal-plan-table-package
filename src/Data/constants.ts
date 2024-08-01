export interface MealPlan {
  mealplankey: string;
  idmealPlanWeek: number;
  data: {
    daysOfWeek: {
      [key: string]: {
        lunch: string;
        supper: string;
        breakfast: string;
        evening_break: string;
        morning_break: string;
      };
    };
  };
}
// Example data
export const defaultMealPlans: MealPlan[] = [
  {
    mealplankey: 'week2',
    idmealPlanWeek: 2,
    data: {
      daysOfWeek: {
        Friday: {
          lunch: 'Mayai',
          supper: 'Ugali',
          breakfast: 'tea',
          evening_break: 'Yogurt',
          morning_break: 'Fruit avocado',
        },
        Monday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Bellies',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Sunday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Biscuits',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Tuesday: {
          lunch: 'mukimo',
          supper: 'Githeri avocado',
          breakfast: 'maji',
          evening_break: 'coffee',
          morning_break: 'chocolate',
        },
        Saturday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Eggs and toast',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Thursday: {
          lunch: 'pizza',
          supper: 'fruits and greens',
          breakfast: 'cocoa',
          evening_break: 'coffee',
          morning_break: 'juice cola',
        },
        Wednesday: {
          lunch: 'ugali',
          supper: 'minji rice',
          breakfast: 'chapo chai',
          evening_break: 'cocoa',
          morning_break: 'loaf coffee',
        },
      },
    },
  },

  {
    mealplankey: 'week3',
    idmealPlanWeek: 2,
    data: {
      daysOfWeek: {
        Friday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Eggs and toast',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Monday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Biscuits',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Sunday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Biscuits',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Tuesday: {
          lunch: 'mukimo',
          supper: 'Githeri avocado',
          breakfast: 'maji',
          evening_break: 'coffee',
          morning_break: 'chocolate',
        },
        Saturday: {
          lunch: 'Chicken salad',
          supper: 'Grilled fish',
          breakfast: 'Eggs and toast',
          evening_break: 'Yogurt',
          morning_break: 'Fruit',
        },
        Thursday: {
          lunch: 'pizza',
          supper: 'fruits and greens',
          breakfast: 'cocoa',
          evening_break: 'coffee',
          morning_break: 'juice cola',
        },
        Wednesday: {
          lunch: 'ugali',
          supper: 'minji rice',
          breakfast: 'chapo chai',
          evening_break: 'cocoa',
          morning_break: 'loaf coffee',
        },
      },
    },
  },
];
