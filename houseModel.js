import { Sequelize, DataTypes } from "sequelize-mock";

const sequelize = new Sequelize();

const House = sequelize.define("houses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentValue: {
    type: DataTypes.Float,
    allowNull: false,
    unique: true,
  },
  loanAmount: {
    type: DataTypes.Float,
    allowNull: false,
  },
  risk: {
    type: DataTypes.Float,
    allowNull: false,
  },
});

sequelize.sync();
