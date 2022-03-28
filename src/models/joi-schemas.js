import Joi from "joi";

export const UserSpec = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
};

export const UserCredentialsSpec = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
};

export const TrailSpec = {
    name: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    description: Joi.string().required(),
};

export const TraillistSpec = {
    name: Joi.string().required(),
};