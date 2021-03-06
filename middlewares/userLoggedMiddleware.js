const modeloUsuario = (require('../models/modeloUsuario'))

const db = require ("../database/models");

function userLoggedMiddleware(req,res,next){
    
    
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    let userFromCookie = modeloUsuario.findByField('email', emailInCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    console.log(userFromCookie)

    next(); 

}

module.exports = userLoggedMiddleware;



/* res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    let userFromCookie = modeloUsuario.findByField('email', emailInCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next(); */

/* 
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    db.Users.findOne({
        where: {
            email: emailInCookie
        },
    })
    .then((resultado) => {

        let userFromCookie = resultado;

        if(userFromCookie){
            req.session.userLogged = userFromCookie;
        }

        if(req.session && req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    })
    .catch((error) => console.log(error))


    next();
 */
   /*  res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    let userFromCookie = modeloUsuario.findByField('email', emailInCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();  */















    /*res.locals.isLogged = false;

    let emailInCookie = "";
    
    if(req.cookies.userEmail){
        emailInCookie = req.cookies.userEmail
    };

    res.locals.userLogged = req.session.userLogged;

    db.Users.findOne({
        where: {
            email: emailInCookie
        },
    })
    .then((resultado) => {

        let userFromCookie = resultado;

        if(userFromCookie){
            req.session.userLogged = userFromCookie;
        }

        if(req.session && req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    })
    .catch((error) => console.log(error))


    next();*/