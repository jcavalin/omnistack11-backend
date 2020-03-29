const express = require('express');
<<<<<<< HEAD
const {celebrate, Segments, Joi} = require('celebrate');
=======

>>>>>>> 8f8fdd3882a45cf059ffc8f1ba2d6f7250989c3f
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
<<<<<<< HEAD
routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name : Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY] : Joi.object({
        page : Joi.number(),
    }).unknown()
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object({
        id : Joi.number().required(),
    }).unknown()
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS] : Joi.object({
        authorization : Joi.string().required(),
    }).unknown()
}), ProfileController.index);
=======
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
>>>>>>> 8f8fdd3882a45cf059ffc8f1ba2d6f7250989c3f

module.exports = routes;