module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define("Sessions", {
        sid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        expires: {
            type: DataTypes.DATE
        },
        data: {
            type: DataTypes.TEXT
        }
    });

    return Sessions;
}