/**
 * Created by Fluky on 2015/5/3.
 */
/**
 * 这种该方法 更符合oop的原则对 对原型进行操作
 */
(function(){
     function Person(name,sex)
     {
         this._name = name;
         this._sex = sex;
     }
     Person.prototype = {
          say:function(){
              alert(this._name+'  '+this._sex);
          }
     };
    //将类的接口开放
    window.Person = Person;
}());

(function () {
    function Student(name,sex)
    {
        this._name = name;
        this._sex = sex;
    }
    //student继承Person
    Student.prototype = new Person();
    var superSay = Student.prototype.say;
    //对say方法重写
    Student.prototype.say = function(){
        superSay.call(this);
        alert('override');
    };
    window.Student = Student;
}());