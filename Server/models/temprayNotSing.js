import mongoose from 'mongoose';
const TemprarySch = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      vrify: {
        type: Boolean,
        required: true,
      },
      expireAt: {
        type: Date,
        default: Date.now,
    },
    },
    {
      timestamps: true,
    }
  );
  TemprarySch.index({ expireAt: 1 }, { expireAfterSeconds: 120 });

  TemprarySch.pre('save', function (next) {
    this.expireAt = new Date(Date.now() + 60 * 1000);
    next();
});

const Temprary = mongoose.model('Temprary', TemprarySch);

export default Temprary;