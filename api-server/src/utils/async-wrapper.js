export const wrapper = fn => (req, res, next) => {
  fn(req, res, next).catch(next);
};
