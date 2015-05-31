/**
 * Created by Fluky on 2015/5/3.
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
    //��������������
    window.Person = Person;
}());

(function () {
    function Student(name,sex)
    {
        this._name = name;
        this._sex = sex;
    }
    //student����Person
    Student.prototype = new Person();
    var superSay = Student.prototype.say;
    //��say��������
    Student.prototype.say = function(){
        superSay.call(this);
        alert('override');
    };
    window.Student = Student;
}());