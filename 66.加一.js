/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (37.65%)
 * Total Accepted:    40K
 * Total Submissions: 106.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    var len = digits.length;

        /**退出当前循环的条件是当前位不为9，或者需要扩位 */
    for (let i = len - 1; i > -1; i--) {
        if (digits[i] < 9) { //当前位不为9
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return [1, ...digits]; //解构赋值的写法，当前需要扩位了，

};

var t = [4, 3, 2, 1];
plusOne(t);

