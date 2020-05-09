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
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  const SubscriptionMetaModel = db.define(
    "subscriptionMeta",
    {
      start: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      interval: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        defaultValue: "month",
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  SubscriptionModel.hasMany(SubscriptionMetaModel);
  SubscriptionMetaModel.belongsTo(SubscriptionModel);

  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");

  const Subscription = db.models.subscription;
  const SubscriptionMeta = db.models.subscriptionMeta;

  return { Subscription, SubscriptionMeta };
};

export default connect;
