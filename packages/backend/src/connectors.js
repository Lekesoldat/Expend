import Sequelize from "sequelize";

const connect = async () => {
  const db = new Sequelize("postgres://magnusholtet@localhost:5432/rentspend");
  const CategoryModel = db.define(
    "Category",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.STRING,
    },
    { timestamps: false }
  );

  const ExpenseModel = db.define(
    "Expense",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.STRING,
      amount: Sequelize.FLOAT,
      isSubscription: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  CategoryModel.hasMany(ExpenseModel);
  ExpenseModel.belongsTo(CategoryModel);

  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");

  const Category = db.models.Category;
  const Expense = db.models.Expense;

  return { Category, Expense };
};

export default connect;
