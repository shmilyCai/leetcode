/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.25%)
 * Total Accepted:    57.6K
 * Total Submissions: 178.4K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    var result = '';
    if (strs.length === 0) {  //判断为空或者只有1个字符串的时候
        return result
    } else if (strs.length === 1) {
        return result = strs[0];
    }

    var temp = strs[0];
    for(var i = 0; i < temp.length; i++){ //循环第一个字符串
        for(var j = 1; j < strs.length; j++){ //循环字符串数组
            if(temp[i] != strs[j][i]){ //如果不相等了，则说明不同
                return result
            }
        }
        result += temp[i];  //将相等的值，赋值给result
    }

    return result;

};

