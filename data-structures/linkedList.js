/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.
//* Linked List Cormen exercises
? 1. Can You implement the dynamic-set operation INSERT and DELETE on a single linked list in 0(1) time?
? 2. Implement a stack using a singly linked list L. The operations PUSH and POP should still take O.1/ time.
? 3. Implement a queue by a singly linked list L. The operations ENQUEUE and DE- QUEUE should still take O.1/ time.
? 4. As written, each loop iteration in the LIST-SEARCH0 procedure requires two tests: one for x ¤ L:nil and one for x:key ¤ k. Show how to eliminate the test for x ¤ L:nil in each iteration.
? 5. Implement the dictionary operations INSERT, DELETE, and SEARCH using singly linked, circular lists. What are the running times of your procedures?
? 6. The dynamic-set operation UNION takes two disjoint sets S1 and S2 as input, and it returns a set S D S1 [ S2 consisting of all the elements of S1 and S2. The sets S1 and S2 are usually destroyed by the operation. Show how to support UNION in O.1/ time using a suitable list data structure.
? 7. Give a ‚.n/-time nonrecursive procedure that reverses a singly linked list of n elements. The procedure should use no more than constant storage beyond that needed for the list itself.
 */
// Todo convert to a Doubly-linked-list and complete exercises from Cormen text
// PART 1

function Node(value) {
  this.next = null;
  this.prev = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
}

LinkedList.prototype.forEach = function(callback) {
  // implement me...
  // myList.forEach(callbackFn)
  // invoke callback function with the value of each node
  let currentNode = this.head;
  while (currentNode) {
    callback(currentNode);
    currentNode = currentNode.next;
  }
};
// Time complexity:
const newList = new LinkedList(4);

LinkedList.prototype.print = function() {
  // implement me...
  // myList.print()
  // => string with all values in list (ex: '0, 1, 2, 3')
  let string = '';
  let currentNode = this.head;
  while (currentNode) {
    string += `${currentNode.value}`;
    currentNode = currentNode.next;
  }
  console.log(string);
};
// Time complexity:
newList.print();

LinkedList.prototype.insertAfter = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeAfter = function(node) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeHead = function() {
  // implement me...
};

LinkedList.prototype.findNode = function(value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.appendToTail = function(value) {
  // implement me...
};
// Time complexity:

// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:

/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */
