import Sequelize from "sequelize";

const Categories = [
  {
    title: "Housing",
    description:
      "Anything you pay toward keeping a roof over your head is considered a housing expense, including rent or mortgage payments, property taxes, HOA dues, and home maintenance costs. For most budgeters, this category is by far the biggest.",
  },

  {
    title: "Transportation",
    description:
      "Regardless of location and lifestyle, everyone needs to get from point A to point B. This is why transportation is considered an essential cost. Typically, this category includes car payments, registration and DMV fees, gas, maintenance, parking, tolls, and public transit. ",
  },

  {
    title: "Food",
    description:
      "Groceries, of course, are an essential expense for every family. Many budgeters also include dining out in this category (e.g., restaurant meals, work lunches, food delivery, etc.) However, if you’re someone who tends to spend a significant amount of money on things like gourmet food and wine, you may want to put your non-grocery food expenses into one of the non-essential categories.",
  },

  {
    title: "Utilities",
    description:
      "Water, electricity, and HVAC (heating, ventilation, and air conditioning) are vital to practically every well-functioning household. Your utilities category should include all the expenses that keep these services up and running, including your gas, electricity, and water and sewage bills. For most families, it should also include cell phone, cable, and internet expenses.",
  },

  {
    title: "Insurance",
    description:
      "This is one category that depends very much on your budgeting preferences. Many budgeters prefer to categorize things like health insurance under “Healthcare” or auto insurance under “Transportation”—a completely valid option.  If you choose to follow our guidelines for this category, it should include health insurance, homeowner’s or renter’s insurance, home warranties or protection plans, auto insurance, life insurance, and disability insurance. ",
  },

  {
    title: "Medical & Healthcare",
    description:
      "Few would argue that maintaining your health and well-being is essential. This category includes whatever you spend on healthcare that does not include insurance premiums, such as your out-of-pocket costs for primary care, specialty care (dermatologists, psychologists, etc.), dental care, urgent care, prescriptions, and medical devices.",
  },

  {
    title: "Saving, Investing, & Debt Payments",
    description:
      "Ironically, this often-overlooked (or underfunded) category is arguably the most important. Although saving money doesn’t have much impact on your day-to-day existence, it has everything to do with you and your family’s financial health further down the road. In the world of budgeting, it’s called “paying yourself first.At the bare minimum, every family should have an emergency fund earmarked for unexpected expenses and a retirement account such as a 401(k) or IRA. Without an emergency fund, you may find yourself in dire straits if you get blindsided by an unexpected medical expense, car accident, or sudden job loss. And without a well-funded retirement account, you may wind up without enough to live on during your golden years. You can also use the money you’re saving via this category to start paying down any high-interest debt you may carry, such as credit card bills, personal loans, and student loans. If you’re saving a full 20 percent and still aren’t making a significant dent in your debt, you’ll need to start cutting back in other areas, most likely starting with your non-essential spending categories.",
  },

  {
    title: "Personal Spending",
    description:
      "This category is really a catchall that can include anything commonly considered a personal care or “lifestyle” expense. Personal spending can include gym memberships, grooming products, new clothes and shoes, home decor and furnishings, gifts, magazine subscriptions, personal hygiene supplies, dry cleaning expenses—even basic household items like laundry detergent are often categorized as a personal expense.",
  },

  {
    title: "Recreation & Entertainment",
    description:
      "This is the one category in your budget that really constitutes “fun money.” That’s not to say it’s not an important one, though. For most of us, carving out leisure time (and money) is essential if you want to maintain a healthy work-life balance. This category can include concert tickets, sporting events, game nights (e.g. a night out bowling), vacations, movies, streaming service subscriptions (e.g., Hulu and Netflix), kids’ activities, restaurants (if you didn’t include this expense under “Food”), video games, hobbies, really anything that constitutes fun and entertainment for your family. Enjoy this money however you wish—you’ve earned it!",
  },

  {
    title: "Miscellaneous",
    description:
      "This category is reserved for anything you may not have already budgeted for or categorized. Unsurprisingly, it’s highly personalized and varies greatly from family to family. For example, if you have a larger family, it’s likely you spend a fair amount on clothes and haircuts for your kids. If you’ve maxed out your “Personal Expenses” category, you could account for those items here. Or, perhaps you’ve recently returned to school to get a degree that will ultimately lead to a higher income. In such a case, your tuition and textbook expenses could fall into this category.",
  },
];

const connect = async () => {
  const DB_URL =
    process.env.NODE_ENV === "development"
      ? "postgres://magnusholtet@localhost:5432/expend"
      : process.env.DATABASE_URL;
  const db = new Sequelize(DB_URL);

  const ExpenseCategoryModel = db.define(
    "expenseCategory",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.TEXT,
    },
    {
      timestamps: false,
    }
  );

  const ExpenseModel = db.define(
    "expense",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.TEXT,
      amount: Sequelize.FLOAT,
      isSubscription: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
    },
    {
      timestamps: false,
    }
  );

  ExpenseCategoryModel.hasMany(ExpenseModel);
  ExpenseModel.belongsTo(ExpenseCategoryModel);

  const IncomeCategoryModel = db.define(
    "incomeCategory",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.TEXT,
    },
    {
      timestamps: false,
    }
  );

  const IncomeModel = db.define(
    "income",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.TEXT,
      amount: Sequelize.FLOAT,
      isRegularIncome: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
    },
    {
      timestamps: false,
    }
  );

  IncomeCategoryModel.hasMany(IncomeModel);
  IncomeModel.belongsTo(IncomeCategoryModel);

  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");

  // const mock = () => {
  //   Categories.forEach((category) => {
  //     ExpenseCategoryModel.create({
  //       title: category.title,
  //       description: category.description,
  //     });
  //   });
  // };

  // mock();

  const ExpenseCategory = db.models.expenseCategory;
  const Expense = db.models.expense;
  const IncomeCategory = db.models.incomeCategory;
  const Income = db.models.income;

  return { IncomeCategory, Income, ExpenseCategory, Expense };
};

export default connect;
