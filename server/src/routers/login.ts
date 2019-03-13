import express from 'express';
import passport from 'passport';
import google from 'passport-google-oauth';
import config from '../config/main.json';
import { logger } from '../index';

const router = express.Router();

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(config.webserver_host);
});

router.get('/auth/self', (req, res) => {
    if(req.isAuthenticated()) {
        res.json({user: req.user});
    } else {
        res.send('Login required.');
    }
});


router.get('/auth/google', passport.authenticate(
    'google',
    {
        scope: [
            'email',
            'profile'
        ]
    }
));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: config.webserver_host,
    failureRedirect: `${config.webserver_host}/loginerror`
}));

export default router;