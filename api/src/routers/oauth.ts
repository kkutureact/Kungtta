import express from 'express';
import passport from 'passport';
import google from 'passport-google-oauth';
import config from '../config/main.json';

const router = express.Router();

router.get('/oauth/google', passport.authenticate(
    'google',
    {
        scope: [
            'email',
            'profile'
        ]
    }
));
router.get('/oauth/google/callback', passport.authenticate('google',
    {
        successRedirect: config.webserver_host,
        failureRedirect: `${config.webserver_host}/loginerror`
    }
));

router.get('/oauth/naver', passport.authenticate('naver'));
router.get('/oauth/naver/callback', passport.authenticate('naver',
    {
        successRedirect: config.webserver_host,
        failureRedirect: `${config.webserver_host}/loginerror`
    }
));

router.get('/oauth/discord', passport.authenticate('discord', {
    scope: [
        'identify',
        'email'
    ]
}));
router.get('/oauth/discord/callback', passport.authenticate('discord',
    {
        successRedirect: config.webserver_host,
        failureRedirect: `${config.webserver_host}/loginerror`
    }
));

router.get('/oauth/github', passport.authenticate('github'));
router.get('/oauth/github/callback', passport.authenticate('github',
    {
        successRedirect: config.webserver_host,
        failureRedirect: `${config.webserver_host}/loginerror`
    }
));

export default router;