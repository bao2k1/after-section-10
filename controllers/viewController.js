const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res) => {
  //Get tour data from collection
  const tours = await Tour.find();

  //Build template

  //Render that template using data

  res.status(200).render('overview', {
    tittle: 'All tours',
    tours
  });
});
// exports.getTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findOne({ slug: req.params.slug }).populate({
//     path: ' reviews',
//     fields: 'review rating user'
//   });
//   res.status(200).render('tour', {
//     tittle: 'The Forest Hiker Tour',
//     tour
//   });
// });
exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name.', 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour
  });
});

exports.getLoginForm = async (req, res) => {
  res.status(200).render('login', {
    tittle: 'Log into your account'
  });
};

exports.getSignupForm = async (req, res) => {
  res.status(200).render('signup', {
    tittle: 'Sign up your new account'
  });
};

exports.getAccount = async (req, res) => {
  res.status(200).render('account', {
    tittle: 'Your account'
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).render('account', {
    tittle: 'Your account',
    user: updatedUser
  });
});
