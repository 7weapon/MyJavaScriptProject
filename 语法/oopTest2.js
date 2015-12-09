/**
 * Created by Fluky on 2015/5/3.
 */
/**
 * 该方法返回一个对象
 */
(function(){
   function Person(name)
   {
       var _this ={};
       _this.name = name;
       _this.say = function()
       {
         alert('P.Name:'+_this.name)
       };
       return _this;
   }
    window.Person = Person;
}());

(function(){
    function Student(name)
    {
        var _this = Person(name);
        //Person中的方法复用
        var superSay = _this.say;
        _this.say = function(){
            superSay.call(_this);
          alert('S.name:'+_this.name);
        };
        return _this;
    }
    window.Student = Student;
}());