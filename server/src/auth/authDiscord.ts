import passport from 'passport';
import discord from 'passport-discord';
import config from '../config/oauth.json';
import {onSuccess} from './auth';

const Strategy = discord.Strategy;

export default () => {
    passport.use(new Strategy({
            clientID: config.discord.clientId,
            clientSecret: config.discord.clientSecret,
            callbackURL: '/oauth/discord/callback'
        }, (accessToken, refreshToken, profile, done) => {

            const email = profile.email!;
            const nickname = profile.username;
            const profileUrl = 'https://cdn.discordapp.com/avatars/' + profile.id + '/' + profile.avatar + '.jpg';

            onSuccess('discord', email, nickname, profileUrl, done);
        }
    ));
}