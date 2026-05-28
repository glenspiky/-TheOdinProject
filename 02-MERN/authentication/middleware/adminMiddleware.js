const isAdminUser = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: fales,
      message: "Access denied! ",
    });
  }

  next();
};
module.exports = isAdminUser;
