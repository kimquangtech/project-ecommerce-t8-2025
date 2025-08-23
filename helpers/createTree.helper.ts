const createTree = (array: any, parent_id: any) => {
  let tree = [];
  for(let it of array) {
    if(parent_id == it.parent_id) {
      const children = createTree(array, it._id.toString());
      if(children.length > 0) {
        it.children = children;
      }
      tree.push(it);
    }
  }
  return tree;
}

const createTreeHelper = (array: any, parent_id: any) => {
  const tree = createTree(array, parent_id);
  return tree;
}

export default createTreeHelper;