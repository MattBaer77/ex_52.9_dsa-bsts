class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    const newNode = new Node(val)

    if (!this.root){

      this.root = newNode
      return this

    }

    let currentNode = this.root

    while(currentNode) {

      if(currentNode.val > newNode.val) {

        if(!currentNode.left){

          currentNode.left = newNode
          return this

        }

      }

      if(currentNode.val < newNode.val) {

        if(!currentNode.right) {

          currentNode.right = newNode
          return this

        }

      }

      // Switching currentNode conditionally
      if(currentNode.val > newNode.val){

        currentNode = currentNode.left

      } else {

        currentNode = currentNode.right

      }

    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {

    const newNode = new Node(val)

    if (!this.root){

      this.root = newNode
      return this

    }

    if(currentNode.val > newNode.val) {

      if(!currentNode.left){

        currentNode.left = newNode;
        return this

      } else {

        this.insertRecursively(val, currentNode.left)

      }

    }

    if(currentNode.val < newNode.val) {

      if(!currentNode.left){

        currentNode.right = newNode;
        return this

      } else {

        this.insertRecursively(val, currentNode.left)

      }

    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
