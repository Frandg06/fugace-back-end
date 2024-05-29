import {
  Hobbie,
  Interaction,
  SocialNetwork,
  User,
  UserHobbie,
  UserInteraction,
  UserSocialNetwork,
} from "./index.js";

//Relacion user -> hobbie -> user_hobbie
User.hasMany(UserHobbie, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Hobbie.hasMany(UserHobbie, {
  foreignKey: "hobbie_id",
  sourceKey: "id",
});

UserHobbie.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

UserHobbie.belongsTo(Hobbie, {
  foreignKey: "hobbie_id",
  targetKey: "id",
});

//Relacion user -> social network -> user_social_network
User.hasMany(UserSocialNetwork, {
  foreignKey: "user_id",
  sourceKey: "id",
});

SocialNetwork.hasMany(UserSocialNetwork, {
  foreignKey: "social_network_id",
  sourceKey: "id",
});

UserSocialNetwork.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

UserSocialNetwork.belongsTo(SocialNetwork, {
  foreignKey: "social_network_id",
  targetKey: "id",
});

//Relacion user -> interaction -> user_interaction
User.hasMany(UserInteraction, {
  foreignKey: "user_id",
  sourceKey: "id",
});

User.hasMany(UserInteraction, {
  foreignKey: "interaction_user_id",
  sourceKey: "id",
});

Interaction.hasMany(UserInteraction, {
  foreignKey: "interaction_id",
  sourceKey: "id",
});

UserInteraction.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

UserInteraction.belongsTo(User, {
  foreignKey: "interaction_user_id",
  targetKey: "id",
});
