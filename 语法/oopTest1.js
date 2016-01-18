/**
 * Created by Fluky on 2015/5/3.
 */
/**
 * ÕâÖÖ¸Ã·½·¨ ¸ü·ûºÏoopµÄÔ­Ôò¶Ô ¶ÔÔ­ÐÍ½øÐÐ²Ù×÷
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
    //ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
    window.Person = Person;
}());

(function () {
    function Student(name,sex)
    {
        this._name = name;
        this._sex = sex;
    }
    //studentï¿½ï¿½ï¿½ï¿½Person
    Student.prototype = new Person();
    var superSay = Student.prototype.say;
    //ï¿½ï¿½sayï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
    Student.prototype.say = function(){
        superSay.call(this);
        alert('override');
    };
    window.Student = Student;
}());