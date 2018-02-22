import pick from 'lodash/pick';

export default (sequelize, DataTypes) => {
    const Namecard = sequelize.define(
        'Namecard',
        {
            card: {type: DataTypes.STRING, allowNull: false, unique: true},
            username: {type: DataTypes.STRING, allowNull: false, unique: true }        
        },
        {
            timestamps: true,
            paranoid: true
        }
    )
}