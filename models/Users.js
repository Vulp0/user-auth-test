module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        UserID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
        },
        Password: {
            type: DataTypes.STRING
        }
    });

    return Users;
}