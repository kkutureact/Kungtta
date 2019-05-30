import express from 'express';
import Users from '../database/Users/index';
import {logger} from '../index';

const router = express.Router();

router.put('/admin/ban/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const {uuid} = req.params;
        const {status} = req.body;

        Users.update({isBanned: status}, {
            where: {
                uuid: uuid
            }
        }).then(() => {
            logger.info(`관리자가 ${uuid} 사용자의 밴 상태를 ${status}(으)로 변경하였습니다.`);
        }).catch((error) => {
            logger.error(`사용자 밴 과정에서 오류가 발생하였습니다. \nError: ${error}`);
        });

        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

router.put('/admin/mute/:uuid', (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        const {uuid} = req.params;
        const {status} = req.body;

        Users.update({isMuted: status}, {
            where: {
                uuid: uuid
            }
        }).then(() => {
            logger.info(`관리자가 ${uuid} 사용자의 뮤트 상태를 ${status}(으)로 변경하였습니다.`);
        }).catch((error) => {
            logger.error(`사용자 뮤트 과정에서 오류가 발생하였습니다. \nError: ${error}`);
        });

        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

export default router;