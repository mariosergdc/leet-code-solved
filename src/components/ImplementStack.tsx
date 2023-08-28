import React from "react";

const ImplementStack = () => {
  var MyStack = function () {
    this.stk = [];
  };

  /**
   * @param {number} x
   * @return {void}
   */
  MyStack.prototype.push = function (x) {
    this.stk.push(x);
  };

  /**
   * @return {number}
   */
  MyStack.prototype.pop = function () {
    return this.stk.pop();
  };

  /**
   * @return {number}
   */
  MyStack.prototype.top = function () {
    return this.stk[this.stk.length - 1];
  };

  /**
   * @return {boolean}
   */
  MyStack.prototype.empty = function () {
    return this.stk.length === 0;
  };

  /**
   * Your MyStack object will be instantiated and called as such:
   * var obj = new MyStack()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.empty()
   */
  return <div>ImplementStack</div>;
};

export default ImplementStack;
