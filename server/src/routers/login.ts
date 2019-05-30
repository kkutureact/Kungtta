import express from 'express';
import passport from 'passport';
import google from 'passport-google-oauth';
import config from '../config/main.json';
import Users from '../database/Users/index';
import uuidv4 from 'uuid/v4';
import {logger} from '../index';

const router = express.Router();

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(config.webserver_host);
});

router.get('/auth/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({user: req.user});
    } else {
        res.json({
            user: {
                uuid: uuidv4(),
                vendor: 'guest',
                nickname: 'GUEST' + Math.floor(Math.random() * 10000),
                profile: 'guest'
            }
        });
    }
});

router.get('/auth/profile/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const {uuid} = req.params;

        Users.findOne({where: {uuid: uuid}})
            .then((data: any) => {
                res.json(data.dataValues);
                logger.info(`관리자가 ${uuid} 사용자 정보를 조회하였습니다.`);
            })
            .catch(() => {
                res.send('존재하지 않는 사용자입니다.');
            });
    } else {
        res.status(401).send('Login required.');
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

router.get('/auth/google/callback', passport.authenticate('google',
    {
        successRedirect: config.webserver_host,
        failureRedirect: `${config.webserver_host}/loginerror`
    }
));

router.get('/auth/naver', passport.authenticate('naver'));

router.get('/auth/naver/callback', passport.authenticate('naver',
    {
        successRedirect: config.webserver_host,
        failureRedirect: `${config.webserver_host}/loginerror`
    }
));

export default router;