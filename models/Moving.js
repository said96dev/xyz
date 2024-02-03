import mongoose from 'mongoose'
import validator from 'validator'

const MovingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
      },
    },
    phone: {
      type: String,
    },
    from_city: {
      type: String,
      maxlength: 15,
      default: 'city',
    },
    from_street: {
      type: String,
      maxlength: 25,
      default: 'street',
    },
    from_state: {
      type: String,
      maxlength: 25,
      default: 'state',
    },
    from_zipCode: {
      type: String,
      default: 'Zip Code',
    },
    from_houseN: {
      type: String,
      maxlength: 5,
    },
    from_roomCount: {
      type: String,
      required: [true, 'Please provide number of rooms'],
    },

    from_distanceToTransporter: {
      type: String,
      required: [true, 'Please provide distance to transporter'],
    },
    from_floor: {
      type: String,
      required: [true, 'Please provide floor'],
    },
    to_roomCount: {
      type: String,
      required: [true, 'Please provide number of to rooms'],
    },
    to_distanceToTransporter: {
      type: String,
      required: [true, 'Please provide distance to to transporter'],
    },
    to_floor: {
      type: String,
      required: [true, 'Please provide  to floor'],
    },
    to_city: {
      type: String,
      maxlength: 15,
      default: 'city',
    },
    to_street: {
      type: String,
      maxlength: 25,
      default: 'street',
    },
    to_state: {
      type: String,
      maxlength: 25,
      default: 'state',
    },
    to_zipCode: {
      type: String,
      default: 'Zip Code',
    },
    to_houseN: {
      type: String,
      maxlength: 5,
    },
    date: {
      required: [true, 'Please provide date'],
      type: Date,
      default: Date.now(),
    },
    time: {
      type: Date,
      default: Date.now(),
    },
    city: {
      type: String,
      maxlength: 15,
      default: 'city',
    },
    street: {
      type: String,
      maxlength: 25,
      default: 'street',
    },
    state: {
      type: String,
      maxlength: 25,
      default: 'state',
    },
    zipCode: {
      type: String,
      default: 'Zip Code',
    },
    houseN: {
      type: String,
      maxlength: 5,
    },
    to_distanceToTransporter: {
      type: String,
      default: 0,
    },
    from_distanceToTransporter: {
      type: String,
      default: 0,
    },
    from_itemsToTransport: {
      type: String,
      enum: ['Buch', 'Laptop', 'Kleidung', 'Fernseher', 'Sonstige'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export default mongoose.model('Moving', MovingSchema)
