"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTree = (array, parent_id) => {
    let tree = [];
    for (let it of array) {
        if (parent_id == it.parent_id) {
            const children = createTree(array, it._id.toString());
            if (children.length > 0) {
                it.children = children;
            }
            tree.push(it);
        }
    }
    return tree;
};
const createTreeHelper = (array, parent_id) => {
    const tree = createTree(array, parent_id);
    return tree;
};
exports.default = createTreeHelper;
