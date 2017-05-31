'use strict';

function thoundFormat(str){
  return str.replace(/(?!^)(\d{3})+$/g)
}