import Sequelize from "sequelize";

const connect = async () => {
  const DB_URL =
    process.env.NODE_ENV === "development"
      ? "postgres://magnusholtet@localhost:5432/expend"
      : process.env.DATABASE_URL;
  const db = new Sequelize(DB_URL);

  const SubscriptionModel = db.define(
    "subscription",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.TEXT,
      first_bill: Sequelize.DATEONLY,
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");

  const Subscription = db.models.subscription;

  return { Subscription };
};

export default connect;
