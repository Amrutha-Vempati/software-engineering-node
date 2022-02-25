/**
 * Defines the Schema for the User collection. It maintains all the constraints required with respect to the
 * schema fields to ensure the data is valid.
 *
 * @typedef User represents the user of the tuiter app
 * @property {String} username the username of the user and, it is a required field
 * @property {String} password the password of the user and, it is a required field
 * @property {String} firstName the firstname of the user
 * @property {String} lastName the lastname of the user
 * @property {String} email the firstname of the user and, it is a required field
 * @property {String} profilePhoto the profile pic of the user
 * @property {String} headerImage the header image of the user profile
 * @property {String} biography the biography of the user as per the profile
 * @property {String} dateOfBirth the DOB of the user
 * @property {String} accountType the account type of the user. It should be one among the enum values of AccountType
 * @property {String} maritalStatus the marital status of the user. It should be one among the enum values of
 * MaritalStatus
 * @property {Object} location the location object which specifies the latitude and longitude of the location
 * @property {Number} salary the salary of the user
 */
import mongoose from "mongoose";
import User from "../../models/users/User";
const UserSchema = new mongoose.Schema<User>({
    //username: {type: String, required: true, default: `testusername${Date.now()}`},
    username: {type: String, required: true},
    password: {type: String, required: true},
    //password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: {type: Number, default: 50000}
}, {collection: "users"});

export default UserSchema;