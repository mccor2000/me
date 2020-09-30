export const getMany = model => async (filter = {}) => {
  const docs = await model.find(filter).limit(100).lean().exec();

  if (!docs) throw new Error('not found');

  return docs;
};

export const getOne = model => async (filter = {}) => {
  const doc = await model.find(filter).lean().exec();

  if (!doc) throw new Error('not found');

  return doc;
};

export const createOne = model => async data => {
  const doc = await model.create(data);

  if (!doc) throw new Error('not found');

  return doc;
};

export const updateOne = model => async (filter = {}, data) => {
  const updatedDoc = await model
    .findAndUpdate(filter, data, { new: true })
    .lean()
    .exec();

  if (!updatedDoc) throw new Error('not found');

  return updatedDoc;
};

export const deleteOne = model => async (filter = {}) => {
  const removedDoc = await model.findAndDelete(filter).lean().exec();

  if (!removedDoc) throw new Error('not found');

  return removedDoc;
};

export const CRUDService = model => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model)
});
