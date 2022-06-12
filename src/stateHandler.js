const handleAdd = (template, initialObject, callback) => {
  callback([...initialObject, template]);
}

const handleRemove = (id, initialObject, callback) => {
  callback(initialObject.filter(object => object.id !== id));
}

const handleUpdate = (event, initialObject, callback) => {
  let id = event.target.id;

  let newValue = event.target.value;

  let currentList = initialObject;

  currentList[id].name = newValue;

  callback(currentList);
}

export { handleAdd, handleRemove, handleUpdate };