/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.86%)
 * Total Accepted:    19.2K
 * Total Submissions: 66.7K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
// 这道题其实很简单，必须先除掉2边的空格，再根据空格进行分割，返回最后一个的长度
var lengthOfLastWord = function (s) {
    var str = s.trim().split(' ');
    var len = str.length;
    return str[len - 1].length;
};

