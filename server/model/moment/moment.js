'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const momentSchema = new Schema({
  createTime: String,
  imageUrl: String,
  intro: String,
  userId: Number
})

momentSchema.index({id: 1})

const Moment = mongoose.model('Moment', momentSchema)

export default Moment
