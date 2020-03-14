// source: https://www.geeksforgeeks.org/print-path-root-given-node-binary-tree/

const tree = [
    {
        id: 0,
        children: [1, 2, 3]
    },
    {
        id: 1,
        children: [4, 5, 6]
    },
    {
        id: 2,
        children: []
    },
    {
        id: 3,
        children: [7, 8, 9, 10]
    },
    {
        id: 4,
        children: []
    },
    {
        id: 5,
        children: [11, 12, 13]
    },
    {
        id: 6,
        children: [14, 15]
    },
    {
        id: 7,
        children: []
    },
    {
        id: 8,
        children: [16, 17]
    },
    {
        id: 9,
        children: []
    },
    {
        id: 10,
        children: []
    },

    {
        id: 11,
        children: []
    },
    {
        id: 12,
        children: []
    },
    {
        id: 13,
        children: [18, 19]
    },
    {
        id: 14,
        children: []
    },
    {
        id: 15,
        children: []
    },
    {
        id: 16,
        children: [20, 21, 22]
    },
    {
        id: 17,
        children: []
    },
    {
        id: 18,
        children: []
    },
    {
        id: 19,
        children: []
    },
    {
        id: 20,
        children: []
    },
    {
        id: 21,
        children: [23]
    },
    {
        id: 22,
        children: []
    },
    {
        id: 23,
        children: []
    },
]

const getNode = (id) => {
    const result = tree.filter(v => v.id === id ? v : null)
    return result[0]
}

// Returns true if there is a path from root  
// to the given node. It also populates   
// 'arr' with the given path  
const hasPath = (node, ind, arr, targetId) => {
    // if root is NULL  
    // there is no path  
    if (node.id === undefined)
        return false

    // push the node's value in 'arr'  
    arr.push(node.id)

    // if it is the required node  
    // return true  
    if (node.id === targetId)
        return true

    // else check whether the required node lies  
    // in any of the subtree of the current node  
    for (let i = ind; i < node.children.length; i++) 
        if (hasPath(getNode(node.children[i]), 0, arr, targetId))
            return true

    // required node does not lie either in the   
    // left or right subtree of the current node  
    // Thus, remove current node's value from   
    // 'arr'and then return false      
    arr.pop()

    return false
}

const showPathTo = val => {
    let thePath = []
    hasPath(tree[0], 0, thePath, val)
    return thePath.length > 0 ? thePath.reduce((a, b) => a + ' &rarr; ' + b) : "No Path"
}