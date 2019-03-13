/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.86%)
 * Total Accepted:    92.2K
 * Total Submissions: 289.5K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var ret = [];
    var strX = x.toString(); //转换为字符串
    for(var i = strX.length - 1; i > 0; i--){ //从最后一个反转到第二个
        ret.push(strX[i]);
    }
    if(strX[0] == '-'){ //如果第一个为-，添加到首元素
        ret.unshift('-');
    }else{
        ret.push(strX[0]); //如果不为-，则添加到最后
    }
    var num = parseInt(ret.join('')); //join将数组转换为字符串，再转换为数字
    if(num < Math.pow(-2,31) || num > Math.pow(2,31) - 1){ //看下上面的注意，这个是判断条件
        return 0
    }
    return num;
};

