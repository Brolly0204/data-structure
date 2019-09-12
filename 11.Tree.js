class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const Tree = (() => {
  class LocalTree {
    insert(value) {
      const newNode = new Node(value)
      if (this.root == null) {
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode)
      }
    }

    insertNode(node, newNode) {
      if (newNode.value > node.value) {
        if (node.right == null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      } else if (newNode.value < node.value) {
        if (node.left == null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      }
    }

    preOrderTraverseNode(node, callback) {
      if (node) {
        callback(node.value)
        this.preOrderTraverseNode(node.left, callback)
        this.preOrderTraverseNode(node.right, callback)
      }
    }

    inOrderTraverseNode(node, callback) {
      if (node) {
        this.inOrderTraverseNode(node.left, callback)
        callback(node.value)
        this.inOrderTraverseNode(node.right, callback)
      }
    }

    postOrderTraverseNode(node, callback) {
      if (node) {
        this.postOrderTraverseNode(node.left, callback)
        this.postOrderTraverseNode(node.right, callback)
        callback(node.value)
      }
    }

    inOrderTraverse(callback) {
      this.inOrderTraverseNode(this.root, callback)
    }

    preOrderTraverse(callback) {
      this.preOrderTraverseNode(this.root, callback)
    }

    postOrderTraverse(callback) {
      this.postOrderTraverseNode(this.root, callback)
    }

    searchNode(node, value) {
      if (node) {
        if (value > node.value) {
          return this.searchNode(node.right, value)
        } else if (value < node.value) {
          return this.searchNode(node.left, value)
        } else {
          return true
        }
      }
      return false
    }

    search(value) {
      return this.searchNode(this.root, value)
    }

    minNode(node) {
      if (node == null) return null
      while (node && node.left) {
        node = node.left
      }
      return node.value
    }

    min() {
      return this.minNode(this.root)
    }

    maxNode(node) {
      if (node == null) return null
      while (node && node.right) {
        node = node.right
      }
      return node.value
    }

    max() {
      return this.maxNode(this.root)
    }

    getRoot() {
      return this.root
    }

    findMinNode(node) {
      if (node == null) return null
      while (node && node.left) {
        node = node.left
      }
      return node
    }

    removeNode(node, value) {
      if (node == null) {
        return null
      }
      if (value > node.value) {
        node.right = this.removeNode(node.right, value)
        return node
      } else if (value < node.value) {
        node.left = this.removeNode(node.left, value)
        return node
      } else {
        // 删除叶节点
        if (node.left == null && node.right == null) {
          node = null
          return node
        }
        // 只有一个子节点
        if (node.left == null && node.right) {
          node = node.right
          return node
        }

        if (node.right == null && node.left) {
          node = node.left
          return node
        }

        // 两边节点都有（要替换为右侧子树的最小节点）
        // 查找到右边子树中 最小节点
        const minNode = this.findMinNode(node.right)
        // 将当前要删除节点 改写为minNode的值 不能直接替换 否则 右子树被替换
        node.value = minNode.value
        // 再将右侧子树中原本的minNode从中移除
        node.right = this.removeNode(node.right, minNode.value)
        return node
      }
    }

    remove(value) {
      this.root = this.removeNode(this.root, value)
    }
  }
  return LocalTree
})()

const tree = new Tree()
tree.insert(11)
tree.insert(8)
tree.insert(4)
tree.insert(9)
tree.insert(10)
tree.insert(1)
tree.insert(3)
tree.insert(5)
tree.insert(16)
tree.insert(13)
tree.insert(17)

tree.remove(8)
console.log(JSON.stringify(tree))

// console.log(tree.search(6))
// console.log(tree.min())
// console.log(tree.max())

// tree.preOrderTraverse((value) => {
//   console.log(value)
// })

// tree.inOrderTraverse((value) => {
//   console.log(value)
// })

// tree.postOrderTraverse((value) => {
//   console.log(value)
// })
