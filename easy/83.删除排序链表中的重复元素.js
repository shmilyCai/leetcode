/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (44.23%)
 * Total Accepted:    18.6K
 * Total Submissions: 42K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 
 * 注意：给定的是排序的链表
 */
var deleteDuplicates = function(head) {
    var list = head;
    if(list === null) return null;  //先判断链表是否为空

    while(list.next != null){  // 当链表中存在下一个时，开始循环
        if(list.val == list.next.val){ //如果相等，
            list.next = list.next.next; //移除相同的
        }else{
            list = list.next; 
        }
    }
    return head;
};

