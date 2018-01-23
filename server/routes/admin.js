import express from 'express'
import Admin from '../controller/admin/admin'

const router = express.Router()
router.get('/info', Admin.getAdminInfo)
router.post('/upload', Admin.uploadPic)
router.post('/momentSave', Admin.saveMoment)

module.exports = router