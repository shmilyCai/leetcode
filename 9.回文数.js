/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.06%)
 * Total Accepted:    79.9K
 * Total Submissions: 142.6K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */

 /**  方法一*/
var isPalindrome2 = function(x){
    var str = x.toString(); //先将整数转换为字符串，如果不采用这种方法，怎么解决了？
    var ret = [];
    for(var i = 0; i < str.length; i++){ //循环字符串
        var j = str.length - 1 - i;  //从最后一个开始
        if(str[j] != 0){  //如果最后一个为0，不进行比较
            if(str[j] == str[i]){ //相同，就向数组中传入true，否则false
                ret.push(true);
            }else{
                ret.push(false)
            }
        }
    }
    var t = ret.every(function(item){ //every是判断数组中是否每个月元素都满足条件
        return item === true;
    })
    return t;
}

 /**方法二 */
var isPalindrome = function(x) {
    /**方法二 */
    var str = x.toString(); //先转换为字符串
    var str1 = str.split("").reverse().join("");  
    //split将字符串转换为字符串数组，reverse对数组进行反转
    //join将数组转换成字符串
    return str === str1;
};

