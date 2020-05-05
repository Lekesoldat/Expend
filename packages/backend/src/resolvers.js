import Sequelize from "sequelize";
import connect from "./connectors.js";

const resolve = async () => {
  const { IncomeCategory, Income, ExpenseCategory, Expense } = await connect();

  const resolvers = {
    Query: {
      expenseCategories: async () =>
        await ExpenseCategory.findAll({ include: Expense }),

      incomeCategories: async () =>
        await IncomeCategory.findAll({ include: Income }),

      expenses: async () => await Expense.findAll({ include: ExpenseCategory }),

      incomes: async () => await Income.findAll({ include: IncomeCategory }),

      subscriptions: async () =>
        await Expense.findAll({
          where: {
            isSubscription: {
              [Sequelize.Op.is]: true,
            },
          },
        }),

      regularIncome: async () =>
        await Income.findAll({
          where: {
            isRegularIncome: {
              [Sequelize.Op.is]: true,
            },
          },
        }),
    },
  };

  return { resolvers };
};

export default resolve;
