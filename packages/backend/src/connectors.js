import faker from "faker";
import _ from "lodash";
import Sequelize from "sequelize";

const connect = async () => {
  const db = new Sequelize("postgres://magnusholtet@localhost:5432/rentspend");
  const CategoryModel = db.define(
    "category",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.STRING,
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
      description: Sequelize.STRING,
      amount: Sequelize.FLOAT,
      isSubscription: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  CategoryModel.hasMany(ExpenseModel);
  ExpenseModel.belongsTo(CategoryModel);

  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");

  // Mocking
  const mock = () => {
    _.times(10, async () => {
      return await CategoryModel.create({
        title: faker.commerce.product(),
        description: faker.lorem.sentence(),
      }).then((category) => {
        return category.createExpense({
          title: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          amount: faker.commerce.price(),
          isSubscription: faker.random.boolean(),
        });
      });
    });
  };

  // mock();

  const Category = db.models.category;
  const Expense = db.models.expense;

  return { Category, Expense };
};

export default connect;
