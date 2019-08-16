import express from 'express';
import Users from '../database/Users/index';
import { logger } from '../index';
import BanList from '../database/Banlist';

const router = express.Router();

router.post('/admin/ban/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const { uuid } = req.params;
        const { reason, exp } = req.body;

        BanList.create({
            uuid: uuid,
            reason: reason,
            exp_date: exp
        }).then(() => {
            logger.info(`@${req.ip} 관리자가 ${uuid} 사용자를 밴 하였습니다.`);
            res.sendStatus(200);
        }).catch((error) => {
            logger.error(`@${req.ip} 사용자 밴 과정에서 오류가 발생하였습니다. \nError: ${error}`);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(401);
    }
});

router.delete('/admin/unban/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const { uuid } = req.params;

        BanList.destroy({
            where: {
                uuid: uuid
            }
        }).then(() => {
            logger.info(`@${req.ip} 관리자가 ${uuid} 사용자를 밴 해제 하였습니다.`);
            res.sendStatus(200);
        }).catch((error) => {
            logger.error(`@${req.ip} 사용자 밴 과정에서 오류가 발생하였습니다. \nError: ${error}`);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(401);
    }
});

router.put('/admin/mute/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const { uuid } = req.params;
        const { exp } = req.body;

        Users.update({ isMuted: true, mute_exp_date: exp }, {
            where: {
                uuid: uuid
            }
        }).then(() => {
            logger.info(`@${req.ip} 관리자가 ${uuid} 사용자를 뮤트 하였습니다.`);
            res.sendStatus(200);
        }).catch((error) => {
            logger.error(`@${req.ip} 사용자 뮤트 과정에서 오류가 발생하였습니다. \nError: ${error}`);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(401);
    }
});

router.put('/admin/unmute/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const { uuid } = req.params;
        const { exp } = req.body;

        Users.update({ isMuted: false, mute_exp_date: exp }, {
            where: {
                uuid: uuid
            }
        }).then(() => {
            logger.info(`@${req.ip} 관리자가 ${uuid} 사용자를 뮤트 해제 하였습니다.`);
            res.sendStatus(200);
        }).catch((error) => {
            logger.error(`@${req.ip} 사용자 뮤트 과정에서 오류가 발생하였습니다. \nError: ${error}`);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(401);
    }
});

export default router;
